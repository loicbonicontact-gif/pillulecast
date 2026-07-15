import type { ReactNode } from "react";

/**
 * Marqueur « ● en direct » : point rouge qui pulse lentement (2,4 s),
 * désactivé en prefers-reduced-motion. Remplace l'ancien badge « ON AIR ».
 */
export function LiveDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block h-[7px] w-[7px] shrink-0 rounded-pill bg-live shadow-[0_0_0_4px_rgba(224,72,61,0.18)] [animation:var(--animate-live-pulse)] ${className ?? ""}`}
    />
  );
}

export default function LiveBadge({
  children,
  className,
  tone = "outline",
}: {
  children: ReactNode;
  className?: string;
  tone?: "outline" | "solid";
}) {
  const toneClass =
    tone === "solid"
      ? "bg-black/50 text-white"
      : "border border-border bg-white/5 text-ink";

  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-pill px-[13px] py-2 text-xs font-semibold uppercase tracking-[0.1em] ${toneClass} ${className ?? ""}`}
    >
      <LiveDot />
      {children}
    </span>
  );
}
