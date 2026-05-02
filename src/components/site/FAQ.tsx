import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How quickly can you arrive for a service?", a: "For standard services, same-day or next-day. For emergencies, our team arrives within 60 minutes 24/7." },
  { q: "What are your charges?", a: "Basic visit starts at $49. We always provide a transparent quote before starting any work — no hidden fees." },
  { q: "Do you handle emergency calls?", a: "Yes! We're available 24/7 for burst pipes, major leaks, and urgent plumbing needs. Just call our hotline." },
  { q: "Do you offer a warranty on your work?", a: "Absolutely. All standard repairs come with a 30-day warranty, and major installations include a 1-year warranty." },
  { q: "Which areas do you serve?", a: "We cover the entire metro area and surrounding suburbs. Call us to confirm service in your location." },
  { q: "Do you provide parts as well?", a: "Yes, we carry quality parts on every truck. Standard parts are included in your quote — premium parts are optional." },
];

export function FAQ() {
  return (
    <section className="section-y">
      <div className="container-x max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Common Questions</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-2xl px-5 data-[state=open]:border-accent/50 data-[state=open]:shadow-card transition-all"
            >
              <AccordionTrigger className="text-left font-bold hover:no-underline py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
