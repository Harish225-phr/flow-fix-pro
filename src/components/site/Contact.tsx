import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="section-y bg-secondary">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Contact Us</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
            {[
              { icon: Phone, label: "Phone", value: "(555) 123-4567", href: "tel:+15551234567" },
              { icon: Mail, label: "Email", value: "hello@aquafixpro.com", href: "mailto:hello@aquafixpro.com" },
              { icon: MapPin, label: "Location", value: "123 Service Lane, Your City, USA" },
              { icon: Clock, label: "Working Hours", value: "Mon–Sun: 24/7 Emergency · Office 8 AM – 8 PM" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border hover:border-accent/50 hover:shadow-card transition-all"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary text-primary-foreground grid place-items-center">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{c.label}</p>
                  <p className="font-bold mt-0.5">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-card border border-border min-h-[400px]">
            <iframe
              title="Our location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.02%2C40.70%2C-73.95%2C40.75&amp;layer=mapnik"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
