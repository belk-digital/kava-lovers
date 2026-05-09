import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, Store, ShoppingBag } from "lucide-react";
import products from "@/assets/products.jpg";
import { PageHero, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Hemp, CBD, Vapes & Wellness | Hemp Love Farms Doral" },
      { name: "description", content: "Premium hemp, CBD oils, pain creams, vapes, exotic snacks and wellness accessories. Delivery & pickup in Doral, Miami." },
      { property: "og:title", content: "Shop · Hemp Love Farms" },
      { property: "og:description", content: "Lab-tested hemp, CBD, vapes, snacks & lifestyle. Delivery + pickup in Doral, FL." },
      { property: "og:image", content: products },
    ],
  }),
  component: Shop,
});

const CATEGORIES = [
  { name: "CBD Oils & Tinctures", desc: "Full-spectrum, broad-spectrum & isolates.", price: "From $29" },
  { name: "Cannabinoids", desc: "Delta blends, THCa, CBG, CBN — premium picks.", price: "From $19" },
  { name: "Pain Creams & Topicals", desc: "Fast-acting relief from trusted brands.", price: "From $24" },
  { name: "Vapes & Disposables", desc: "Curated selection, top brands only.", price: "From $14" },
  { name: "Exotic Snacks", desc: "Worldwide flavors you won't find anywhere else.", price: "From $4" },
  { name: "Lifestyle Accessories", desc: "Glass, grinders, gear & gifting.", price: "From $9" },
  { name: "Kava & Kratom Retail", desc: "Take the lounge experience home.", price: "From $12" },
  { name: "Wellness Bundles", desc: "Curated kits for sleep, focus & calm.", price: "From $49" },
];

function Shop() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Premium hemp, kava & lifestyle."
        subtitle="Hand-picked, lab-tested, locally loved. Delivery and curbside pickup available across Doral and Miami."
        image={products}
      />

      <section className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-4">
        {[
          { i: <Truck />, t: "Local Delivery", d: "Same-day across Doral & Miami." },
          { i: <Store />, t: "Curbside Pickup", d: "Order ahead — we bring it out." },
          { i: <ShoppingBag />, t: "In-Store", d: "Visit our flagship in Doral." },
        ].map((f) => (
          <div key={f.t} className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">{f.i}</div>
            <div>
              <p className="font-semibold">{f.t}</p>
              <p className="text-sm text-muted-foreground">{f.d}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Eyebrow>Browse Collections</Eyebrow>
        <h2 className="mt-3 text-4xl font-display font-bold">Find your wellness ritual.</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <article key={c.name} className="group rounded-3xl border border-border bg-card p-6 transition hover:shadow-luxe hover:-translate-y-1 duration-300">
              <div className="aspect-square rounded-2xl bg-gradient-deep overflow-hidden mb-5 flex items-center justify-center">
                <span className="text-6xl">{["🌿","✨","💚","💨","🍫","🛍️","🥥","🎁"][CATEGORIES.indexOf(c)]}</span>
              </div>
              <h3 className="font-display font-bold text-lg">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">{c.price}</span>
                <Link to="/contact" className="text-sm font-semibold text-gold">Order →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 text-center">
        <div className="rounded-3xl bg-gradient-deep text-background p-12 shadow-luxe">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">Need help choosing?</h2>
          <p className="mt-3 text-background/80">Our wellness experts will help you build the perfect routine — no pressure, just guidance.</p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <a href="tel:+13055555555" className="rounded-full bg-gold px-6 py-3 font-semibold text-deep">Call to Order</a>
            <Link to="/contact" className="rounded-full border border-background/30 px-6 py-3 font-semibold">Visit Store</Link>
          </div>
        </div>
      </section>
    </>
  );
}
