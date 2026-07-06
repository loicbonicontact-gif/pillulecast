/**
 * Onde sonore animée — élément décoratif du hero.
 * Barres verticales qui oscillent, en dégradé corail → vert acide.
 * Purement décoratif (aria-hidden) ; respecte prefers-reduced-motion via le CSS global.
 */
const BARS = [
  0.0, 0.2, 0.05, 0.35, 0.15, 0.5, 0.25, 0.65, 0.4, 0.8, 0.55, 0.95, 0.7, 1.1,
  0.85, 1.25, 0.7, 1.1, 0.55, 0.95, 0.4, 0.8, 0.25, 0.65, 0.5, 0.35, 0.6, 0.2,
  0.45, 0.1, 0.3, 0.15,
];

export default function SoundWave({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`flex h-full w-full items-center justify-center gap-[6px] ${className ?? ""}`}
    >
      {BARS.map((seed, i) => {
        // Couleur interpolée le long de l'onde : corail au centre, acide aux bords.
        const mix = Math.round(Math.abs(i - BARS.length / 2) / (BARS.length / 2) * 100);
        return (
          <span
            key={i}
            className="w-[3px] shrink-0 rounded-pill sm:w-[4px]"
            style={{
              height: `${20 + seed * 55}%`,
              background: `color-mix(in srgb, var(--color-acid) ${mix}%, var(--color-rec))`,
              transformOrigin: "center",
              animation: "var(--animate-wave)",
              animationDelay: `${(i % 8) * 0.09}s`,
              animationDuration: `${1 + (i % 5) * 0.12}s`,
              opacity: 0.9,
            }}
          />
        );
      })}
    </div>
  );
}
