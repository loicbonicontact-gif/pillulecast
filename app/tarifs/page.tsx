import type { Metadata } from "next";
import { Info } from "@phosphor-icons/react/dist/ssr";
import Section, { Eyebrow } from "@/components/Section";
import PageHero from "@/components/PageHero";
import PillButton from "@/components/PillButton";
import PhIcon from "@/components/PhIcon";
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
        title="Des tarifs simples, sans surprise."
        subtitle="À l'heure, en demi-journée ou à la journée. Ingé son toujours inclus. Aucun prix n'est définitif tant que vous ne les avez pas validés."
      />

      {/* Grille par format */}
      <Section className="pb-5 pt-[52px]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {pricing.map((p) => (
            <div key={p.format} className="flex flex-col rounded-[18px] border border-border bg-surface p-[34px]">
              <div className="flex items-center gap-3">
                <PhIcon name={p.icon} size={24} className="text-accent-300" />
                <h2 className="text-2xl font-semibold text-ink">{p.format}</h2>
              </div>
              <p className="mt-3 mb-[22px] text-[14.5px] leading-[1.55] text-ink/70">{p.tagline}</p>

              <div className="flex flex-col">
                {p.rows.map((r, i) => (
                  <div
                    key={r.label}
                    className={`flex items-baseline justify-between py-[15px] ${
                      i < p.rows.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="text-[15px] text-ink/80">{r.label}</span>
                    <span className="text-[19px] font-semibold text-ink">{r.price}</span>
                  </div>
                ))}
              </div>

              <div className="my-[22px] flex flex-wrap gap-2">
                {p.includes.map((inc) => (
                  <span key={inc} className="rounded-pill border border-border px-3 py-1.5 text-xs text-ink/80">
                    {inc}
                  </span>
                ))}
              </div>

              <PillButton href="/reserver" className="mt-auto w-full justify-center">
                Réserver une {p.format.toLowerCase()}
              </PillButton>
            </div>
          ))}
        </div>

        <p className="mt-[18px] flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-ink/55">
          <Info size={16} className="mt-px shrink-0 text-accent-300" aria-hidden />
          {depositNote}
        </p>
      </Section>

      {/* Add-ons */}
      <Section className="py-[52px]">
        <Eyebrow>Prestations complémentaires</Eyebrow>
        <h2 className="mt-4 mb-7 text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[32px]">
          Pour aller plus loin.
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {addons.map((a) => (
            <div key={a.title} className="rounded-2xl border border-border bg-surface p-7">
              <PhIcon name={a.icon} size={24} className="text-accent-300" />
              <h3 className="mt-3.5 mb-2 text-[19px] font-semibold leading-[1.15] text-ink">{a.title}</h3>
              <p className="mb-4 text-[14.5px] leading-[1.6] text-ink/72">{a.desc}</p>
              <span className="text-[15px] font-semibold text-accent-300">{a.price}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-[72px]">
        <div className="relative flex flex-col items-center justify-between gap-7 overflow-hidden rounded-[20px] border border-border bg-[radial-gradient(700px_340px_at_90%_-60%,var(--color-accent-800)_0%,transparent_62%),var(--color-surface)] p-9 sm:flex-row sm:p-12">
          <div>
            <h2 className="text-[26px] font-semibold leading-[1.14] tracking-[-0.02em] text-ink sm:text-[30px]">
              Un projet particulier ?
            </h2>
            <p className="mt-3 max-w-[46ch] text-[15.5px] leading-[1.6] text-ink/74">
              Devis sur mesure pour les séries, les formats longs ou les captations. On en discute.
            </p>
          </div>
          <div className="flex gap-3.5">
            <PillButton href="/reserver" size="lg">
              Réserver
            </PillButton>
            <PillButton href="/contact" variant="secondary" size="lg">
              Demander un devis
            </PillButton>
          </div>
        </div>
      </Section>
    </>
  );
}
