import { Wrench, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-6">
      <div className="container-x">
        <div className="grid md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-xl">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-accent text-accent-foreground">
                <Wrench className="w-5 h-5" />
              </span>
              AquaFix<span className="text-accent">Pro</span>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Trusted plumbing experts serving your community 24/7 with fast, affordable, and quality service.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {["Services", "Why Us", "Pricing", "Gallery", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase().replace(" ", "")}`} className="hover:text-accent transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {["Leak Repair", "Pipe Installation", "Bathroom Fittings", "Drain Cleaning", "Emergency Plumbing"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-accent transition">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-accent" /> (555) 123-4567</li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-accent" /> hello@aquafixpro.com</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-accent" /> 123 Service Lane, Your City</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <p>© {new Date().getFullYear()} AquaFixPro. All rights reserved.</p>
          <p>Powered by <span className="text-accent font-semibold">TechHim Solutions</span></p>
        </div>
      </div>
    </footer>
  );
}
