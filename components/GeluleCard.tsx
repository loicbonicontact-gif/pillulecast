import type { ReactNode } from "react";
import Gelule from "./Gelule";

/**
 * Carte-gélule : surface arrondie avec une gélule bicolore en signe,
 * un accent lumineux au hover. Sert aux formats, aux offres, aux features.
 */
export default function GeluleCard({
  eyebrow,
  title,
  children,
  footer,
  accent = "aqua",
  className,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  footer?: ReactNode;
  accent?: "aqua" | "lav";
  className?: string;
}) {
  return (
    <article
      className={`group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-ink/25 sm:p-8 ${className ?? ""}`}
    >
      {/* Halo au hover */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-pill opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
          accent === "aqua" ? "bg-aqua/30" : "bg-lav/25"
        }`}
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          {eyebrow ? (
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              {eyebrow}
            </span>
          ) : null}
          <h3 className="text-2xl text-ink">{title}</h3>
        </div>
        <Gelule angle={35} className="h-11 w-5 shrink-0 opacity-90" />
      </div>

      {children ? <div className="text-muted">{children}</div> : null}

      {footer ? <div className="mt-auto pt-2">{footer}</div> : null}
    </article>
  );
}
