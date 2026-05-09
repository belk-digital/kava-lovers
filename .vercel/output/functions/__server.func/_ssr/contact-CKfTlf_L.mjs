import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as storefront } from "./router-CoEJyaKm.mjs";
import { P as PageHero, E as Eyebrow } from "./Section-B9pmBUAN.mjs";
import { a as MapPin, P as Phone, g as Clock, h as Mail, b as MessageCircle } from "../_libs/lucide-react.mjs";
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
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Visit Us", title: "Find us in the heart of Doral.", subtitle: "Walk in, call ahead for pickup, or schedule a delivery. We're here daily.", image: storefront }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Stop By" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-3xl font-display font-bold", children: [
          "7700 NW 56th St",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Doral, FL 33166"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, {}), title: "Address", body: "7700 NW 56th St, Doral, FL 33166" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, {}), title: "Phone", body: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+13055555555", className: "text-primary hover:underline", children: "(305) 555-5555" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, {}), title: "Hours", body: "Mon–Sun · 10:00 AM – 11:00 PM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, {}), title: "Email", body: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@hemplovefarms.com", className: "text-primary hover:underline", children: "hello@hemplovefarms.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, {}), title: "WhatsApp", body: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/13055555555", className: "text-primary hover:underline", children: "Message us on WhatsApp" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://maps.google.com/?q=7700+NW+56th+St+Doral+FL+33166", target: "_blank", rel: "noopener noreferrer", className: "rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold", children: "Get Directions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+13055555555", className: "rounded-full border border-border px-6 py-3 font-semibold", children: "Call Now" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 rounded-3xl overflow-hidden shadow-luxe border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Map to Hemp Love Farms", src: "https://www.google.com/maps?q=7700+NW+56th+St+Doral+FL+33166&output=embed", className: "w-full h-80", loading: "lazy" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Send a Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-display font-bold", children: "Questions? We'd love to help." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          setSent(true);
        }, className: "mt-8 space-y-4 rounded-3xl border border-border bg-card p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-semibold mb-2", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-full bg-primary text-primary-foreground py-3 font-semibold hover:opacity-90", children: sent ? "Thank you — we'll be in touch!" : "Send Message" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-3xl bg-gradient-deep text-background p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl", children: "Delivery Zones" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-background/80 text-sm", children: "We deliver across Doral, Miami, Hialeah, Sweetwater & nearby areas. Curbside pickup available at the store." })
        ] })
      ] })
    ] })
  ] });
}
function Info({
  icon,
  title,
  body
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest font-semibold text-muted-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: body })
    ] })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "block text-sm font-semibold mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required, className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" })
  ] });
}
export {
  Contact as component
};
