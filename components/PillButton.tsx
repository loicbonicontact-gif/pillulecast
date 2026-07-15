import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/**
 * Bouton pill contourné (bordure sur fond transparent) — jamais plein.
 * `primary` : bordure + texte accent, tint accent au survol/pressé.
 * `secondary` : bordure neutre, texte clair, tint surface au survol.
 */
type Variant = "primary" | "secondary";
type Size = "md" | "lg";

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-pill border font-medium tracking-tight transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-[13px] text-[15px]",
};

const variants: Record<Variant, string> = {
  primary:
    "border-accent text-accent-300 bg-transparent hover:bg-accent/12 active:bg-accent/22",
  secondary:
    "border-border text-ink bg-transparent hover:bg-ink/6 active:bg-ink/12",
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
