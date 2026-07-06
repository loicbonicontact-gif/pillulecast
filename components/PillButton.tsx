import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Bouton « pill » (arrondi complet) — signature de la marque. */
type Variant = "primary" | "secondary" | "acid";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-medium tracking-tight transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  // Corail « REC » — action principale
  primary:
    "bg-rec text-bg hover:brightness-110 hover:shadow-[0_8px_30px_-8px_var(--color-rec)] active:scale-[0.98]",
  // Contour discret — action secondaire
  secondary:
    "border border-border bg-surface/60 text-ink hover:border-ink/40 hover:bg-surface active:scale-[0.98]",
  // Vert acide — accent alternatif
  acid: "bg-acid text-bg hover:brightness-105 hover:shadow-[0_8px_30px_-8px_var(--color-acid)] active:scale-[0.98]",
};

type PillButtonProps = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export default function PillButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: PillButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className ?? ""}`;
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
