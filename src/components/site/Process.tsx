import { motion } from "framer-motion";
import { PhoneCall, Search, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Call Us", desc: "Reach out anytime. Quick & friendly response." },
  { icon: Search, title: "Inspect Problem", desc: "We diagnose the issue and quote a fair price." },
  { icon: Wrench, title: "Fix Issue", desc: "Skilled plumbers solve it with quality parts." },
  { icon: CheckCircle2, title: "Job Done", desc: "Clean workspace, satisfaction guaranteed." },
];

export function Process() {
  return (
    <section className="section-y bg-secondary">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Simple 4-Step Process</h2>
        </div>
        <div className="relative grid md:grid-cols-4 gap-6">
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-border" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="relative mx-auto w-20 h-20 rounded-full bg-card border-4 border-secondary shadow-card grid place-items-center z-10">
                <s.icon className="w-9 h-9 text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold grid place-items-center text-sm">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
