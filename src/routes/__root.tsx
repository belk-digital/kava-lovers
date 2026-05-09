import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteLayout } from "../components/SiteLayout";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That page wandered off. Let's get you back to the good stuff.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Try again</button>
          <a href="/" className="rounded-full border border-input px-4 py-2 text-sm font-semibold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hemp Love Farms · Love Kava | Premium Hemp & Kava in Doral, FL" },
      { name: "description", content: "Doral's premium hemp, kava bar and wellness destination. Shop CBD, vapes, exotic snacks. Delivery, curbside pickup. Latino-owned. 5★ rated." },
      { name: "author", content: "Hemp Love Farms" },
      { name: "theme-color", content: "#1a3a2e" },
      { property: "og:title", content: "Hemp Love Farms · Love Kava | Doral, FL" },
      { property: "og:description", content: "Premium hemp, kava bar & wellness destination in Doral, Miami. Delivery + Pickup." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
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
            addressCountry: "US",
          },
          geo: { "@type": "GeoCoordinates", latitude: 25.8245, longitude: -80.3375 },
          openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            opens: "10:00", closes: "23:00",
          }],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "63" },
          servesCuisine: "Kava",
          hasOfferCatalog: { "@type": "OfferCatalog", name: "Hemp, Kava & Wellness" },
          areaServed: ["Doral","Miami","Hialeah","Sweetwater","Coral Gables"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout />
    </QueryClientProvider>
  );
}
