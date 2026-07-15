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
    <section id={id} className={`mx-auto max-w-6xl px-5 sm:px-10 ${className ?? ""}`}>
      {children}
    </section>
  );
}

/** Intitulé de section : filet + libellé en capitales espacées, couleur accent. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.09em] text-accent">
      <span aria-hidden className="h-px w-[34px] bg-accent" />
      {children}
    </span>
  );
}
