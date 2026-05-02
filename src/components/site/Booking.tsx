import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="booking" className="section-y bg-secondary">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Book Now</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Schedule Your Service</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Fill in your details and we'll call you back within 15 minutes to confirm your appointment.
            </p>
            <ul className="mt-6 space-y-3">
              {["Free quote on every job", "No call-out fee for emergencies", "Same-day service available"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span className="text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-7 md:p-9 shadow-elegant border border-border"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your Name" name="name" placeholder="John Doe" required />
              <Field label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" required />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold mb-2">Service Needed</label>
              <select required name="service" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Select a service…</option>
                <option>Leak Repair</option>
                <option>Pipe Installation</option>
                <option>Bathroom Fittings</option>
                <option>Drain Cleaning</option>
                <option>Water Tank Repair</option>
                <option>Kitchen Plumbing</option>
                <option>Emergency Service</option>
              </select>
            </div>
            <div className="mt-4">
              <Field label="Address" name="address" placeholder="123 Main St, Your City" required />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold mb-2">Message (optional)</label>
              <textarea
                name="message"
                rows={3}
                placeholder="Briefly describe the issue…"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition shadow-accent"
            >
              {submitted ? (<><CheckCircle2 className="w-5 h-5" /> Request Sent!</>) : (<><Send className="w-5 h-5" /> Book Now</>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        maxLength={200}
        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
