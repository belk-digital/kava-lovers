import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { p as products } from "./router-CoEJyaKm.mjs";
import { P as PageHero, E as Eyebrow } from "./Section-B9pmBUAN.mjs";
import { T as Truck, d as Store, e as ShoppingBag } from "../_libs/lucide-react.mjs";
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
const CATEGORIES = [{
  name: "CBD Oils & Tinctures",
  desc: "Full-spectrum, broad-spectrum & isolates.",
  price: "From $29"
}, {
  name: "Cannabinoids",
  desc: "Delta blends, THCa, CBG, CBN — premium picks.",
  price: "From $19"
}, {
  name: "Pain Creams & Topicals",
  desc: "Fast-acting relief from trusted brands.",
  price: "From $24"
}, {
  name: "Vapes & Disposables",
  desc: "Curated selection, top brands only.",
  price: "From $14"
}, {
  name: "Exotic Snacks",
  desc: "Worldwide flavors you won't find anywhere else.",
  price: "From $4"
}, {
  name: "Lifestyle Accessories",
  desc: "Glass, grinders, gear & gifting.",
  price: "From $9"
}, {
  name: "Kava & Kratom Retail",
  desc: "Take the lounge experience home.",
  price: "From $12"
}, {
  name: "Wellness Bundles",
  desc: "Curated kits for sleep, focus & calm.",
  price: "From $49"
}];
function Shop() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Shop", title: "Premium hemp, kava & lifestyle.", subtitle: "Hand-picked, lab-tested, locally loved. Delivery and curbside pickup available across Doral and Miami.", image: products }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-4", children: [{
      i: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, {}),
      t: "Local Delivery",
      d: "Same-day across Doral & Miami."
    }, {
      i: /* @__PURE__ */ jsxRuntimeExports.jsx(Store, {}),
      t: "Curbside Pickup",
      d: "Order ahead — we bring it out."
    }, {
      i: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, {}),
      t: "In-Store",
      d: "Visit our flagship in Doral."
    }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary", children: f.i }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: f.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: f.d })
      ] })
    ] }, f.t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Browse Collections" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl font-display font-bold", children: "Find your wellness ritual." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group rounded-3xl border border-border bg-card p-6 transition hover:shadow-luxe hover:-translate-y-1 duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-2xl bg-gradient-deep overflow-hidden mb-5 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl", children: ["🌿", "✨", "💚", "💨", "🍫", "🛍️", "🥥", "🎁"][CATEGORIES.indexOf(c)] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg", children: c.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: c.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary", children: c.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "text-sm font-semibold text-gold", children: "Order →" })
        ] })
      ] }, c.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-5xl px-6 pb-24 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-gradient-deep text-background p-12 shadow-luxe", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-display font-bold", children: "Need help choosing?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-background/80", children: "Our wellness experts will help you build the perfect routine — no pressure, just guidance." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex justify-center gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+13055555555", className: "rounded-full bg-gold px-6 py-3 font-semibold text-deep", children: "Call to Order" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "rounded-full border border-background/30 px-6 py-3 font-semibold", children: "Visit Store" })
      ] })
    ] }) })
  ] });
}
export {
  Shop as component
};
