import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-success text-success-foreground grid place-items-center shadow-elegant hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="tel:+15551234567"
        aria-label="Call now"
        className="w-14 h-14 rounded-full bg-accent text-accent-foreground grid place-items-center shadow-accent hover:scale-110 transition-transform animate-pulse-ring"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
