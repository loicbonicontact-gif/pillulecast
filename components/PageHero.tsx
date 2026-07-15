import type { ReactNode } from "react";
import Section, { Eyebrow } from "./Section";

/** En-tête de page intérieure : eyebrow + grand titre + sous-titre optionnel. */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  size = "lg",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  /** lg (56px, défaut) ou md (52px, pages fonctionnelles Réserver/Contact). */
  size?: "lg" | "md";
}) {
  return (
    <section className="border-b border-border bg-[radial-gradient(1000px_560px_at_100%_-160px,var(--color-accent-900)_0%,transparent_58%)]">
      <Section className="py-16 sm:py-[66px] sm:pb-14">
        <div className="flex flex-col gap-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1
            className={`max-w-2xl font-bold tracking-[-0.03em] text-ink ${
              size === "lg" ? "text-[42px] sm:text-[56px]" : "text-[38px] sm:text-[52px]"
            }`}
          >
            {title}
          </h1>
          {subtitle ? (
            <p className="max-w-xl text-lg leading-relaxed text-ink/76 sm:max-w-2xl">
              {subtitle}
            </p>
          ) : null}
          {children}
        </div>
      </Section>
    </section>
  );
}
