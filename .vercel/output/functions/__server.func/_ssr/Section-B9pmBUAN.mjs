import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function Eyebrow({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold", children });
}
function PageHero({
  eyebrow,
  title,
  subtitle,
  image
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-deep text-background", children: [
    image && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "", className: "absolute inset-0 h-full w-full object-cover opacity-40", loading: "eager" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 py-24 sm:py-32 text-center", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 text-4xl sm:text-6xl font-display font-bold leading-tight", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 mx-auto max-w-2xl text-lg text-background/80", children: subtitle })
    ] })
  ] });
}
export {
  Eyebrow as E,
  PageHero as P
};
