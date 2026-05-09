import { Globe } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";

export function LanguageSwitcher({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { lang, setLang } = useI18n();
  const base =
    tone === "dark"
      ? "bg-background/10 border-background/20 text-background"
      : "bg-secondary/60 border-border text-foreground";
  return (
    <div className={`inline-flex items-center gap-1 rounded-full border ${base} backdrop-blur p-1 text-xs font-semibold`}>
      <Globe className="h-3.5 w-3.5 mx-1.5 opacity-70" />
      {(["en", "es"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1 rounded-full transition uppercase tracking-wider ${
            lang === l ? "bg-gold text-deep shadow-gold" : "opacity-70 hover:opacity-100"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
