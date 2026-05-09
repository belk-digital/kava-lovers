import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const WA_NUMBER = "13055555555"; // E.164 without +

function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function WhatsAppFloat() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setPulse(false), 8000);
    return () => clearTimeout(id);
  }, []);

  const quick = [
    { key: "wa.q.reserve" },
    { key: "wa.q.delivery" },
    { key: "wa.q.product" },
    { key: "wa.q.hello" },
  ];

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 z-[60] w-[min(22rem,calc(100vw-2rem))] animate-[fade-in_0.25s_ease-out] origin-bottom-right">
          <div className="rounded-3xl overflow-hidden shadow-luxe border border-border bg-card">
            <div className="bg-gradient-deep text-background px-5 py-4 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-display font-semibold">{t("wa.title")}</p>
                  <p className="text-xs text-background/70">{t("wa.subtitle")}</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-background/70 hover:text-background">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-3 space-y-2">
              {quick.map((q) => (
                <a
                  key={q.key}
                  href={waLink(t(q.key))}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-background hover:bg-secondary/60 px-4 py-3 text-sm font-medium transition"
                >
                  <span className="text-foreground/90">{t(q.key)}</span>
                  <Send className="h-4 w-4 text-[#25D366] opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="WhatsApp chat"
        className="fixed bottom-24 lg:bottom-6 right-4 z-[60] h-14 w-14 rounded-full bg-[#25D366] text-white shadow-luxe flex items-center justify-center hover:scale-105 transition"
      >
        {pulse && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
        )}
        <span className="relative">
          {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </span>
      </button>
    </>
  );
}
