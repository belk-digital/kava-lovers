import { createFileRoute, Link } from "@tanstack/react-router";
import kava from "@/assets/kava-drink.jpg";
import community from "@/assets/community.jpg";
import { PageHero, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/kava-bar")({
  head: () => ({
    meta: [
      { title: "Love Kava Bar | Best Kava Lounge in Doral, Miami" },
      { name: "description", content: "Fresh kava, kratom teas, signature mojitos and a tropical lounge atmosphere. Doral's premier kava bar experience." },
      { property: "og:title", content: "Love Kava Bar — Doral's Premier Lounge" },
      { property: "og:description", content: "Fresh kava, kratom, mojitos & community vibes in Doral, FL." },
      { property: "og:image", content: kava },
    ],
  }),
  component: KavaBar,
});

const MENU = [
  { name: "Traditional Kava Bowl", desc: "Hand-pressed Vanuatu kava, served in coconut.", price: "$10" },
  { name: "Tropical Kava Smoothie", desc: "Pineapple, coconut, lime & kava root.", price: "$12" },
  { name: "Kratom Tea", desc: "House blend with honey & citrus.", price: "$9" },
  { name: "Love Mojito", desc: "Signature non-alcoholic mojito with a kava twist.", price: "$11" },
  { name: "CBD Iced Latte", desc: "Cold brew, oat milk, broad-spectrum CBD.", price: "$8" },
  { name: "Mind & Mood Elixirs", desc: "Adaptogenic shots: focus, calm or sleep.", price: "$7" },
];

function KavaBar() {
  return (
    <>
      <PageHero
        eyebrow="Love Kava Bar"
        title="The lounge where Miami exhales."
        subtitle="Tropical, social, sober-friendly. Sip ceremonial kava, kratom teas and signature mocktails crafted to help you relax, connect and feel good."
        image={kava}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow>The Experience</Eyebrow>
          <h2 className="mt-3 text-4xl font-display font-bold">A new kind of nightlife.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Skip the hangover. At Love Kava you'll find tropical lighting, laid-back music, comfy seating and bartenders who actually know their plants. We host community nights, open mics, and pop-ups all month long.
          </p>
          <ul className="mt-6 space-y-2 text-foreground/90">
            <li>• Sober-friendly, all-ages until 9pm</li>
            <li>• LGBTQ+ welcoming community</li>
            <li>• Live music & local pop-ups</li>
            <li>• Reservations available for groups</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold">Reserve a Spot</Link>
            <a href="tel:+13055555555" className="rounded-full border border-border px-6 py-3 font-semibold">Call the Bar</a>
          </div>
        </div>
        <img src={community} alt="Friends enjoying Love Kava lounge" className="rounded-3xl shadow-luxe object-cover w-full h-[500px]" loading="lazy" width={1920} height={1080} />
      </section>

      <section className="bg-deep text-background py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <Eyebrow>The Menu</Eyebrow>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">Hand-crafted, daily fresh.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-8">
            {MENU.map((m) => (
              <div key={m.name} className="border-b border-background/15 pb-5">
                <div className="flex justify-between gap-4">
                  <h3 className="font-display font-semibold text-lg">{m.name}</h3>
                  <span className="text-gold font-semibold">{m.price}</span>
                </div>
                <p className="mt-1 text-sm text-background/70">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
