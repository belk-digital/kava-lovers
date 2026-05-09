import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Truck, Store, Leaf, Heart, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-kava.jpg";
import products from "@/assets/products.jpg";
import kava from "@/assets/kava-drink.jpg";
import community from "@/assets/community.jpg";
import { Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hemp Love Farms · Love Kava | Premium Hemp & Kava Bar in Doral, FL" },
      { name: "description", content: "Doral's #1 hemp shop, kava bar & wellness destination. Shop CBD, vapes, exotic snacks. Delivery & pickup. 5★ rated. Latino-owned." },
      { property: "og:title", content: "Hemp Love Farms · Love Kava — Doral, Miami" },
      { property: "og:description", content: "Premium hemp, kava bar & wellness lifestyle destination in Doral, FL." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-deep text-background">
        <img src={hero} alt="Love Kava Bar interior in Doral" className="absolute inset-0 h-full w-full object-cover opacity-50" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-40">
          <div className="max-w-3xl">
            <Eyebrow>Doral · Miami · Florida</Eyebrow>
            <h1 className="mt-5 text-5xl sm:text-7xl font-display font-bold leading-[1.05]">
              Doral's Premium <span className="text-gold">Hemp, Kava</span> & Wellness Destination
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-background/85 max-w-2xl">
              A modern Miami lifestyle hub blending hand-crafted kava drinks, premium hemp wellness, exotic snacks, and a community that feels like home.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-deep shadow-gold hover:opacity-95">
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/kava-bar" className="inline-flex items-center gap-2 rounded-full bg-background/10 backdrop-blur border border-background/20 px-6 py-3 font-semibold text-background hover:bg-background/20">
                Visit Love Kava
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground">
                Order Delivery
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
                <span className="font-semibold">5.0 · 63+ Google reviews</span>
              </div>
              <Badge icon={<Truck className="h-4 w-4" />}>Free local delivery</Badge>
              <Badge icon={<Store className="h-4 w-4" />}>Curbside pickup</Badge>
              <Badge icon={<Heart className="h-4 w-4" />}>Latino-owned</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { icon: <Leaf />, t: "Premium Hemp", s: "Lab-tested CBD & cannabinoids" },
            { icon: <Sparkles />, t: "Fresh Kava Bar", s: "Hand-crafted daily" },
            { icon: <ShieldCheck />, t: "Trusted Local", s: "5★ rated in Doral" },
            { icon: <Truck />, t: "Delivery & Pickup", s: "Order in minutes" },
          ].map((v) => (
            <div key={v.t} className="p-6 text-center">
              <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">{v.icon}</div>
              <p className="mt-3 font-display font-semibold">{v.t}</p>
              <p className="text-xs text-muted-foreground">{v.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <Eyebrow>Shop the Lifestyle</Eyebrow>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">Wellness, curated for you.</h2>
          </div>
          <Link to="/shop" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">Browse all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard image={products} title="Hemp & CBD" desc="Premium oils, edibles, topicals & cannabinoid blends." to="/shop" />
          <FeatureCard image={kava} title="Love Kava Drinks" desc="Fresh kava, kratom teas, mojitos & relaxation rituals." to="/kava-bar" />
          <FeatureCard image={community} title="Lifestyle & Snacks" desc="Vapes, exotic snacks, accessories & wellness essentials." to="/shop" />
        </div>
      </section>

      {/* KAVA SPLIT */}
      <section className="bg-deep text-background">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <img src={kava} alt="Fresh kava drink poured into a coconut shell" className="rounded-3xl shadow-luxe object-cover w-full h-[480px]" loading="lazy" />
          <div>
            <Eyebrow>Love Kava Bar</Eyebrow>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">Slow down, Miami.</h2>
            <p className="mt-5 text-lg text-background/80">
              Step into a tropical lounge where ancient Pacific traditions meet modern Miami. Our bartenders craft fresh kava bowls, kratom teas, mocktails and signature mojitos to help you unwind, connect, and feel good — naturally.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/kava-bar" className="rounded-full bg-gold px-6 py-3 font-semibold text-deep shadow-gold">Explore the Menu</Link>
              <Link to="/contact" className="rounded-full border border-background/30 px-6 py-3 font-semibold">Find Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>Loved in Doral</Eyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">5.0 ★ from our community.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.slice(0,3).map((r) => <ReviewCard key={r.name} {...r} />)}
        </div>
        <div className="text-center mt-10">
          <Link to="/reviews" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">Read all reviews <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-deep text-background p-10 sm:p-16 shadow-luxe">
          <div className="max-w-2xl">
            <Eyebrow>Visit Today</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-5xl font-display font-bold">7700 NW 56th St, Doral</h2>
            <p className="mt-4 text-background/80">Open daily · Curbside pickup · Local delivery · Friendly, knowledgeable staff.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+13055555555" className="rounded-full bg-gold px-6 py-3 font-semibold text-deep">Call Now</a>
              <Link to="/contact" className="rounded-full border border-background/30 px-6 py-3 font-semibold">Get Directions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Badge({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-background/10 px-3 py-1.5 text-xs font-medium backdrop-blur border border-background/15">
      {icon} {children}
    </span>
  );
}

function FeatureCard({ image, title, desc, to }: { image: string; title: string; desc: string; to: string }) {
  return (
    <Link to={to} className="group relative overflow-hidden rounded-3xl shadow-luxe block">
      <img src={image} alt={title} className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
      <div className="absolute bottom-0 p-6 text-background">
        <h3 className="text-2xl font-display font-bold">{title}</h3>
        <p className="mt-1 text-sm text-background/80">{desc}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-gold font-semibold text-sm">Discover <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  );
}

export const REVIEWS = [
  { name: "Maria G.", text: "Best kava bar in Miami! The vibe is unmatched and the staff treats you like family. Their CBD oil changed my sleep.", role: "Doral Local" },
  { name: "Andres P.", text: "Latino-owned, super clean, premium products. I get my vapes and hemp cream here every week. 10/10.", role: "Repeat Customer" },
  { name: "Jasmine R.", text: "Love Kava is my safe space. The mojitos are unreal and everyone is so welcoming. LGBTQ+ friendly for real.", role: "Community Member" },
  { name: "Carlos M.", text: "The delivery was insanely fast and the products are top-notch. Real wellness experts behind the counter.", role: "Verified Buyer" },
  { name: "Sofia L.", text: "Tropical Miami energy with a wellness twist. I bring all my friends here now.", role: "Lifestyle Fan" },
  { name: "Daniel V.", text: "Knowledgeable, kind, and zero pressure. They actually care about helping you find what works.", role: "First-time Visitor" },
];

function ReviewCard({ name, text, role }: { name: string; text: string; role: string }) {
  return (
    <article className="rounded-3xl border border-border bg-card p-7 shadow-sm">
      <div className="flex gap-0.5">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
      <p className="mt-4 text-foreground/90 leading-relaxed">"{text}"</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center font-semibold text-deep">{name[0]}</div>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </article>
  );
}
