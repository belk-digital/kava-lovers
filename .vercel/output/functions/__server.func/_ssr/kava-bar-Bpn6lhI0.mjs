import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { k as kava, c as community } from "./router-CoEJyaKm.mjs";
import { P as PageHero, E as Eyebrow } from "./Section-B9pmBUAN.mjs";
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
import "../_libs/lucide-react.mjs";
const MENU = [{
  name: "Traditional Kava Bowl",
  desc: "Hand-pressed Vanuatu kava, served in coconut.",
  price: "$10"
}, {
  name: "Tropical Kava Smoothie",
  desc: "Pineapple, coconut, lime & kava root.",
  price: "$12"
}, {
  name: "Kratom Tea",
  desc: "House blend with honey & citrus.",
  price: "$9"
}, {
  name: "Love Mojito",
  desc: "Signature non-alcoholic mojito with a kava twist.",
  price: "$11"
}, {
  name: "CBD Iced Latte",
  desc: "Cold brew, oat milk, broad-spectrum CBD.",
  price: "$8"
}, {
  name: "Mind & Mood Elixirs",
  desc: "Adaptogenic shots: focus, calm or sleep.",
  price: "$7"
}];
function KavaBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Love Kava Bar", title: "The lounge where Miami exhales.", subtitle: "Tropical, social, sober-friendly. Sip ceremonial kava, kratom teas and signature mocktails crafted to help you relax, connect and feel good.", image: kava }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "The Experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl font-display font-bold", children: "A new kind of nightlife." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "Skip the hangover. At Love Kava you'll find tropical lighting, laid-back music, comfy seating and bartenders who actually know their plants. We host community nights, open mics, and pop-ups all month long." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-2 text-foreground/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Sober-friendly, all-ages until 9pm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• LGBTQ+ welcoming community" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Live music & local pop-ups" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Reservations available for groups" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold", children: "Reserve a Spot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+13055555555", className: "rounded-full border border-border px-6 py-3 font-semibold", children: "Call the Bar" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: community, alt: "Friends enjoying Love Kava lounge", className: "rounded-3xl shadow-luxe object-cover w-full h-[500px]", loading: "lazy", width: 1920, height: 1080 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-deep text-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "The Menu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl sm:text-5xl font-display font-bold", children: "Hand-crafted, daily fresh." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-2 gap-x-12 gap-y-8", children: MENU.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-background/15 pb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg", children: m.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-semibold", children: m.price })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-background/70", children: m.desc })
      ] }, m.name)) })
    ] }) })
  ] });
}
export {
  KavaBar as component
};
