/**
 * Signature de marque, sobre : petite barre verticale arrondie en dégradé
 * accent (accent-300 → accent-600). Remplace l'ancienne gélule bicolore
 * tape-à-l'œil — le concept reste (la « gélule »), l'exécution est discrète.
 * Décorative par défaut (aria-hidden).
 */
export default function Gelule({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block rounded-pill bg-[linear-gradient(180deg,var(--color-accent-300),var(--color-accent-600))] ${className ?? "h-6 w-[9px]"}`}
    />
  );
}
