import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as Sparkles, L as Leaf, P as Phone, X, M as Menu, I as Instagram, F as Facebook, a as MapPin, b as MessageCircle, c as Send, G as Globe } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-BMkD0RJ9.css";
const en = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.shop": "Shop",
  "nav.kava": "Love Kava Bar",
  "nav.reviews": "Reviews",
  "nav.faq": "FAQ",
  "nav.contact": "Visit Us",
  "cta.call": "Call Now",
  "cta.shop": "Shop Now",
  "cta.visit": "Visit",
  "cta.order": "Order",
  "cta.menu": "Explore the Menu",
  "cta.directions": "Get Directions",
  "cta.delivery": "Order Delivery",
  "cta.discover": "Discover",
  "cta.browseAll": "Browse all",
  "cta.readReviews": "Read all reviews",
  "cta.subscribe": "Subscribe",
  "cta.chat": "Chat with us",
  "promo.bar": "✦ Free local delivery in Doral on orders $40+ — Use code LOVE10 for 10% off",
  "hero.eyebrow": "Doral · Miami · Florida",
  "hero.title1": "Doral's Premium",
  "hero.title2": "Hemp, Kava",
  "hero.title3": "& Wellness Destination",
  "hero.subtitle": "A modern Miami lifestyle hub blending hand-crafted kava drinks, premium hemp wellness, exotic snacks, and a community that feels like home.",
  "trust.rating": "5.0 · 63+ Google reviews",
  "trust.delivery": "Free local delivery",
  "trust.pickup": "Curbside pickup",
  "trust.latino": "Latino-owned",
  "value.hemp.t": "Premium Hemp",
  "value.hemp.s": "Lab-tested CBD & cannabinoids",
  "value.kava.t": "Fresh Kava Bar",
  "value.kava.s": "Hand-crafted daily",
  "value.trust.t": "Trusted Local",
  "value.trust.s": "5★ rated in Doral",
  "value.delivery.t": "Delivery & Pickup",
  "value.delivery.s": "Order in minutes",
  "exp.eyebrow": "The Brand Experience",
  "exp.title": "More than a shop. A Miami ritual.",
  "exp.subtitle": "Where Pacific island traditions meet Miami's tropical pulse — a sanctuary for wellness, connection, and the modern lifestyle.",
  "exp.lifestyle.t": "Lifestyle",
  "exp.lifestyle.d": "Curated for the modern Miami soul.",
  "exp.community.t": "Community",
  "exp.community.d": "A welcoming space for every culture.",
  "exp.wellness.t": "Wellness",
  "exp.wellness.d": "Plant-based rituals for body & mind.",
  "exp.kava.t": "Kava Culture",
  "exp.kava.d": "Authentic recipes, tropical vibes.",
  "collections.eyebrow": "Shop the Lifestyle",
  "collections.title": "Wellness, curated for you.",
  "collections.hemp.t": "Hemp & CBD",
  "collections.hemp.d": "Premium oils, edibles, topicals & cannabinoid blends.",
  "collections.kava.t": "Love Kava Drinks",
  "collections.kava.d": "Fresh kava, kratom teas, mojitos & relaxation rituals.",
  "collections.life.t": "Lifestyle & Snacks",
  "collections.life.d": "Vapes, exotic snacks, accessories & wellness essentials.",
  "featured.eyebrow": "Best Sellers",
  "featured.title": "Loved by the community.",
  "featured.subtitle": "The drinks, oils and essentials our regulars come back for — all available for delivery or pickup.",
  "kava.eyebrow": "Love Kava Bar",
  "kava.title": "Slow down, Miami.",
  "kava.body": "Step into a tropical lounge where ancient Pacific traditions meet modern Miami. Our bartenders craft fresh kava bowls, kratom teas, mocktails and signature mojitos to help you unwind, connect, and feel good — naturally.",
  "edu.eyebrow": "Education Hub",
  "edu.title": "Learn the rituals.",
  "edu.subtitle": "New to kava or hemp? We'll guide you with honesty, expertise and zero pressure.",
  "edu.kava.t": "What is Kava?",
  "edu.kava.d": "A traditional Pacific drink that calms the mind without dulling it.",
  "edu.hemp.t": "Hemp 101",
  "edu.hemp.d": "Understand CBD, CBG, CBN and how each cannabinoid supports you.",
  "edu.guide.t": "Beginner's Guide",
  "edu.guide.d": "How to choose your first product — dosing, effects and tips.",
  "social.eyebrow": "@hemplovefarms",
  "social.title": "Join the community.",
  "social.subtitle": "Tag us on Instagram for a chance to be featured.",
  "reviews.eyebrow": "Loved in Doral",
  "reviews.title": "5.0 ★ from our community.",
  "why.eyebrow": "Why Customers Love Us",
  "why.title": "Built on trust, crafted with love.",
  "why.q1.t": "Real Expertise",
  "why.q1.d": "A team that actually knows hemp, kava and what works for you.",
  "why.q2.t": "Premium Atmosphere",
  "why.q2.d": "A Miami sanctuary — clean, tropical, beautifully designed.",
  "why.q3.t": "Honest Products",
  "why.q3.d": "Lab-tested, transparently sourced, never overpriced.",
  "why.q4.t": "Community First",
  "why.q4.d": "Latino-owned, LGBTQ+ friendly, every soul welcome.",
  "offer.eyebrow": "Special Offer",
  "offer.title": "Get 10% off your first order.",
  "offer.subtitle": "Join the Love Club for exclusive drops, kava events, and member-only perks.",
  "offer.placeholder": "Your email address",
  "visit.eyebrow": "Visit Today",
  "visit.title": "7700 NW 56th St, Doral",
  "visit.subtitle": "Open daily · Curbside pickup · Local delivery · Friendly, knowledgeable staff.",
  "wa.title": "Need help? Chat with us.",
  "wa.subtitle": "Reservations, product questions or delivery — we'll reply in minutes.",
  "wa.q.reserve": "I'd like to reserve a table at Love Kava 🌴",
  "wa.q.product": "I have a question about a product 🌿",
  "wa.q.delivery": "I'd like to place a delivery order 🛵",
  "wa.q.hello": "Hi Hemp Love Farms! 👋",
  "footer.tag": "Doral's premium hemp, kava and wellness destination. Latino-owned, community-driven, and crafted for the modern Miami lifestyle.",
  "footer.explore": "Explore",
  "footer.visit": "Visit",
  "footer.hours": "Open Daily · Delivery & Pickup",
  "footer.rights": "All rights reserved. Latino-owned · LGBTQ+ friendly."
};
const es = {
  "nav.home": "Inicio",
  "nav.about": "Nosotros",
  "nav.shop": "Tienda",
  "nav.kava": "Love Kava Bar",
  "nav.reviews": "Reseñas",
  "nav.faq": "Preguntas",
  "nav.contact": "Visítanos",
  "cta.call": "Llámanos",
  "cta.shop": "Comprar",
  "cta.visit": "Visita",
  "cta.order": "Pedir",
  "cta.menu": "Ver el Menú",
  "cta.directions": "Cómo llegar",
  "cta.delivery": "Pedir Delivery",
  "cta.discover": "Descubre",
  "cta.browseAll": "Ver todo",
  "cta.readReviews": "Ver todas las reseñas",
  "cta.subscribe": "Suscribirme",
  "cta.chat": "Chatea con nosotros",
  "promo.bar": "✦ Delivery gratis en Doral en órdenes de $40+ — Usa LOVE10 para 10% de descuento",
  "hero.eyebrow": "Doral · Miami · Florida",
  "hero.title1": "El destino premium de",
  "hero.title2": "Hemp, Kava",
  "hero.title3": "y bienestar en Doral",
  "hero.subtitle": "Un espacio moderno de Miami donde se unen kavas artesanales, productos premium de hemp, snacks exóticos y una comunidad que se siente como en casa.",
  "trust.rating": "5.0 · 63+ reseñas en Google",
  "trust.delivery": "Delivery local gratis",
  "trust.pickup": "Recogida en tienda",
  "trust.latino": "Negocio Latino",
  "value.hemp.t": "Hemp Premium",
  "value.hemp.s": "CBD y cannabinoides certificados",
  "value.kava.t": "Kava Bar Fresco",
  "value.kava.s": "Preparado a mano cada día",
  "value.trust.t": "Local de Confianza",
  "value.trust.s": "5★ en Doral",
  "value.delivery.t": "Delivery y Pickup",
  "value.delivery.s": "Pide en minutos",
  "exp.eyebrow": "La Experiencia",
  "exp.title": "Más que una tienda. Un ritual de Miami.",
  "exp.subtitle": "Donde las tradiciones del Pacífico se encuentran con el pulso tropical de Miami — un santuario de bienestar y conexión.",
  "exp.lifestyle.t": "Lifestyle",
  "exp.lifestyle.d": "Curado para el alma moderna de Miami.",
  "exp.community.t": "Comunidad",
  "exp.community.d": "Un espacio acogedor para toda cultura.",
  "exp.wellness.t": "Bienestar",
  "exp.wellness.d": "Rituales naturales para cuerpo y mente.",
  "exp.kava.t": "Cultura Kava",
  "exp.kava.d": "Recetas auténticas con vibras tropicales.",
  "collections.eyebrow": "Compra el Estilo de Vida",
  "collections.title": "Bienestar, curado para ti.",
  "collections.hemp.t": "Hemp y CBD",
  "collections.hemp.d": "Aceites premium, comestibles, tópicos y mezclas cannabinoides.",
  "collections.kava.t": "Bebidas Love Kava",
  "collections.kava.d": "Kava fresca, tés de kratom, mojitos y rituales de relajación.",
  "collections.life.t": "Lifestyle y Snacks",
  "collections.life.d": "Vapes, snacks exóticos, accesorios y esenciales de bienestar.",
  "featured.eyebrow": "Más Vendidos",
  "featured.title": "Amados por la comunidad.",
  "featured.subtitle": "Las bebidas, aceites y esenciales que nuestros clientes regulares siempre eligen — disponibles para delivery o pickup.",
  "kava.eyebrow": "Love Kava Bar",
  "kava.title": "Respira, Miami.",
  "kava.body": "Entra a un lounge tropical donde las tradiciones del Pacífico se unen al Miami moderno. Nuestros bartenders preparan bowls de kava frescos, tés de kratom, mocktails y mojitos exclusivos para que te relajes y te sientas bien — naturalmente.",
  "edu.eyebrow": "Centro Educativo",
  "edu.title": "Aprende los rituales.",
  "edu.subtitle": "¿Nuevo en kava o hemp? Te guiamos con honestidad y sin presión.",
  "edu.kava.t": "¿Qué es la Kava?",
  "edu.kava.d": "Una bebida tradicional del Pacífico que calma sin nublar la mente.",
  "edu.hemp.t": "Hemp 101",
  "edu.hemp.d": "Entiende CBD, CBG, CBN y cómo cada cannabinoide te apoya.",
  "edu.guide.t": "Guía para Principiantes",
  "edu.guide.d": "Cómo elegir tu primer producto — dosis, efectos y consejos.",
  "social.eyebrow": "@hemplovefarms",
  "social.title": "Únete a la comunidad.",
  "social.subtitle": "Etiquétanos en Instagram para aparecer en nuestro feed.",
  "reviews.eyebrow": "Amados en Doral",
  "reviews.title": "5.0 ★ de nuestra comunidad.",
  "why.eyebrow": "Por Qué Nos Aman",
  "why.title": "Construido con confianza, hecho con amor.",
  "why.q1.t": "Verdadera Experiencia",
  "why.q1.d": "Un equipo que realmente entiende de hemp y kava.",
  "why.q2.t": "Ambiente Premium",
  "why.q2.d": "Un santuario en Miami — limpio, tropical, bien diseñado.",
  "why.q3.t": "Productos Honestos",
  "why.q3.d": "Probados en laboratorio, sin sobreprecio.",
  "why.q4.t": "Comunidad Primero",
  "why.q4.d": "Latino, LGBTQ+ friendly, todos bienvenidos.",
  "offer.eyebrow": "Oferta Especial",
  "offer.title": "Obtén 10% en tu primera compra.",
  "offer.subtitle": "Únete al Love Club para drops exclusivos, eventos de kava y beneficios de miembro.",
  "offer.placeholder": "Tu correo electrónico",
  "visit.eyebrow": "Visítanos Hoy",
  "visit.title": "7700 NW 56th St, Doral",
  "visit.subtitle": "Abierto todos los días · Pickup · Delivery local · Personal amable y experto.",
  "wa.title": "¿Necesitas ayuda? Chatea con nosotros.",
  "wa.subtitle": "Reservas, productos o delivery — respondemos en minutos.",
  "wa.q.reserve": "Quiero reservar una mesa en Love Kava 🌴",
  "wa.q.product": "Tengo una pregunta sobre un producto 🌿",
  "wa.q.delivery": "Quiero hacer un pedido para delivery 🛵",
  "wa.q.hello": "¡Hola Hemp Love Farms! 👋",
  "footer.tag": "El destino premium de hemp, kava y bienestar en Doral. Negocio Latino, impulsado por la comunidad y diseñado para el lifestyle moderno de Miami.",
  "footer.explore": "Explorar",
  "footer.visit": "Visitar",
  "footer.hours": "Abierto Diario · Delivery y Pickup",
  "footer.rights": "Todos los derechos reservados. Negocio Latino · LGBTQ+ friendly."
};
const DICTS = { en, es };
const I18nContext = reactExports.createContext({ lang: "en", setLang: () => {
}, t: (k) => k });
function I18nProvider({ children }) {
  const [lang, setLangState] = reactExports.useState("en");
  reactExports.useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("hlf_lang");
    if (stored === "en" || stored === "es") {
      setLangState(stored);
    } else if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("es")) {
      setLangState("es");
    }
  }, []);
  reactExports.useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (l) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("hlf_lang", l);
  };
  const t = (k) => DICTS[lang][k] ?? DICTS.en[k] ?? k;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(I18nContext.Provider, { value: { lang, setLang, t }, children });
}
const useI18n = () => reactExports.useContext(I18nContext);
function LanguageSwitcher({ tone = "light" }) {
  const { lang, setLang } = useI18n();
  const base = tone === "dark" ? "bg-background/10 border-background/20 text-background" : "bg-secondary/60 border-border text-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `inline-flex items-center gap-1 rounded-full border ${base} backdrop-blur p-1 text-xs font-semibold`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5 mx-1.5 opacity-70" }),
    ["en", "es"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setLang(l),
        "aria-pressed": lang === l,
        className: `px-2.5 py-1 rounded-full transition uppercase tracking-wider ${lang === l ? "bg-gold text-deep shadow-gold" : "opacity-70 hover:opacity-100"}`,
        children: l
      },
      l
    ))
  ] });
}
const WA_NUMBER = "13055555555";
function waLink(text) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
function WhatsAppFloat() {
  const { t } = useI18n();
  const [open, setOpen] = reactExports.useState(false);
  const [pulse, setPulse] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const id = setTimeout(() => setPulse(false), 8e3);
    return () => clearTimeout(id);
  }, []);
  const quick = [
    { key: "wa.q.reserve" },
    { key: "wa.q.delivery" },
    { key: "wa.q.product" },
    { key: "wa.q.hello" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-24 right-4 z-[60] w-[min(22rem,calc(100vw-2rem))] animate-[fade-in_0.25s_ease-out] origin-bottom-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl overflow-hidden shadow-luxe border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-deep text-background px-5 py-4 flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold", children: t("wa.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-background/70", children: t("wa.subtitle") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), "aria-label": "Close", className: "text-background/70 hover:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 space-y-2", children: quick.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: waLink(t(q.key)),
          target: "_blank",
          rel: "noreferrer",
          className: "group flex items-center justify-between gap-3 rounded-2xl border border-border bg-background hover:bg-secondary/60 px-4 py-3 text-sm font-medium transition",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: t(q.key) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 text-[#25D366] opacity-70 group-hover:translate-x-0.5 transition-transform" })
          ]
        },
        q.key
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        "aria-label": "WhatsApp chat",
        className: "fixed bottom-24 lg:bottom-6 right-4 z-[60] h-14 w-14 rounded-full bg-[#25D366] text-white shadow-luxe flex items-center justify-center hover:scale-105 transition",
        children: [
          pulse && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" }) })
        ]
      }
    )
  ] });
}
function PromoBar() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-deep text-background text-xs sm:text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-2 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-gold shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium tracking-wide", children: t("promo.bar") })
  ] }) });
}
const NAV = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/shop", key: "nav.shop" },
  { to: "/kava-bar", key: "nav.kava" },
  { to: "/reviews", key: "nav.reviews" },
  { to: "/faq", key: "nav.faq" },
  { to: "/contact", key: "nav.contact" }
];
function Header() {
  const { t } = useI18n();
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 backdrop-blur-xl bg-background/75 border-b border-border/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 font-display font-semibold text-lg", onClick: () => setOpen(false), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-deep text-gold shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:inline", children: [
          "Hemp Love ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "·" }),
          " Love Kava"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Hemp Love" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-7 text-sm font-medium", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          className: "text-foreground/70 hover:text-foreground transition-colors",
          activeProps: { className: "text-primary font-semibold" },
          activeOptions: { exact: n.to === "/" },
          children: t(n.key)
        },
        n.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSwitcher, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "tel:+13055555555",
            className: "hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-deep px-4 py-2 text-sm font-semibold text-background hover:opacity-90 transition shadow-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-gold" }),
              " ",
              t("cta.call")
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            "aria-label": "Menu",
            onClick: () => setOpen((v) => !v),
            className: "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border",
            children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-[fade-in_0.2s_ease-out]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "px-6 py-4 flex flex-col gap-1", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: n.to,
        onClick: () => setOpen(false),
        className: "py-2.5 text-base font-medium text-foreground/80",
        activeProps: { className: "text-primary font-semibold" },
        activeOptions: { exact: n.to === "/" },
        children: t(n.key)
      },
      n.to
    )) }) })
  ] });
}
function StickyMobileCTA() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden fixed bottom-3 left-3 right-20 z-50 flex gap-2 rounded-2xl bg-deep/95 backdrop-blur p-2 shadow-luxe border border-background/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+13055555555", className: "flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gold py-3 font-semibold text-deep text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
      " ",
      t("cta.call")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "flex-1 inline-flex items-center justify-center rounded-xl bg-accent py-3 font-semibold text-accent-foreground text-sm", children: t("cta.order") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-background/10 py-3 font-semibold text-background text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
      " ",
      t("cta.visit")
    ] })
  ] });
}
function Footer() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-deep text-background mt-24 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-display text-xl font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-5 w-5 text-gold" }),
          " Hemp Love Farms · Love Kava"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-background/70 text-sm leading-relaxed", children: t("footer.tag") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { "aria-label": "Instagram", href: "#", className: "rounded-full bg-background/10 p-2 hover:bg-gold hover:text-deep transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { "aria-label": "Facebook", href: "#", className: "rounded-full bg-background/10 p-2 hover:bg-gold hover:text-deep transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSwitcher, { tone: "dark" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-gold mb-4", children: t("footer.explore") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-background/75", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, className: "hover:text-gold", children: t(n.key) }) }, n.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-gold mb-4", children: t("footer.visit") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic text-sm text-background/75 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "7700 NW 56th St",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Doral, FL 33166"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+13055555555", className: "hover:text-gold", children: "(305) 555-5555" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("footer.hours") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-t border-background/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto max-w-7xl px-6 py-6 text-xs text-background/50", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Hemp Love Farms · Love Kava. ",
      t("footer.rights")
    ] }) })
  ] });
}
function SiteLayout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PromoBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyMobileCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppFloat, {})
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-display font-bold text-primary", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "That page wandered off. Let's get you back to the good stuff." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90", children: "Back home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong. Try again or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground", children: "Try again" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-full border border-input px-4 py-2 text-sm font-semibold", children: "Go home" })
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hemp Love Farms · Love Kava | Premium Hemp & Kava in Doral, FL" },
      { name: "description", content: "Doral's premium hemp, kava bar and wellness destination. Shop CBD, vapes, exotic snacks. Delivery, curbside pickup. Latino-owned. 5★ rated." },
      { name: "author", content: "Hemp Love Farms" },
      { name: "theme-color", content: "#1a3a2e" },
      { property: "og:title", content: "Hemp Love Farms · Love Kava | Premium Hemp & Kava in Doral, FL" },
      { property: "og:description", content: "Doral's premium hemp, kava bar and wellness destination. Shop CBD, vapes, exotic snacks. Delivery, curbside pickup. Latino-owned. 5★ rated." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hemp Love Farms · Love Kava | Premium Hemp & Kava in Doral, FL" },
      { name: "twitter:description", content: "Doral's premium hemp, kava bar and wellness destination. Shop CBD, vapes, exotic snacks. Delivery, curbside pickup. Latino-owned. 5★ rated." },
      { property: "og:image", content: "https://hemplovefarms.com/storefront.jpg" },
      { name: "twitter:image", content: "https://hemplovefarms.com/storefront.jpg" }
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
      { rel: "alternate", hrefLang: "en", href: "https://hemplovefarms.com/" },
      { rel: "alternate", hrefLang: "es", href: "https://hemplovefarms.com/?lang=es" },
      { rel: "alternate", hrefLang: "x-default", href: "https://hemplovefarms.com/" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://hemplovefarms.com/#business",
          name: "Hemp Love Farms · Love Kava",
          image: "https://hemplovefarms.com/storefront.jpg",
          url: "https://hemplovefarms.com",
          telephone: "+1-305-555-5555",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "7700 NW 56th St",
            addressLocality: "Doral",
            addressRegion: "FL",
            postalCode: "33166",
            addressCountry: "US"
          },
          geo: { "@type": "GeoCoordinates", latitude: 25.8245, longitude: -80.3375 },
          openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "10:00",
            closes: "23:00"
          }],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "63" },
          servesCuisine: "Kava",
          hasOfferCatalog: { "@type": "OfferCatalog", name: "Hemp, Kava & Wellness" },
          areaServed: ["Doral", "Miami", "Hialeah", "Sweetwater", "Coral Gables"]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(I18nProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, {}) }) });
}
const products = "/assets/products-BPDgCUyx.jpg";
const $$splitComponentImporter$6 = () => import("./shop-CD065tPa.mjs");
const Route$6 = createFileRoute("/shop")({
  head: () => ({
    meta: [{
      title: "Shop Hemp, CBD, Vapes & Wellness | Hemp Love Farms Doral"
    }, {
      name: "description",
      content: "Premium hemp, CBD oils, pain creams, vapes, exotic snacks and wellness accessories. Delivery & pickup in Doral, Miami."
    }, {
      property: "og:title",
      content: "Shop · Hemp Love Farms"
    }, {
      property: "og:description",
      content: "Lab-tested hemp, CBD, vapes, snacks & lifestyle. Delivery + pickup in Doral, FL."
    }, {
      property: "og:image",
      content: products
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const community = "/assets/community-DStD0yh8.jpg";
const $$splitComponentImporter$5 = () => import("./reviews-CmJt2LF3.mjs");
const Route$5 = createFileRoute("/reviews")({
  head: () => ({
    meta: [{
      title: "Reviews & Community | Hemp Love Farms · Love Kava Doral"
    }, {
      name: "description",
      content: "Read 5★ Google reviews from our Doral community. Real customers, real love."
    }, {
      property: "og:title",
      content: "Reviews — Hemp Love Farms · Love Kava"
    }, {
      property: "og:description",
      content: "5.0★ from our Doral community. Read real customer stories."
    }, {
      property: "og:image",
      content: community
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Hemp Love Farms · Love Kava",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "63"
        }
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const kava = "/assets/kava-drink-Dr9F3r6K.jpg";
const $$splitComponentImporter$4 = () => import("./kava-bar-Bpn6lhI0.mjs");
const Route$4 = createFileRoute("/kava-bar")({
  head: () => ({
    meta: [{
      title: "Love Kava Bar | Best Kava Lounge in Doral, Miami"
    }, {
      name: "description",
      content: "Fresh kava, kratom teas, signature mojitos and a tropical lounge atmosphere. Doral's premier kava bar experience."
    }, {
      property: "og:title",
      content: "Love Kava Bar — Doral's Premier Lounge"
    }, {
      property: "og:description",
      content: "Fresh kava, kratom, mojitos & community vibes in Doral, FL."
    }, {
      property: "og:image",
      content: kava
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const FAQS = [{
  q: "What is kava?",
  a: "Kava is a traditional Pacific Islander root that's been used for centuries to promote relaxation, social connection, and calm. It's non-alcoholic and naturally soothing."
}, {
  q: "Is kava safe?",
  a: "Yes — when sourced responsibly. We use noble kava varieties and serve responsibly. Avoid mixing with alcohol or sedatives, and check with your doctor if you take medication."
}, {
  q: "What's the difference between CBD, CBG and CBN?",
  a: "All are cannabinoids from the hemp plant. CBD is best known for calm and balance, CBG is often used for focus, and CBN is popular for sleep. Our team will guide you to the right pick."
}, {
  q: "Do you deliver?",
  a: "Yes! We offer same-day local delivery across Doral, Miami, Hialeah, Sweetwater and nearby. Curbside pickup is also available — just call ahead."
}, {
  q: "Is everything lab-tested?",
  a: "Every hemp product on our shelves is third-party lab tested. COAs are available on request."
}, {
  q: "Are you Latino-owned?",
  a: "Yes — proudly Latino-owned, family-run and rooted in Doral's vibrant community. Bilingual service always available."
}, {
  q: "Do I need to be 21?",
  a: "You must be 21+ to purchase hemp, vape and cannabinoid products. Kava drinks are available to all ages until 9pm with valid ID."
}, {
  q: "Can I host an event at Love Kava?",
  a: "Absolutely. We host community nights, open mics, birthdays and private pop-ups. Contact us to plan your event."
}];
const $$splitComponentImporter$3 = () => import("./faq-CK3Xq0sR.mjs");
const Route$3 = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ & Education | Hemp Love Farms · Love Kava Doral"
    }, {
      name: "description",
      content: "Learn about kava, hemp, CBD, delivery, pickup and more. Trusted answers from Doral's premium wellness destination."
    }, {
      property: "og:title",
      content: "FAQ — Hemp & Kava Education"
    }, {
      property: "og:description",
      content: "Beginner-friendly answers about kava, hemp, CBD and our store."
    }, {
      property: "og:image",
      content: products
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const storefront = "/assets/storefront-CfmvCH3z.jpg";
const $$splitComponentImporter$2 = () => import("./contact-CKfTlf_L.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Visit Us | Hemp Love Farms · Love Kava — 7700 NW 56th St Doral"
    }, {
      name: "description",
      content: "Visit Hemp Love Farms & Love Kava at 7700 NW 56th St, Doral, FL 33166. Hours, directions, delivery & pickup."
    }, {
      property: "og:title",
      content: "Visit · Hemp Love Farms · Love Kava"
    }, {
      property: "og:description",
      content: "7700 NW 56th St, Doral, FL 33166. Open daily. Delivery + Pickup."
    }, {
      property: "og:image",
      content: storefront
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-CX4vhs6x.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us | Hemp Love Farms · Love Kava — Doral, FL"
    }, {
      name: "description",
      content: "Latino-owned premium hemp, kava and wellness brand in Doral, Miami. Our story, mission, and community."
    }, {
      property: "og:title",
      content: "About Hemp Love Farms · Love Kava"
    }, {
      property: "og:description",
      content: "Latino-owned wellness destination crafted for the modern Miami lifestyle."
    }, {
      property: "og:image",
      content: storefront
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BwKwmL4k.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Hemp Love Farms · Love Kava | Premium Hemp & Kava Bar in Doral, FL"
    }, {
      name: "description",
      content: "Doral's #1 hemp shop, kava bar & wellness destination. Shop CBD, vapes, exotic snacks. Delivery & pickup. 5★ rated. Latino-owned."
    }, {
      property: "og:title",
      content: "Hemp Love Farms · Love Kava — Doral, Miami"
    }, {
      property: "og:description",
      content: "Premium hemp, kava bar & wellness lifestyle destination in Doral, FL."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const REVIEWS = [{
  name: "Maria G.",
  text: "Best kava bar in Miami! The vibe is unmatched and the staff treats you like family. Their CBD oil changed my sleep.",
  role: "Doral Local"
}, {
  name: "Andres P.",
  text: "Latino-owned, super clean, premium products. I get my vapes and hemp cream here every week. 10/10.",
  role: "Repeat Customer"
}, {
  name: "Jasmine R.",
  text: "Love Kava is my safe space. The mojitos are unreal and everyone is so welcoming. LGBTQ+ friendly for real.",
  role: "Community Member"
}, {
  name: "Carlos M.",
  text: "The delivery was insanely fast and the products are top-notch. Real wellness experts behind the counter.",
  role: "Verified Buyer"
}, {
  name: "Sofia L.",
  text: "Tropical Miami energy with a wellness twist. I bring all my friends here now.",
  role: "Lifestyle Fan"
}, {
  name: "Daniel V.",
  text: "Knowledgeable, kind, and zero pressure. They actually care about helping you find what works.",
  role: "First-time Visitor"
}];
const ShopRoute = Route$6.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$7
});
const ReviewsRoute = Route$5.update({
  id: "/reviews",
  path: "/reviews",
  getParentRoute: () => Route$7
});
const KavaBarRoute = Route$4.update({
  id: "/kava-bar",
  path: "/kava-bar",
  getParentRoute: () => Route$7
});
const FaqRoute = Route$3.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  FaqRoute,
  KavaBarRoute,
  ReviewsRoute,
  ShopRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  FAQS as F,
  REVIEWS as R,
  community as c,
  kava as k,
  products as p,
  router as r,
  storefront as s,
  useI18n as u
};
