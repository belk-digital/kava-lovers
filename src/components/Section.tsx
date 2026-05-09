import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-deep text-background">
      {image && (
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="eager" />
      )}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 text-center">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-5 text-4xl sm:text-6xl font-display font-bold leading-tight">{title}</h1>
        {subtitle && <p className="mt-5 mx-auto max-w-2xl text-lg text-background/80">{subtitle}</p>}
      </div>
    </section>
  );
}
