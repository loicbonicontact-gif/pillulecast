/** Micro-badge « ● ON AIR » : point aqua qui pulse, forme pill. */
export default function OnAirBadge({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-pill border border-border bg-surface/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted backdrop-blur ${className ?? ""}`}
    >
      <span
        aria-hidden
        className="h-2 w-2 rounded-pill bg-aqua [animation:var(--animate-air-pulse)] shadow-[0_0_8px_var(--color-aqua)]"
      />
      On Air
    </span>
  );
}
