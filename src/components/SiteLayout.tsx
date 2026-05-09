import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Instagram, Facebook, Leaf, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PromoBar } from "@/components/PromoBar";

const NAV = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/shop", key: "nav.shop" },
  { to: "/kava-bar", key: "nav.kava" },
  { to: "/reviews", key: "nav.reviews" },
  { to: "/faq", key: "nav.faq" },
  { to: "/contact", key: "nav.contact" },
] as const;

function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-display font-semibold text-lg" onClick={() => setOpen(false)}>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-deep text-gold shadow-gold">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline">Hemp Love <span className="text-gold">·</span> Love Kava</span>
          <span className="sm:hidden">Hemp Love</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/70 hover:text-foreground transition-colors"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {t(n.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href="tel:+13055555555"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-deep px-4 py-2 text-sm font-semibold text-background hover:opacity-90 transition shadow-sm"
          >
            <Phone className="h-4 w-4 text-gold" /> {t("cta.call")}
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-[fade-in_0.2s_ease-out]">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium text-foreground/80"
                activeProps={{ className: "text-primary font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {t(n.key)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function StickyMobileCTA() {
  const { t } = useI18n();
  return (
    <div className="lg:hidden fixed bottom-3 left-3 right-20 z-50 flex gap-2 rounded-2xl bg-deep/95 backdrop-blur p-2 shadow-luxe border border-background/10">
      <a href="tel:+13055555555" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gold py-3 font-semibold text-deep text-sm">
        <Phone className="h-4 w-4" /> {t("cta.call")}
      </a>
      <Link to="/shop" className="flex-1 inline-flex items-center justify-center rounded-xl bg-accent py-3 font-semibold text-accent-foreground text-sm">
        {t("cta.order")}
      </Link>
      <Link to="/contact" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-background/10 py-3 font-semibold text-background text-sm">
        <MapPin className="h-4 w-4" /> {t("cta.visit")}
      </Link>
    </div>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-deep text-background mt-24 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-xl font-semibold">
            <Leaf className="h-5 w-5 text-gold" /> Hemp Love Farms · Love Kava
          </div>
          <p className="mt-4 max-w-md text-background/70 text-sm leading-relaxed">{t("footer.tag")}</p>
          <div className="mt-6 flex items-center gap-3">
            <a aria-label="Instagram" href="#" className="rounded-full bg-background/10 p-2 hover:bg-gold hover:text-deep transition"><Instagram className="h-4 w-4" /></a>
            <a aria-label="Facebook" href="#" className="rounded-full bg-background/10 p-2 hover:bg-gold hover:text-deep transition"><Facebook className="h-4 w-4" /></a>
            <div className="ml-2"><LanguageSwitcher tone="dark" /></div>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-gold mb-4">{t("footer.explore")}</h4>
          <ul className="space-y-2 text-sm text-background/75">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-gold">{t(n.key)}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-gold mb-4">{t("footer.visit")}</h4>
          <address className="not-italic text-sm text-background/75 space-y-2">
            <p>7700 NW 56th St<br/>Doral, FL 33166</p>
            <p><a href="tel:+13055555555" className="hover:text-gold">(305) 555-5555</a></p>
            <p>{t("footer.hours")}</p>
          </address>
        </div>
      </div>
      <div className="relative border-t border-background/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-background/50">© {new Date().getFullYear()} Hemp Love Farms · Love Kava. {t("footer.rights")}</p>
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <PromoBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCTA />
      <WhatsAppFloat />
    </div>
  );
}
