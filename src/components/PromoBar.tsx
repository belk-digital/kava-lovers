import { useI18n } from "@/lib/i18n";
import { Sparkles } from "lucide-react";

export function PromoBar() {
  const { t } = useI18n();
  return (
    <div className="bg-gradient-deep text-background text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-2 text-center">
        <Sparkles className="h-3.5 w-3.5 text-gold shrink-0" />
        <p className="font-medium tracking-wide">{t("promo.bar")}</p>
      </div>
    </div>
  );
}
