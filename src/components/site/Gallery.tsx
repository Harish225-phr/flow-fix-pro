import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bath from "@/assets/gallery-bathroom.jpg";
import kitchen from "@/assets/gallery-kitchen.jpg";
import tools from "@/assets/gallery-tools.jpg";
import leak from "@/assets/gallery-leak.jpg";

const items = [
  { img: bath, title: "Bathroom Fitting", desc: "Modern chrome fixtures, professionally installed" },
  { img: kitchen, title: "Kitchen Sink Repair", desc: "Same-day fix, fully restored function" },
  { img: leak, title: "Leak Repair", desc: "Joint resealed, pressure tested, guaranteed" },
  { img: tools, title: "Pro Tools & Parts", desc: "Quality equipment for lasting results" },
];

export function Gallery() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % items.length);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);

  return (
    <section id="gallery" className="section-y">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Recent Projects</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-elegant bg-secondary">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img src={items[idx].img} alt={items[idx].title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold">{items[idx].title}</h3>
                  <p className="mt-2 text-white/85">{items[idx].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card shadow-card grid place-items-center hover:bg-accent hover:text-accent-foreground transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card shadow-card grid place-items-center hover:bg-accent hover:text-accent-foreground transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-5">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-accent" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
