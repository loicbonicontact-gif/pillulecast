import type { ReactNode } from "react";
import Section from "./Section";
import PageHero from "./PageHero";

/** Gabarit des pages légales : titre + contenu en colonne lisible. */
export default function LegalLayout({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <Section className="pb-24">
        <div className="flex max-w-2xl flex-col gap-8 text-muted [&_h2]:text-xl [&_h2]:text-ink [&_p]:leading-relaxed">
          {children}
        </div>
      </Section>
    </>
  );
}
