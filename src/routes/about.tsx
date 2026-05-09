import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Leaf, Users, Award } from "lucide-react";
import storefront from "@/assets/storefront.jpg";
import community from "@/assets/community.jpg";
import { PageHero, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Hemp Love Farms · Love Kava — Doral, FL" },
      { name: "description", content: "Latino-owned premium hemp, kava and wellness brand in Doral, Miami. Our story, mission, and community." },
      { property: "og:title", content: "About Hemp Love Farms · Love Kava" },
      { property: "og:description", content: "Latino-owned wellness destination crafted for the modern Miami lifestyle." },
      { property: "og:image", content: storefront },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Wellness, the Miami way."
        subtitle="Hemp Love Farms and Love Kava were born from one belief: feeling good shouldn't be complicated. We blend tradition, science and tropical hospitality into every visit."
        image={storefront}
      />

      <section className="mx-auto max-w-6xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <img src={community} alt="Friends laughing together at Love Kava lounge" className="rounded-3xl shadow-luxe object-cover w-full h-[500px]" loading="lazy" width={1920} height={1080} />
        <div>
          <Eyebrow>Our Mission</Eyebrow>
          <h2 className="mt-3 text-4xl font-display font-bold">A safe, premium space for plant-powered wellness.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We're a Latino-owned, family-run wellness destination in the heart of Doral. From hand-crafted kava bowls to lab-tested hemp products, every bottle, drink, and recommendation reflects deep care for our community.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether you're a long-time wellness seeker or curious for the first time, our team is here to guide you with no pressure, no jargon, and a whole lot of Miami warmth.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>What we stand for</Eyebrow>
            <h2 className="mt-3 text-4xl font-display font-bold">Values that lead every pour.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: <Leaf />, t: "Plant-powered", d: "Every product is intentional, ethical and lab-verified." },
              { i: <Heart />, t: "Latino-owned", d: "Rooted in heritage, hospitality and community." },
              { i: <Users />, t: "Inclusive", d: "All are welcome. LGBTQ+ friendly, always." },
              { i: <Award />, t: "5★ Trusted", d: "Doral locals love us — and we love them back." },
            ].map((v) => (
              <div key={v.t} className="rounded-3xl bg-card p-7 shadow-sm border border-border">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">{v.i}</div>
                <h3 className="mt-5 font-display font-bold text-lg">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <Eyebrow>Visit Us</Eyebrow>
        <h2 className="mt-3 text-4xl font-display font-bold">Come feel the difference in person.</h2>
        <p className="mt-4 text-muted-foreground">7700 NW 56th St · Doral, FL 33166</p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link to="/contact" className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold">Get Directions</Link>
          <Link to="/shop" className="rounded-full border border-border px-6 py-3 font-semibold">Shop Online</Link>
        </div>
      </section>
    </>
  );
}
