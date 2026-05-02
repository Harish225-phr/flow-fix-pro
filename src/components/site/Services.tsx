import { motion } from "framer-motion";
import { Droplets, Wrench, Bath, Waves, Container, ChefHat, ArrowRight } from "lucide-react";

const services = [
  { icon: Droplets, title: "Leak Repair", desc: "Fast detection and repair of any water leak — taps, pipes, joints." },
  { icon: Wrench, title: "Pipe Installation", desc: "New piping systems installed with precision and certified materials." },
  { icon: Bath, title: "Bathroom Fittings", desc: "Showers, taps, basins and toilets fitted to perfection." },
  { icon: Waves, title: "Drain Cleaning", desc: "Powerful unclogging of blocked drains, sinks and sewage lines." },
  { icon: Container, title: "Water Tank Repair", desc: "Tank cleaning, leak sealing and full replacement service." },
  { icon: ChefHat, title: "Kitchen Plumbing", desc: "Sink, dishwasher and disposal plumbing done same day." },
];

export function Services() {
  return (
    <section id="services" className="section-y bg-secondary">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Complete Plumbing Solutions</h2>
          <p className="mt-4 text-muted-foreground">From quick fixes to full installations — we handle it all with care and precision.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative bg-card rounded-2xl p-7 shadow-card hover:shadow-elegant transition-all border border-border overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-accent/10 transition-colors" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground grid place-items-center group-hover:bg-accent transition-colors">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a href="#booking" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  Book this service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
