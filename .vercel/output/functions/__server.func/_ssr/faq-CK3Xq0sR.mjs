import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { p as products, F as FAQS } from "./router-CoEJyaKm.mjs";
import { P as PageHero, E as Eyebrow } from "./Section-B9pmBUAN.mjs";
import { C as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function FAQ() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "FAQ & Education", title: "Curious? We've got answers.", subtitle: "Beginner-friendly guidance from Doral's most trusted hemp and kava team.", image: products }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: FAQS.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { ...f }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 rounded-3xl bg-gradient-deep text-background p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Still have questions?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-display font-bold", children: "Talk to a real human." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-background/80", children: "Our team is friendly, knowledgeable and never pushy." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+13055555555", className: "rounded-full bg-gold text-deep px-6 py-3 font-semibold", children: "Call Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/13055555555", className: "rounded-full border border-background/30 px-6 py-3 font-semibold", children: "WhatsApp" })
        ] })
      ] })
    ] })
  ] });
}
function FaqItem({
  q,
  a
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(!open), className: "w-full flex items-center justify-between gap-4 p-5 text-left font-display font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-5 w-5 transition-transform ${open ? "rotate-180" : ""}` })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-muted-foreground leading-relaxed", children: a })
  ] });
}
export {
  FAQ as component
};
