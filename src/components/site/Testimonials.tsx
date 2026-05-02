import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Sarah Mitchell", role: "Homeowner", rating: 5, text: "Came within 30 minutes for a burst pipe. Professional, clean, and reasonable. Saving this number forever!" },
  { name: "David Chen", role: "Property Manager", rating: 5, text: "I manage 20+ units and AquaFix is my go-to. Reliable, honest pricing, quality workmanship every single time." },
  { name: "Maria Lopez", role: "Restaurant Owner", rating: 5, text: "Our kitchen drain backed up during dinner rush. They fixed it in an hour. Lifesavers!" },
  { name: "James Walker", role: "Homeowner", rating: 5, text: "Full bathroom remodel — beautiful work, finished on time and on budget. Highly recommended." },
];

export function Testimonials() {
  return (
    <section className="section-y bg-secondary">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">What Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed">"{r.text}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <p className="font-bold text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
