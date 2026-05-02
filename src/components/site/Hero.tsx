import { motion } from "framer-motion";
import { Phone, Calendar, Clock, Zap, BadgeCheck } from "lucide-react";
import heroImg from "@/assets/hero-plumber.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Professional plumber fixing pipes under a sink"
        width={1536}
        height={1024}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="container-x relative z-10 pt-28 pb-16 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur border border-accent/40 text-accent-light text-xs md:text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" /> Available 24/7 for Emergencies
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Fast & Reliable <span className="text-accent">Plumbing Services</span> You Can Trust
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            Leak Repair • Pipe Fixing • Bathroom Fitting • Emergency Plumbing
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition shadow-accent"
            >
              <Calendar className="w-5 h-5" /> Book Service
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
            {[
              { icon: Clock, label: "24/7 Emergency Service" },
              { icon: Zap, label: "Same Day Repair" },
              { icon: BadgeCheck, label: "Affordable Pricing" },
            ].map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/20"
              >
                <b.icon className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-semibold">{b.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
