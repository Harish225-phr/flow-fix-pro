import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Emergency } from "@/components/site/Emergency";
import { Process } from "@/components/site/Process";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Booking } from "@/components/site/Booking";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AquaFixPro — 24/7 Plumbing & Home Repair Services" },
      { name: "description", content: "Fast, reliable plumbing services. Leak repair, pipe fixing, bathroom fitting & 24/7 emergency plumbing. Book online or call now." },
      { property: "og:title", content: "AquaFixPro — 24/7 Plumbing & Home Repair Services" },
      { property: "og:description", content: "Fast, reliable plumbing services. Same-day repair, affordable pricing, expert plumbers." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Emergency />
        <Process />
        <Pricing />
        <Testimonials />
        <Gallery />
        <Booking />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
