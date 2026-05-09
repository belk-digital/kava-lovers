import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as storefront, c as community } from "./router-CoEJyaKm.mjs";
import { P as PageHero, E as Eyebrow } from "./Section-B9pmBUAN.mjs";
import { L as Leaf, H as Heart, U as Users, A as Award } from "../_libs/lucide-react.mjs";
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
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our Story", title: "Wellness, the Miami way.", subtitle: "Hemp Love Farms and Love Kava were born from one belief: feeling good shouldn't be complicated. We blend tradition, science and tropical hospitality into every visit.", image: storefront }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: community, alt: "Friends laughing together at Love Kava lounge", className: "rounded-3xl shadow-luxe object-cover w-full h-[500px]", loading: "lazy", width: 1920, height: 1080 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Our Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl font-display font-bold", children: "A safe, premium space for plant-powered wellness." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "We're a Latino-owned, family-run wellness destination in the heart of Doral. From hand-crafted kava bowls to lab-tested hemp products, every bottle, drink, and recommendation reflects deep care for our community." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Whether you're a long-time wellness seeker or curious for the first time, our team is here to guide you with no pressure, no jargon, and a whole lot of Miami warmth." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "What we stand for" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl font-display font-bold", children: "Values that lead every pour." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [{
        i: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, {}),
        t: "Plant-powered",
        d: "Every product is intentional, ethical and lab-verified."
      }, {
        i: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, {}),
        t: "Latino-owned",
        d: "Rooted in heritage, hospitality and community."
      }, {
        i: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, {}),
        t: "Inclusive",
        d: "All are welcome. LGBTQ+ friendly, always."
      }, {
        i: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, {}),
        t: "5★ Trusted",
        d: "Doral locals love us — and we love them back."
      }].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card p-7 shadow-sm border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground", children: v.i }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display font-bold text-lg", children: v.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: v.d })
      ] }, v.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-6 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Visit Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl font-display font-bold", children: "Come feel the difference in person." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "7700 NW 56th St · Doral, FL 33166" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex justify-center gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold", children: "Get Directions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "rounded-full border border-border px-6 py-3 font-semibold", children: "Shop Online" })
      ] })
    ] })
  ] });
}
export {
  About as component
};
