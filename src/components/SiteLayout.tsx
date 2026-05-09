import { Link, Outlet } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, Facebook, Leaf } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/shop", label: "Shop" },
  { to: "/kava-bar", label: "Love Kava Bar" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Visit Us" },
] as const;

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-display font-semibold text-lg">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-5 w-5" />
          </span>
          <span>Hemp Love <span className="text-gold">·</span> Love Kava</span>
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
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+13055555555"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
      </div>
    </header>
  );
}

function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-3 inset-x-3 z-50 flex gap-2 rounded-2xl bg-deep p-2 shadow-luxe">
      <a href="tel:+13055555555" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gold py-3 font-semibold text-deep">
        <Phone className="h-4 w-4" /> Call
      </a>
      <Link to="/shop" className="flex-1 inline-flex items-center justify-center rounded-xl bg-accent py-3 font-semibold text-accent-foreground">
        Order
      </Link>
      <Link to="/contact" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-background/10 py-3 font-semibold text-background">
        <MapPin className="h-4 w-4" /> Visit
      </Link>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-deep text-background mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-xl font-semibold">
            <Leaf className="h-5 w-5 text-gold" /> Hemp Love Farms · Love Kava
          </div>
          <p className="mt-4 max-w-md text-background/70 text-sm leading-relaxed">
            Doral's premium hemp, kava and wellness destination. Latino-owned, community-driven, and crafted for the modern Miami lifestyle.
          </p>
          <div className="mt-6 flex gap-3">
            <a aria-label="Instagram" href="#" className="rounded-full bg-background/10 p-2 hover:bg-gold hover:text-deep transition"><Instagram className="h-4 w-4" /></a>
            <a aria-label="Facebook" href="#" className="rounded-full bg-background/10 p-2 hover:bg-gold hover:text-deep transition"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-background/75">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-gold mb-4">Visit</h4>
          <address className="not-italic text-sm text-background/75 space-y-2">
            <p>7700 NW 56th St<br/>Doral, FL 33166</p>
            <p><a href="tel:+13055555555" className="hover:text-gold">(305) 555-5555</a></p>
            <p>Open Daily · Delivery & Pickup</p>
          </address>
        </div>
      </div>
      <div className="border-t border-background/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-background/50">© {new Date().getFullYear()} Hemp Love Farms · Love Kava. All rights reserved. Latino-owned · LGBTQ+ friendly.</p>
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
