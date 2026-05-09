import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import products from "@/assets/products.jpg";
import { PageHero, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ & Education | Hemp Love Farms · Love Kava Doral" },
      { name: "description", content: "Learn about kava, hemp, CBD, delivery, pickup and more. Trusted answers from Doral's premium wellness destination." },
      { property: "og:title", content: "FAQ — Hemp & Kava Education" },
      { property: "og:description", content: "Beginner-friendly answers about kava, hemp, CBD and our store." },
      { property: "og:image", content: products },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

const FAQS = [
  { q: "What is kava?", a: "Kava is a traditional Pacific Islander root that's been used for centuries to promote relaxation, social connection, and calm. It's non-alcoholic and naturally soothing." },
  { q: "Is kava safe?", a: "Yes — when sourced responsibly. We use noble kava varieties and serve responsibly. Avoid mixing with alcohol or sedatives, and check with your doctor if you take medication." },
  { q: "What's the difference between CBD, CBG and CBN?", a: "All are cannabinoids from the hemp plant. CBD is best known for calm and balance, CBG is often used for focus, and CBN is popular for sleep. Our team will guide you to the right pick." },
  { q: "Do you deliver?", a: "Yes! We offer same-day local delivery across Doral, Miami, Hialeah, Sweetwater and nearby. Curbside pickup is also available — just call ahead." },
  { q: "Is everything lab-tested?", a: "Every hemp product on our shelves is third-party lab tested. COAs are available on request." },
  { q: "Are you Latino-owned?", a: "Yes — proudly Latino-owned, family-run and rooted in Doral's vibrant community. Bilingual service always available." },
  { q: "Do I need to be 21?", a: "You must be 21+ to purchase hemp, vape and cannabinoid products. Kava drinks are available to all ages until 9pm with valid ID." },
  { q: "Can I host an event at Love Kava?", a: "Absolutely. We host community nights, open mics, birthdays and private pop-ups. Contact us to plan your event." },
];

function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="FAQ & Education"
        title="Curious? We've got answers."
        subtitle="Beginner-friendly guidance from Doral's most trusted hemp and kava team."
        image={products}
      />

      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="space-y-4">
          {FAQS.map((f, i) => <FaqItem key={i} {...f} />)}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-deep text-background p-10 text-center">
          <Eyebrow>Still have questions?</Eyebrow>
          <h2 className="mt-3 text-3xl font-display font-bold">Talk to a real human.</h2>
          <p className="mt-3 text-background/80">Our team is friendly, knowledgeable and never pushy.</p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <a href="tel:+13055555555" className="rounded-full bg-gold text-deep px-6 py-3 font-semibold">Call Us</a>
            <a href="https://wa.me/13055555555" className="rounded-full border border-background/30 px-6 py-3 font-semibold">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left font-display font-semibold">
        <span>{q}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}
