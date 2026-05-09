import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";
import storefront from "@/assets/storefront.jpg";
import { PageHero, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Us | Hemp Love Farms · Love Kava — 7700 NW 56th St Doral" },
      { name: "description", content: "Visit Hemp Love Farms & Love Kava at 7700 NW 56th St, Doral, FL 33166. Hours, directions, delivery & pickup." },
      { property: "og:title", content: "Visit · Hemp Love Farms · Love Kava" },
      { property: "og:description", content: "7700 NW 56th St, Doral, FL 33166. Open daily. Delivery + Pickup." },
      { property: "og:image", content: storefront },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Visit Us"
        title="Find us in the heart of Doral."
        subtitle="Walk in, call ahead for pickup, or schedule a delivery. We're here daily."
        image={storefront}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12">
        <div>
          <Eyebrow>Stop By</Eyebrow>
          <h2 className="mt-3 text-3xl font-display font-bold">7700 NW 56th St<br/>Doral, FL 33166</h2>

          <ul className="mt-8 space-y-5">
            <Info icon={<MapPin />} title="Address" body="7700 NW 56th St, Doral, FL 33166" />
            <Info icon={<Phone />} title="Phone" body={<a href="tel:+13055555555" className="text-primary hover:underline">(305) 555-5555</a>} />
            <Info icon={<Clock />} title="Hours" body="Mon–Sun · 10:00 AM – 11:00 PM" />
            <Info icon={<Mail />} title="Email" body={<a href="mailto:hello@hemplovefarms.com" className="text-primary hover:underline">hello@hemplovefarms.com</a>} />
            <Info icon={<MessageCircle />} title="WhatsApp" body={<a href="https://wa.me/13055555555" className="text-primary hover:underline">Message us on WhatsApp</a>} />
          </ul>

          <div className="mt-8 flex gap-3 flex-wrap">
            <a href="https://maps.google.com/?q=7700+NW+56th+St+Doral+FL+33166" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold">Get Directions</a>
            <a href="tel:+13055555555" className="rounded-full border border-border px-6 py-3 font-semibold">Call Now</a>
          </div>

          <div className="mt-10 rounded-3xl overflow-hidden shadow-luxe border border-border">
            <iframe
              title="Map to Hemp Love Farms"
              src="https://www.google.com/maps?q=7700+NW+56th+St+Doral+FL+33166&output=embed"
              className="w-full h-80"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <Eyebrow>Send a Message</Eyebrow>
          <h2 className="mt-3 text-3xl font-display font-bold">Questions? We'd love to help.</h2>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-8 space-y-4 rounded-3xl border border-border bg-card p-7"
          >
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea required rows={5} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <button type="submit" className="w-full rounded-full bg-primary text-primary-foreground py-3 font-semibold hover:opacity-90">
              {sent ? "Thank you — we'll be in touch!" : "Send Message"}
            </button>
          </form>

          <div className="mt-8 rounded-3xl bg-gradient-deep text-background p-7">
            <h3 className="font-display font-bold text-xl">Delivery Zones</h3>
            <p className="mt-2 text-background/80 text-sm">We deliver across Doral, Miami, Hialeah, Sweetwater & nearby areas. Curbside pickup available at the store.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ icon, title, body }: { icon: React.ReactNode; title: string; body: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">{title}</p>
        <p className="mt-1">{body}</p>
      </div>
    </li>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold mb-2">{label}</label>
      <input id={name} name={name} type={type} required={required} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
