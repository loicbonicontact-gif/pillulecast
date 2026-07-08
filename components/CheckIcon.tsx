/** Coche vectorielle (remplace le glyphe « ✓ » pour un rendu net et cohérent). */
export default function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden
      focusable="false"
    >
      <path
        d="M4 10.5l3.8 3.8L16 5.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
