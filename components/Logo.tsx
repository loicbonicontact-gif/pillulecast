import Gelule from "./Gelule";

/**
 * Wordmark « PilluleCast » : petite gélule (barre verticale dégradée accent)
 * puis le nom, en Inter 700.
 *
 * `tone` :
 *  - "onDark" (défaut) : texte clair, pour les fonds sombres du site.
 *  - "onLight" : texte foncé, pour un éventuel usage sur fond clair.
 */
export default function Logo({
  className,
  tone = "onDark",
}: {
  className?: string;
  tone?: "onDark" | "onLight";
}) {
  const textTone = tone === "onDark" ? "text-ink" : "text-bg";

  return (
    <span
      className={`inline-flex items-center gap-[11px] font-bold tracking-tight ${className ?? "text-2xl"}`}
      aria-label="PilluleCast"
    >
      <Gelule className="h-6 w-[9px]" />
      <span className={textTone}>PilluleCast</span>
    </span>
  );
}
