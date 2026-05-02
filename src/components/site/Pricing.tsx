import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic Visit",
    price: "$49",
    desc: "Perfect for inspections & minor fixes",
    features: ["On-site visit & diagnosis", "Minor leak fix", "Up to 30 min service", "Free estimate"],
  },
  {
    name: "Standard Service",
    price: "$129",
    desc: "Our most popular package",
    features: ["Leak & pipe repair", "Drain cleaning", "Up to 2 hours service", "Parts included*", "30-day warranty"],
    featured: true,
  },
  {
    name: "Premium Repair",
    price: "$299",
    desc: "Complete fix for major issues",
    features: ["Full installations", "Emergency priority", "Half-day service", "Premium parts", "1-year warranty"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-y">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Transparent Pricing</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Honest Rates, No Surprises</h2>
          <p className="mt-4 text-muted-foreground">Custom pricing available — we'll match the job to your budget.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border-2 transition-all ${
                p.featured
                  ? "bg-primary text-primary-foreground border-accent shadow-elegant scale-105"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                  <Star className="w-3 h-3 fill-current" /> MOST POPULAR
                </span>
              )}
              <h3 className="font-bold text-xl">{p.name}</h3>
              <p className={`text-sm mt-1 ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold">{p.price}</span>
                <span className={p.featured ? "text-white/70" : "text-muted-foreground"}>/start</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`w-5 h-5 shrink-0 ${p.featured ? "text-accent" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`mt-7 block text-center px-5 py-3 rounded-full font-bold transition ${
                  p.featured
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          * Custom pricing available based on job complexity. Contact us for a free quote.
        </p>
      </div>
    </section>
  );
}
