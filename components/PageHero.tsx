import type { ReactNode } from "react";
import Section, { Eyebrow } from "./Section";

/** En-tête de page intérieure : eyebrow + grand titre + sous-titre optionnel. */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Section className="relative pt-16 pb-10 sm:pt-24 sm:pb-14">
      <div
        aria-hidden
        className="glow-aqua pointer-events-none absolute -top-10 left-0 h-64 w-64"
      />
      <div className="relative flex flex-col gap-5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-5xl font-bold sm:text-6xl">{title}</h1>
        {subtitle ? (
          <p className="max-w-xl text-lg text-muted">{subtitle}</p>
        ) : null}
        {children}
      </div>
    </Section>
  );
}
