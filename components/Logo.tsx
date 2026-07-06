import Gelule from "./Gelule";

/**
 * Wordmark « PilluleCast » en typo grotesque.
 * Une gélule bicolore stylisée remplace le premier « l » de « Pillule ».
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
  const primary = tone === "onDark" ? "text-ink" : "text-bg";
  const secondary = tone === "onDark" ? "text-muted" : "text-border";

  return (
    <span
      className={`inline-flex items-baseline font-[family-name:var(--font-display)] font-bold tracking-tight ${className ?? "text-2xl"}`}
      aria-label="PilluleCast"
    >
      <span className={primary}>Pi</span>
      {/* La gélule tient lieu de « l » */}
      <Gelule
        angle={22}
        className="mx-[0.04em] h-[0.92em] w-[0.4em] self-center drop-shadow-[0_0_6px_color-mix(in_srgb,var(--color-lav)_45%,transparent)]"
      />
      <span className={primary}>lule</span>
      <span className={secondary}>Cast</span>
    </span>
  );
}
