import { Phone, MessageCircle, Siren } from "lucide-react";
import { motion } from "framer-motion";

export function Emergency() {
  return (
    <section className="relative section-y overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 80%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="container-x relative z-10 text-center text-white">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground font-bold text-sm mb-5"
        >
          <Siren className="w-4 h-4 animate-pulse" /> EMERGENCY HOTLINE
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          24/7 Emergency Plumbing<br />Available
        </h2>
        <p className="mt-5 text-lg text-white/85 max-w-xl mx-auto">
          Burst pipe? Major leak? Don't wait — we'll be at your door fast, day or night.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+15551234567"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-bold text-lg hover:scale-105 transition-transform shadow-accent animate-pulse-ring"
          >
            <Phone className="w-5 h-5" /> Call Now: (555) 123-4567
          </a>
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-success text-success-foreground font-bold text-lg hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
