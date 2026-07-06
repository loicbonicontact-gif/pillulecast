import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import PillButton from "@/components/PillButton";
import Gelule from "@/components/Gelule";
import { pricing, addons, depositNote } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs du studio PilluleCast à Lyon : Capsule Audio et Capsule Vidéo, add-ons (montage, clips, live). Acompte de 30 % à la réservation.",
  alternates: { canonical: "/tarifs" },
};

export default function TarifsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tarifs"
        title="Des prix clairs, par format."
        subtitle="Pas de devis à rallonge pour une séance simple. Vous choisissez un format, vous savez ce que vous payez."
      />

      {/* Grille par format */}
      <Section className="pb-8">
        <div className="grid gap-6 md:grid-cols-2">
          {pricing.map((p) => (
            <article
              key={p.format}
              className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-8"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-pill blur-3xl ${
                  p.accent === "aqua" ? "bg-aqua/20" : "bg-lav/20"
                }`}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-3xl">{p.format}</h2>
                  <p className="mt-2 max-w-xs text-sm text-muted">{p.tagline}</p>
                </div>
                <Gelule
                  angle={35}
                  className="h-12 w-5 shrink-0"
                />
              </div>

              {/* Lignes de prix */}
              <ul className="relative flex flex-col divide-y divide-border border-y border-border">
                {p.rows.map((r) => (
                  <li
                    key={r.label}
                    className="flex items-center justify-between py-3"
                  >
                    <span className="text-muted">{r.label}</span>
                    <span className="text-lg font-medium text-ink">{r.price}</span>
                  </li>
                ))}
              </ul>

              {/* Inclus */}
              <ul className="relative flex flex-wrap gap-2">
                {p.includes.map((inc) => (
                  <li
                    key={inc}
                    className="rounded-pill border border-border bg-bg/40 px-3 py-1 text-xs text-ink/80"
                  >
                    {inc}
                  </li>
                ))}
              </ul>

              <div className="relative mt-auto pt-2">
                <PillButton
                  href="/reserver"
                  variant={p.accent === "aqua" ? "primary" : "lav"}
                  className="w-full sm:w-auto"
                >
                  Réserver ce format
                </PillButton>
              </div>
            </article>
          ))}
        </div>

        {/* Note acompte */}
        <p className="mt-6 rounded-2xl border border-border bg-surface/50 px-5 py-4 text-sm text-muted">
          <span className="font-medium text-ink">Acompte de 30 % à la réservation</span>
          , solde sur place. {depositNote}
        </p>
      </Section>

      {/* Add-ons */}
      <Section className="py-16">
        <h2 className="mb-8 text-3xl sm:text-4xl">Pour aller plus loin</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {addons.map((a) => (
            <article
              key={a.title}
              className="flex flex-col gap-3 rounded-3xl border border-border bg-surface p-6"
            >
              <h3 className="text-xl text-ink">{a.title}</h3>
              <p className="text-sm text-muted">{a.desc}</p>
              <span className="mt-auto pt-2 text-sm font-medium text-aqua">
                {a.price}
              </span>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-24">
        <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-border bg-surface px-6 py-14 text-center">
          <h2 className="max-w-xl text-3xl sm:text-4xl">
            Une question sur le format qui vous convient ?
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PillButton href="/reserver" size="lg">
              Réserver une séance
            </PillButton>
            <PillButton href="/contact" variant="secondary" size="lg">
              Nous contacter
            </PillButton>
          </div>
        </div>
      </Section>
    </>
  );
}
