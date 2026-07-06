/**
 * Gélule bicolore — le signe graphique récurrent de la marque.
 * Une capsule inclinée : une moitié aqua, une moitié lavande.
 * Décoratif par défaut (aria-hidden) ; passez `title` pour la rendre parlante.
 */
type GeluleProps = {
  className?: string;
  /** Angle d'inclinaison en degrés (défaut 45). */
  angle?: number;
  title?: string;
};

export default function Gelule({ className, angle = 45, title }: GeluleProps) {
  return (
    <svg
      viewBox="0 0 64 160"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <clipPath id="gelule-shape">
          <rect x="4" y="4" width="56" height="152" rx="28" />
        </clipPath>
      </defs>
      <g clipPath="url(#gelule-shape)">
        {/* Moitié haute — aqua */}
        <rect x="0" y="0" width="64" height="80" fill="var(--color-aqua)" />
        {/* Moitié basse — lavande */}
        <rect x="0" y="80" width="64" height="80" fill="var(--color-lav)" />
        {/* Reflet vertical discret */}
        <rect x="14" y="14" width="10" height="132" rx="5" fill="#fff" opacity="0.18" />
      </g>
      {/* Liseré */}
      <rect
        x="4"
        y="4"
        width="56"
        height="152"
        rx="28"
        fill="none"
        stroke="#000"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />
    </svg>
  );
}
