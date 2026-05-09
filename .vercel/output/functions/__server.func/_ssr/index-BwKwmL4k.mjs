import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useI18n, p as products, k as kava, c as community, s as storefront, R as REVIEWS } from "./router-CoEJyaKm.mjs";
import { E as Eyebrow } from "./Section-B9pmBUAN.mjs";
import { i as ArrowRight, f as Star, T as Truck, d as Store, H as Heart, L as Leaf, S as Sparkles, j as ShieldCheck, U as Users, k as Coffee, A as Award, B as BookOpen, I as Instagram, l as CircleCheck, m as Gift, Z as Zap, b as MessageCircle, D as Droplets, W as Wind } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const hero = "/assets/hero-kava-CCFFgT5j.jpg";
function Home() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ValueStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BrandExperience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Collections, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedProducts, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(KavaSplit, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EducationHub, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CommunitySocial, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyLoveUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reviews, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SpecialOffer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VisitCTA, {})
  ] });
}
function Hero() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-deep text-background isolate", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "Love Kava Bar interior in Doral", className: "absolute inset-0 h-full w-full object-cover opacity-55", width: 1920, height: 1080 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold/15 blur-3xl animate-float" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 py-28 sm:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t("hero.eyebrow") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-5xl sm:text-7xl font-display font-bold leading-[1.02]", children: [
        t("hero.title1"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: t("hero.title2") }),
        " ",
        t("hero.title3")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg sm:text-xl text-background/85 max-w-2xl", children: t("hero.subtitle") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-deep shadow-gold hover:scale-[1.03] transition-transform", children: [
          t("cta.shop"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/kava-bar", className: "inline-flex items-center gap-2 rounded-full glass-dark px-7 py-3.5 font-semibold text-background hover:bg-background/15 transition", children: t("cta.menu") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition", children: t("cta.delivery") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-3 sm:gap-6 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 glass-dark rounded-full px-3 py-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: t("trust.rating") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-4 w-4" }), children: t("trust.delivery") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { className: "h-4 w-4" }), children: t("trust.pickup") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }), children: t("trust.latino") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {})
  ] });
}
function Marquee() {
  const items = ["Premium Hemp", "Fresh Kava Daily", "Latino-Owned", "5★ Doral", "Free Delivery $40+", "LGBTQ+ Friendly", "Lab-Tested CBD", "Tropical Wellness"];
  const loop = [...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-y border-background/10 bg-deep/60 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex marquee-track gap-12 py-4 whitespace-nowrap", children: loop.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-background/70", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-gold" }),
    " ",
    it
  ] }, i)) }) });
}
function ValueStrip() {
  const {
    t
  } = useI18n();
  const items = [{
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-5 w-5" }),
    t: t("value.hemp.t"),
    s: t("value.hemp.s")
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }),
    t: t("value.kava.t"),
    s: t("value.kava.s")
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5" }),
    t: t("value.trust.t"),
    s: t("value.trust.s")
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-5 w-5" }),
    t: t("value.delivery.t"),
    s: t("value.delivery.s")
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border", children: items.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-deep text-gold", children: v.icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display font-semibold", children: v.t }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: v.s })
  ] }, v.t)) }) });
}
function BrandExperience() {
  const {
    t
  } = useI18n();
  const cards = [{
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-6 w-6" }),
    t: t("exp.lifestyle.t"),
    d: t("exp.lifestyle.d")
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6" }),
    t: t("exp.community.t"),
    d: t("exp.community.d")
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-6 w-6" }),
    t: t("exp.wellness.t"),
    d: t("exp.wellness.d")
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Coffee, { className: "h-6 w-6" }),
    t: t("exp.kava.t"),
    d: t("exp.kava.d")
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-mesh py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t("exp.eyebrow") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl sm:text-5xl font-display font-bold", children: t("exp.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: t("exp.subtitle") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: cards.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hover-lift glass rounded-3xl p-7 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-gold opacity-15 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-deep text-gold shadow-gold", children: c.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative mt-5 text-xl font-display font-semibold", children: c.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-2 text-sm text-muted-foreground leading-relaxed", children: c.d })
    ] }, c.t)) })
  ] }) });
}
function Collections() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t("collections.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl sm:text-5xl font-display font-bold", children: t("collections.title") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all", children: [
        t("cta.browseAll"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { image: products, title: t("collections.hemp.t"), desc: t("collections.hemp.d"), to: "/shop" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { image: kava, title: t("collections.kava.t"), desc: t("collections.kava.d"), to: "/kava-bar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { image: community, title: t("collections.life.t"), desc: t("collections.life.d"), to: "/shop" })
    ] })
  ] });
}
function FeaturedProducts() {
  const {
    t
  } = useI18n();
  const items = [{
    name: "Signature Kava Bowl",
    cat: "Best Seller",
    price: "$12",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Coffee, { className: "h-5 w-5" }),
    badge: "Hot"
  }, {
    name: "Full-Spectrum CBD Oil",
    cat: "Wellness",
    price: "$58",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "h-5 w-5" }),
    badge: "Lab-Tested"
  }, {
    name: "Tropical Mojito Mocktail",
    cat: "Kava Bar",
    price: "$10",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }),
    badge: "New"
  }, {
    name: "Premium Disposable Vape",
    cat: "Lifestyle",
    price: "$35",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wind, { className: "h-5 w-5" }),
    badge: "Top Pick"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/30 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t("featured.eyebrow") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl sm:text-5xl font-display font-bold", children: t("featured.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: t("featured.subtitle") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: items.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hover-lift group rounded-3xl bg-card border border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 bg-gradient-deep flex items-center justify-center text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-mesh opacity-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-20 w-20 rounded-full glass-dark flex items-center justify-center shadow-gold", children: p.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-deep", children: p.badge })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: p.cat }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display font-semibold text-lg", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: p.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "text-xs font-semibold inline-flex items-center gap-1 text-foreground/80 group-hover:text-primary", children: [
            t("cta.order"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
          ] })
        ] })
      ] })
    ] }, p.name)) })
  ] }) });
}
function KavaSplit() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-deep text-background relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: kava, alt: "Fresh kava drink poured into a coconut shell", className: "rounded-3xl shadow-luxe object-cover w-full h-[480px]", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -left-6 glass-dark rounded-2xl p-4 max-w-[200px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-lg", children: "5.0★" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-background/70", children: "Best kava bar in Miami — Maria G." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t("kava.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl sm:text-5xl font-display font-bold", children: t("kava.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-background/80", children: t("kava.body") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/kava-bar", className: "rounded-full bg-gold px-7 py-3.5 font-semibold text-deep shadow-gold hover:scale-[1.03] transition-transform", children: t("cta.menu") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "rounded-full glass-dark px-7 py-3.5 font-semibold", children: t("cta.directions") })
        ] })
      ] })
    ] })
  ] });
}
function EducationHub() {
  const {
    t
  } = useI18n();
  const items = [{
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Coffee, { className: "h-6 w-6" }),
    t: t("edu.kava.t"),
    d: t("edu.kava.d")
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-6 w-6" }),
    t: t("edu.hemp.t"),
    d: t("edu.hemp.d")
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-6 w-6" }),
    t: t("edu.guide.t"),
    d: t("edu.guide.d")
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t("edu.eyebrow") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl sm:text-5xl font-display font-bold", children: t("edu.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: t("edu.subtitle") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-3", children: items.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/faq", className: "hover-lift group rounded-3xl border border-border bg-card p-7 block relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 h-1 w-full bg-gradient-gold opacity-60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary", children: c.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-display font-semibold", children: c.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: c.d }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all", children: [
        t("cta.discover"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }, c.t)) })
  ] });
}
function CommunitySocial() {
  const {
    t
  } = useI18n();
  const tiles = [storefront, kava, products, community, hero, kava];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-mesh py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t("social.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl sm:text-5xl font-display font-bold", children: t("social.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-md", children: t("social.subtitle") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://instagram.com/hemplovefarms", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-gradient-deep px-5 py-3 font-semibold text-background shadow-luxe", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4 text-gold" }),
        " @hemplovefarms"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3", children: tiles.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://instagram.com/hemplovefarms", target: "_blank", rel: "noreferrer", className: "relative group overflow-hidden rounded-2xl aspect-square", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "Community moment", className: "h-full w-full object-cover transition duration-700 group-hover:scale-110", loading: "lazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-deep/0 group-hover:bg-deep/60 transition flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-6 w-6 text-background opacity-0 group-hover:opacity-100 transition" }) })
    ] }, i)) })
  ] }) });
}
function WhyLoveUs() {
  const {
    t
  } = useI18n();
  const cards = [{
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5" }),
    t: t("why.q1.t"),
    d: t("why.q1.d")
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }),
    t: t("why.q2.t"),
    d: t("why.q2.d")
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5" }),
    t: t("why.q3.t"),
    d: t("why.q3.d")
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5" }),
    t: t("why.q4.t"),
    d: t("why.q4.d")
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t("why.eyebrow") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl sm:text-5xl font-display font-bold", children: t("why.title") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: cards.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hover-lift rounded-3xl border border-border bg-card p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold", children: c.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display font-semibold text-lg", children: c.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: c.d })
    ] }, c.t)) })
  ] });
}
function Reviews() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/30 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t("reviews.eyebrow") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl sm:text-5xl font-display font-bold", children: t("reviews.title") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: REVIEWS.slice(0, 3).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewCard, { ...r }, r.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/reviews", className: "text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all", children: [
      t("cta.readReviews"),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
    ] }) })
  ] }) });
}
function SpecialOffer() {
  const {
    t
  } = useI18n();
  const [email, setEmail] = reactExports.useState("");
  const [done, setDone] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] bg-gradient-deep text-background p-10 sm:p-16 shadow-luxe", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t("offer.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl sm:text-5xl font-display font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "10%" }),
          " ",
          t("offer.title").replace("10% off ", "").replace("10% en ", "")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-background/80 max-w-md", children: t("offer.subtitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-4 text-sm text-background/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-4 w-4 text-gold" }),
            " Loyalty perks"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-gold" }),
            " Early drops"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 text-gold" }),
            " Member events"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
        e.preventDefault();
        setDone(true);
      }, className: "glass-dark rounded-3xl p-6 sm:p-8", children: done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mx-auto h-10 w-10 text-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-xl", children: "Welcome to the Love Club!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-background/70", children: "Check your inbox for your 10% off code." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-background/85", children: t("offer.placeholder") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "you@miami.com", className: "mt-2 w-full rounded-full bg-background/10 border border-background/20 px-5 py-3.5 text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "mt-3 w-full rounded-full bg-gold px-6 py-3.5 font-semibold text-deep shadow-gold hover:scale-[1.02] transition-transform", children: [
          t("cta.subscribe"),
          " →"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[11px] text-background/50 text-center", children: "No spam. Unsubscribe anytime." })
      ] }) })
    ] })
  ] }) });
}
function VisitCTA() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] shadow-luxe", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: storefront, alt: "Hemp Love Farms storefront in Doral", className: "absolute inset-0 h-full w-full object-cover", loading: "lazy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative p-10 sm:p-16 text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: t("visit.eyebrow") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl sm:text-5xl font-display font-bold", children: t("visit.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-background/85", children: t("visit.subtitle") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+13055555555", className: "rounded-full bg-gold px-7 py-3.5 font-semibold text-deep shadow-gold", children: t("cta.call") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "rounded-full glass-dark px-7 py-3.5 font-semibold text-background", children: t("cta.directions") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/13055555555", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          " WhatsApp"
        ] })
      ] })
    ] }) })
  ] }) });
}
function Badge({
  icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-medium", children: [
    icon,
    " ",
    children
  ] });
}
function FeatureCard({
  image,
  title,
  desc,
  to
}) {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: "group relative overflow-hidden rounded-3xl shadow-luxe block hover-lift", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: title, className: "h-[420px] w-full object-cover transition duration-700 group-hover:scale-110", loading: "lazy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 p-6 text-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-display font-bold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-background/80", children: desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-1 text-gold font-semibold text-sm", children: [
        t("cta.discover"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] })
  ] });
}
function ReviewCard({
  name,
  text,
  role
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-3xl border border-border bg-card p-7 shadow-sm hover-lift", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: Array.from({
      length: 5
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-foreground/90 leading-relaxed", children: [
      '"',
      text,
      '"'
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center font-semibold text-deep", children: name[0] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: role })
      ] })
    ] })
  ] });
}
export {
  Home as component
};
