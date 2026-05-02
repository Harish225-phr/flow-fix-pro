import { motion } from "framer-motion";
import { Award, Zap, DollarSign, ShieldCheck, Smile, Hammer } from "lucide-react";

const items = [
  { icon: Award, title: "Experienced Plumbers", desc: "10+ years of hands-on expertise." },
  { icon: Zap, title: "Quick Response", desc: "On-site within 60 minutes." },
  { icon: DollarSign, title: "Affordable Rates", desc: "Honest, upfront pricing — no surprises." },
  { icon: ShieldCheck, title: "Quality Work", desc: "Workmanship backed by warranty." },
  { icon: Smile, title: "Customer Satisfaction", desc: "98% repeat & referral customers." },
  { icon: Hammer, title: "Modern Tools", desc: "Latest leak detection & repair gear." },
];

export function WhyUs() {
  return (
    <section id="why" className="section-y">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Trusted by Thousands of Homes</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-card transition-all"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 text-accent grid place-items-center">
                <it.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{it.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
