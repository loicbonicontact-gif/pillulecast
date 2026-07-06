import Gelule from "./Gelule";

/**
 * Emplacement photo balisé.
 * ⚠️ Placeholder volontaire : remplacez ce composant par <Image> (next/image)
 *    quand les vraies photos du studio seront disponibles. Le `label` documente
 *    ce que la photo doit montrer.
 */
export default function PhotoPlaceholder({
  label,
  className,
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Emplacement photo — ${label}`}
      className={`relative flex items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface-2 ${ratio} ${className ?? ""}`}
    >
      {/* Texture d'onde discrète */}
      <div className="wave-texture absolute inset-0 opacity-40" aria-hidden />
      <div className="glow-aqua absolute -left-10 -top-10 h-40 w-40" aria-hidden />
      <div className="glow-lav absolute -bottom-10 -right-10 h-40 w-40" aria-hidden />
      <div className="relative flex flex-col items-center gap-3 px-4 text-center">
        <Gelule angle={40} className="h-12 w-6 opacity-80" />
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          [À REMPLACER : {label}]
        </span>
      </div>
    </div>
  );
}
