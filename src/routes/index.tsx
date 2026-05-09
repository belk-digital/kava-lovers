import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Star, Truck, Store, Leaf, Heart, ShieldCheck, Sparkles, ArrowRight,
  Users, Coffee, Wind, Droplets, BookOpen, Gift, MessageCircle, Instagram,
  Award, Zap, CheckCircle2,
} from "lucide-react";
import hero from "@/assets/hero-kava.jpg";
import products from "@/assets/products.jpg";
import kava from "@/assets/kava-drink.jpg";
import community from "@/assets/community.jpg";
import storefront from "@/assets/storefront.jpg";
import { Eyebrow } from "@/components/Section";
import { useI18n } from "@/lib/i18n";

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
  const { t } = useI18n();
  return (
    <>
      <Hero />
      <ValueStrip />
      <BrandExperience />
      <Collections />
      <FeaturedProducts />
      <KavaSplit />
      <EducationHub />
      <CommunitySocial />
      <WhyLoveUs />
      <Reviews />
      <SpecialOffer />
      <VisitCTA />
    </>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-deep text-background isolate">
      <img src={hero} alt="Love Kava Bar interior in Doral" className="absolute inset-0 h-full w-full object-cover opacity-55" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold/15 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-40">
        <div className="max-w-3xl">
          <Eyebrow>{t("hero.eyebrow")}</Eyebrow>
          <h1 className="mt-5 text-5xl sm:text-7xl font-display font-bold leading-[1.02]">
            {t("hero.title1")} <span className="text-gradient-gold">{t("hero.title2")}</span> {t("hero.title3")}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-background/85 max-w-2xl">{t("hero.subtitle")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/shop" className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-deep shadow-gold hover:scale-[1.03] transition-transform">
              {t("cta.shop")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/kava-bar" className="inline-flex items-center gap-2 rounded-full glass-dark px-7 py-3.5 font-semibold text-background hover:bg-background/15 transition">
              {t("cta.menu")}
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition">
              {t("cta.delivery")}
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-6 text-sm">
            <div className="flex items-center gap-2 glass-dark rounded-full px-3 py-1.5">
              <div className="flex">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
              <span className="font-semibold">{t("trust.rating")}</span>
            </div>
            <Badge icon={<Truck className="h-4 w-4" />}>{t("trust.delivery")}</Badge>
            <Badge icon={<Store className="h-4 w-4" />}>{t("trust.pickup")}</Badge>
            <Badge icon={<Heart className="h-4 w-4" />}>{t("trust.latino")}</Badge>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = ["Premium Hemp", "Fresh Kava Daily", "Latino-Owned", "5★ Doral", "Free Delivery $40+", "LGBTQ+ Friendly", "Lab-Tested CBD", "Tropical Wellness"];
  const loop = [...items, ...items];
  return (
    <div className="relative border-y border-background/10 bg-deep/60 overflow-hidden">
      <div className="flex marquee-track gap-12 py-4 whitespace-nowrap">
        {loop.map((it, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-background/70">
            <Sparkles className="h-3 w-3 text-gold" /> {it}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- VALUE STRIP ---------- */
function ValueStrip() {
  const { t } = useI18n();
  const items = [
    { icon: <Leaf className="h-5 w-5" />, t: t("value.hemp.t"), s: t("value.hemp.s") },
    { icon: <Sparkles className="h-5 w-5" />, t: t("value.kava.t"), s: t("value.kava.s") },
    { icon: <ShieldCheck className="h-5 w-5" />, t: t("value.trust.t"), s: t("value.trust.s") },
    { icon: <Truck className="h-5 w-5" />, t: t("value.delivery.t"), s: t("value.delivery.s") },
  ];
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
        {items.map((v) => (
          <div key={v.t} className="p-6 text-center">
            <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-deep text-gold">{v.icon}</div>
            <p className="mt-3 font-display font-semibold">{v.t}</p>
            <p className="text-xs text-muted-foreground">{v.s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- BRAND EXPERIENCE ---------- */
function BrandExperience() {
  const { t } = useI18n();
  const cards = [
    { icon: <Heart className="h-6 w-6" />, t: t("exp.lifestyle.t"), d: t("exp.lifestyle.d") },
    { icon: <Users className="h-6 w-6" />, t: t("exp.community.t"), d: t("exp.community.d") },
    { icon: <Leaf className="h-6 w-6" />, t: t("exp.wellness.t"), d: t("exp.wellness.d") },
    { icon: <Coffee className="h-6 w-6" />, t: t("exp.kava.t"), d: t("exp.kava.d") },
  ];
  return (
    <section className="bg-mesh py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>{t("exp.eyebrow")}</Eyebrow>
          <h2 className="mt-4 text-4xl sm:text-5xl font-display font-bold">{t("exp.title")}</h2>
          <p className="mt-5 text-muted-foreground">{t("exp.subtitle")}</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.t} className="hover-lift glass rounded-3xl p-7 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-gold opacity-15 blur-2xl" />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-deep text-gold shadow-gold">{c.icon}</div>
              <h3 className="relative mt-5 text-xl font-display font-semibold">{c.t}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- COLLECTIONS ---------- */
function Collections() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div>
          <Eyebrow>{t("collections.eyebrow")}</Eyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">{t("collections.title")}</h2>
        </div>
        <Link to="/shop" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">{t("cta.browseAll")} <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <FeatureCard image={products} title={t("collections.hemp.t")} desc={t("collections.hemp.d")} to="/shop" />
        <FeatureCard image={kava} title={t("collections.kava.t")} desc={t("collections.kava.d")} to="/kava-bar" />
        <FeatureCard image={community} title={t("collections.life.t")} desc={t("collections.life.d")} to="/shop" />
      </div>
    </section>
  );
}

/* ---------- FEATURED PRODUCTS ---------- */
function FeaturedProducts() {
  const { t } = useI18n();
  const items = [
    { name: "Signature Kava Bowl", cat: "Best Seller", price: "$12", icon: <Coffee className="h-5 w-5" />, badge: "Hot" },
    { name: "Full-Spectrum CBD Oil", cat: "Wellness", price: "$58", icon: <Droplets className="h-5 w-5" />, badge: "Lab-Tested" },
    { name: "Tropical Mojito Mocktail", cat: "Kava Bar", price: "$10", icon: <Sparkles className="h-5 w-5" />, badge: "New" },
    { name: "Premium Disposable Vape", cat: "Lifestyle", price: "$35", icon: <Wind className="h-5 w-5" />, badge: "Top Pick" },
  ];
  return (
    <section className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>{t("featured.eyebrow")}</Eyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">{t("featured.title")}</h2>
          <p className="mt-4 text-muted-foreground">{t("featured.subtitle")}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <div key={p.name} className="hover-lift group rounded-3xl bg-card border border-border overflow-hidden">
              <div className="relative h-48 bg-gradient-deep flex items-center justify-center text-gold">
                <div className="absolute inset-0 bg-mesh opacity-30" />
                <div className="relative h-20 w-20 rounded-full glass-dark flex items-center justify-center shadow-gold">
                  {p.icon}
                </div>
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-deep">{p.badge}</span>
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{p.cat}</p>
                <h3 className="mt-1 font-display font-semibold text-lg">{p.name}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold text-primary">{p.price}</span>
                  <Link to="/shop" className="text-xs font-semibold inline-flex items-center gap-1 text-foreground/80 group-hover:text-primary">
                    {t("cta.order")} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- KAVA SPLIT ---------- */
function KavaSplit() {
  const { t } = useI18n();
  return (
    <section className="bg-deep text-background relative overflow-hidden">
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={kava} alt="Fresh kava drink poured into a coconut shell" className="rounded-3xl shadow-luxe object-cover w-full h-[480px]" loading="lazy" />
          <div className="absolute -bottom-6 -left-6 glass-dark rounded-2xl p-4 max-w-[200px]">
            <div className="flex items-center gap-2 text-gold">
              <Award className="h-5 w-5" />
              <span className="font-display font-bold text-lg">5.0★</span>
            </div>
            <p className="mt-1 text-xs text-background/70">Best kava bar in Miami — Maria G.</p>
          </div>
        </div>
        <div>
          <Eyebrow>{t("kava.eyebrow")}</Eyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">{t("kava.title")}</h2>
          <p className="mt-5 text-lg text-background/80">{t("kava.body")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/kava-bar" className="rounded-full bg-gold px-7 py-3.5 font-semibold text-deep shadow-gold hover:scale-[1.03] transition-transform">{t("cta.menu")}</Link>
            <Link to="/contact" className="rounded-full glass-dark px-7 py-3.5 font-semibold">{t("cta.directions")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- EDUCATION HUB ---------- */
function EducationHub() {
  const { t } = useI18n();
  const items = [
    { icon: <Coffee className="h-6 w-6" />, t: t("edu.kava.t"), d: t("edu.kava.d") },
    { icon: <Leaf className="h-6 w-6" />, t: t("edu.hemp.t"), d: t("edu.hemp.d") },
    { icon: <BookOpen className="h-6 w-6" />, t: t("edu.guide.t"), d: t("edu.guide.d") },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <Eyebrow>{t("edu.eyebrow")}</Eyebrow>
        <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">{t("edu.title")}</h2>
        <p className="mt-4 text-muted-foreground">{t("edu.subtitle")}</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((c) => (
          <Link to="/faq" key={c.t} className="hover-lift group rounded-3xl border border-border bg-card p-7 block relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-gold opacity-60" />
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">{c.icon}</div>
            <h3 className="mt-5 text-xl font-display font-semibold">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">{t("cta.discover")} <ArrowRight className="h-4 w-4" /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ---------- COMMUNITY / SOCIAL ---------- */
function CommunitySocial() {
  const { t } = useI18n();
  const tiles = [storefront, kava, products, community, hero, kava];
  return (
    <section className="bg-mesh py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <Eyebrow>{t("social.eyebrow")}</Eyebrow>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">{t("social.title")}</h2>
            <p className="mt-3 text-muted-foreground max-w-md">{t("social.subtitle")}</p>
          </div>
          <a href="https://instagram.com/hemplovefarms" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-deep px-5 py-3 font-semibold text-background shadow-luxe">
            <Instagram className="h-4 w-4 text-gold" /> @hemplovefarms
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {tiles.map((src, i) => (
            <a key={i} href="https://instagram.com/hemplovefarms" target="_blank" rel="noreferrer" className="relative group overflow-hidden rounded-2xl aspect-square">
              <img src={src} alt="Community moment" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-deep/0 group-hover:bg-deep/60 transition flex items-center justify-center">
                <Instagram className="h-6 w-6 text-background opacity-0 group-hover:opacity-100 transition" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY LOVE US ---------- */
function WhyLoveUs() {
  const { t } = useI18n();
  const cards = [
    { icon: <Award className="h-5 w-5" />, t: t("why.q1.t"), d: t("why.q1.d") },
    { icon: <Sparkles className="h-5 w-5" />, t: t("why.q2.t"), d: t("why.q2.d") },
    { icon: <CheckCircle2 className="h-5 w-5" />, t: t("why.q3.t"), d: t("why.q3.d") },
    { icon: <Heart className="h-5 w-5" />, t: t("why.q4.t"), d: t("why.q4.d") },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <Eyebrow>{t("why.eyebrow")}</Eyebrow>
        <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">{t("why.title")}</h2>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.t} className="hover-lift rounded-3xl border border-border bg-card p-7">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">{c.icon}</div>
            <h3 className="mt-5 font-display font-semibold text-lg">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- REVIEWS ---------- */
function Reviews() {
  const { t } = useI18n();
  return (
    <section className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>{t("reviews.eyebrow")}</Eyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">{t("reviews.title")}</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.slice(0,3).map((r) => <ReviewCard key={r.name} {...r} />)}
        </div>
        <div className="text-center mt-10">
          <Link to="/reviews" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">{t("cta.readReviews")} <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- SPECIAL OFFER / NEWSLETTER ---------- */
function SpecialOffer() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-deep text-background p-10 sm:p-16 shadow-luxe">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>{t("offer.eyebrow")}</Eyebrow>
            <h2 className="mt-4 text-4xl sm:text-5xl font-display font-bold">
              <span className="text-gradient-gold">10%</span> {t("offer.title").replace("10% off ", "").replace("10% en ", "")}
            </h2>
            <p className="mt-4 text-background/80 max-w-md">{t("offer.subtitle")}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-background/80">
              <span className="inline-flex items-center gap-2"><Gift className="h-4 w-4 text-gold" /> Loyalty perks</span>
              <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-gold" /> Early drops</span>
              <span className="inline-flex items-center gap-2"><Heart className="h-4 w-4 text-gold" /> Member events</span>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}
            className="glass-dark rounded-3xl p-6 sm:p-8"
          >
            {done ? (
              <div className="text-center py-6">
                <CheckCircle2 className="mx-auto h-10 w-10 text-gold" />
                <p className="mt-3 font-display text-xl">Welcome to the Love Club!</p>
                <p className="mt-1 text-sm text-background/70">Check your inbox for your 10% off code.</p>
              </div>
            ) : (
              <>
                <label className="text-sm font-semibold text-background/85">{t("offer.placeholder")}</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@miami.com"
                  className="mt-2 w-full rounded-full bg-background/10 border border-background/20 px-5 py-3.5 text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <button type="submit" className="mt-3 w-full rounded-full bg-gold px-6 py-3.5 font-semibold text-deep shadow-gold hover:scale-[1.02] transition-transform">
                  {t("cta.subscribe")} →
                </button>
                <p className="mt-3 text-[11px] text-background/50 text-center">No spam. Unsubscribe anytime.</p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- VISIT CTA ---------- */
function VisitCTA() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-[2rem] shadow-luxe">
        <img src={storefront} alt="Hemp Love Farms storefront in Doral" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative p-10 sm:p-16 text-background">
          <div className="max-w-2xl">
            <Eyebrow>{t("visit.eyebrow")}</Eyebrow>
            <h2 className="mt-3 text-3xl sm:text-5xl font-display font-bold">{t("visit.title")}</h2>
            <p className="mt-4 text-background/85">{t("visit.subtitle")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+13055555555" className="rounded-full bg-gold px-7 py-3.5 font-semibold text-deep shadow-gold">{t("cta.call")}</a>
              <Link to="/contact" className="rounded-full glass-dark px-7 py-3.5 font-semibold text-background">{t("cta.directions")}</Link>
              <a href="https://wa.me/13055555555" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */
function Badge({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-medium">
      {icon} {children}
    </span>
  );
}

function FeatureCard({ image, title, desc, to }: { image: string; title: string; desc: string; to: string }) {
  const { t } = useI18n();
  return (
    <Link to={to} className="group relative overflow-hidden rounded-3xl shadow-luxe block hover-lift">
      <img src={image} alt={title} className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
      <div className="absolute bottom-0 p-6 text-background">
        <h3 className="text-2xl font-display font-bold">{title}</h3>
        <p className="mt-1 text-sm text-background/80">{desc}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-gold font-semibold text-sm">{t("cta.discover")} <ArrowRight className="h-4 w-4" /></span>
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
    <article className="rounded-3xl border border-border bg-card p-7 shadow-sm hover-lift">
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
