import { defineConfig, loadEnv, mergeConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

function devServerFnErrorLogger() {
	const HMR_SEND_KEY = "__TANSTACK_SERVER_FN_HMR_SEND__";

	return {
		name: "dev-server-fn-error-logger",
		apply: "serve",
		enforce: "pre",
		configureServer(server) {
			globalThis[HMR_SEND_KEY] = (data) => {
				server.ws.send({
					type: "custom",
					event: "server-fn-error",
					data,
				});
			};
		},
		transform(code, id) {
			const normalizedId = id.replace(/\\/g, "/");
			const isTargetModule =
				normalizedId.includes("/@tanstack/start-server-core/src/server-functions-handler.ts") ||
				normalizedId.includes("/@tanstack/start-server-core/dist/esm/server-functions-handler.js");

			if (!isTargetModule) {
				return null;
			}

			const needle = "const unwrapped = res.result || res.error";
			if (!code.includes(needle)) {
				return null;
			}

			return code.replace(
				needle,
				`${needle}

			if (res?.error) {
				const err = res.error
				const payload = {
					source: 'tanstack',
					type: 'server-fn-error',
					method: request.method,
					url: request.url,
					name: err?.name ?? 'Error',
					message: err?.message ?? String(err),
					stack: typeof err?.stack === 'string' ? err.stack : undefined,
				}
				globalThis.${HMR_SEND_KEY}?.(payload)
			}`
			);
		},
	};
}

export default defineConfig(async ({ command, mode }) => {
	const internalPlugins = [];

	internalPlugins.push((await import("@tailwindcss/vite")).default());
	internalPlugins.push(tsConfigPaths({ projects: ["./tsconfig.json"] }));
	internalPlugins.push(devServerFnErrorLogger());

	if (command === "build") {
		// Disable Cloudflare adapter for Vercel compatibility.
		// Intentionally do not register the Cloudflare plugin so the build
		// outputs a Node.js-compatible SSR bundle instead of Cloudflare Workers.
		try {
			// Attempt to import only to avoid hard failures in environments
			// where the package isn't installed; but do not add the plugin.
			await import("@cloudflare/vite-plugin").catch(() => {});
		} catch {
			// ignore
		}
	}

	internalPlugins.push(
		tanstackStart({
			importProtection: {
				behavior: "error",
				client: {
					files: ["**/server/**"],
					specifiers: ["server-only"],
				},
			},
		})
	);
	internalPlugins.push(react());

	const envDefine = {};
	const loadedEnv = loadEnv(mode, process.cwd(), "VITE_");

	for (const [key, value] of Object.entries(loadedEnv)) {
		envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
	}

	let config = {
		define: envDefine,
		resolve: {
			alias: {
				"@": `${process.cwd()}/src`,
			},
			dedupe: [
				"react",
				"react-dom",
				"react/jsx-runtime",
				"react/jsx-dev-runtime",
				"@tanstack/react-query",
				"@tanstack/query-core",
			],
		},
		plugins: [...internalPlugins],
	};

	config = mergeConfig(config, {
		server: { host: "::", port: 8080 },
	});

	config = mergeConfig(config, {
		server: {
			watch: {
				awaitWriteFinish: {
					stabilityThreshold: 1000,
					pollInterval: 100,
				},
			},
		},
	});

	return config;
});
