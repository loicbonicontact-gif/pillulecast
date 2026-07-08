import type { CSSProperties, ReactNode } from "react";

/**
 * Défilement horizontal en boucle (marquee). Le contenu est dupliqué pour une
 * boucle sans couture (l'animation translate de 0 à -50%). Pause au survol.
 * Respecte prefers-reduced-motion (statique) via le CSS global.
 */
export default function Marquee({
  items,
  duration = 30,
  gap = "3rem",
  className,
  ariaLabel,
}: {
  items: ReactNode[];
  duration?: number;
  gap?: string;
  className?: string;
  ariaLabel?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`marquee overflow-hidden ${className ?? ""}`}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
    >
      <div
        className="marquee-track items-center"
        style={{ gap }}
        aria-hidden={ariaLabel ? true : undefined}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
