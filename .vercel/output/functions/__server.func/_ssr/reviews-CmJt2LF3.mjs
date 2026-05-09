import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as community, R as REVIEWS } from "./router-CoEJyaKm.mjs";
import { P as PageHero } from "./Section-B9pmBUAN.mjs";
import { f as Star } from "../_libs/lucide-react.mjs";
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
function Reviews() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Loved in Doral", title: "5.0 ★ from our community.", subtitle: "63+ Google reviews and counting. Here's what locals are saying about Hemp Love Farms and Love Kava.", image: community }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: REVIEWS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-3xl border border-border bg-card p-7 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 leading-relaxed", children: [
          '"',
          r.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center font-semibold text-deep", children: r.name[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: r.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: r.role })
          ] })
        ] })
      ] }, r.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.google.com/search?q=Hemp+Love+Farms+Love+Kava+Doral+FL", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold", children: "Leave a Review on Google" }) })
    ] })
  ] });
}
export {
  Reviews as component
};
