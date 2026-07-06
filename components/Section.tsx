import type { ReactNode } from "react";

/** Conteneur de section avec largeur max et respiration verticale généreuse. */
export default function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 sm:px-8 ${className ?? ""}`}>
      {children}
    </section>
  );
}

/** Petit intitulé en capitales espacées, façon « eyebrow ». */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
      {children}
    </span>
  );
}
