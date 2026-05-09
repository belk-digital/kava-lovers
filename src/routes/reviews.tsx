import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import community from "@/assets/community.jpg";
import { PageHero, Eyebrow } from "@/components/Section";
import { REVIEWS } from "./index";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews & Community | Hemp Love Farms · Love Kava Doral" },
      { name: "description", content: "Read 5★ Google reviews from our Doral community. Real customers, real love." },
      { property: "og:title", content: "Reviews — Hemp Love Farms · Love Kava" },
      { property: "og:description", content: "5.0★ from our Doral community. Read real customer stories." },
      { property: "og:image", content: community },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Hemp Love Farms · Love Kava",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "63" },
        }),
      },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Loved in Doral"
        title="5.0 ★ from our community."
        subtitle="63+ Google reviews and counting. Here's what locals are saying about Hemp Love Farms and Love Kava."
        image={community}
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <article key={r.name} className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <div className="flex gap-0.5">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
              <p className="mt-4 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center font-semibold text-deep">{r.name[0]}</div>
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/search?q=Hemp+Love+Farms+Love+Kava+Doral+FL"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold"
          >
            Leave a Review on Google
          </a>
        </div>
      </section>
    </>
  );
}
