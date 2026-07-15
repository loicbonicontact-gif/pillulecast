import type { Metadata } from "next";
import { Microphone, SlidersHorizontal, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import CalEmbed from "@/components/CalEmbed";
import FormatSelect from "@/components/FormatSelect";
import { depositNote } from "@/lib/content";

export const metadata: Metadata = {
  title: "Réserver une séance",
  description:
    "Réservez votre séance au studio PilluleCast à Lyon : choisissez un créneau, réglez l'acompte de 30 %, c'est confirmé.",
  alternates: { canonical: "/reserver" },
};

const recap = [
  { Icon: Microphone, title: "Ingé son en régie", desc: "Il pilote la prise, vous parlez." },
  {
    Icon: SlidersHorizontal,
    title: "Installation & réglages",
    desc: "Tout est prêt à votre arrivée.",
  },
  {
    Icon: DownloadSimple,
    title: "Fichiers le jour même",
    desc: "Vous repartez avec vos rushes.",
  },
];

export default function ReserverPage() {
  return (
    <>
      <PageHero
        eyebrow="Réserver"
        title="Bloquez votre créneau."
        subtitle="Choisissez un format, une date, réglez l'acompte de 30 % et c'est confirmé. Le solde se règle sur place le jour de la séance."
        size="md"
      />

      <Section className="grid grid-cols-1 gap-8 py-11 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        {/* Gauche : format + calendrier */}
        <div>
          <p className="mb-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-ink/55">
            1 · Choisissez votre format
          </p>
          <FormatSelect />

          <p className="mb-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-ink/55">
            2 · Choisissez une date &amp; une heure
          </p>
          <CalEmbed />
        </div>

        {/* Droite : récapitulatif */}
        <aside className="sticky top-[88px] rounded-[18px] border border-border bg-surface p-[30px]">
          <h2 className="mb-1 text-xl font-semibold text-ink">Récapitulatif</h2>
          <p className="mb-[22px] text-sm text-ink/62">Ce qui vous attend le jour J.</p>

          <div className="flex flex-col gap-4">
            {recap.map(({ Icon, title, desc }) => (
              <div key={title} className="flex gap-3">
                <Icon size={19} className="mt-0.5 shrink-0 text-accent-300" aria-hidden />
                <div>
                  <p className="text-[15px] font-medium text-ink">{title}</p>
                  <p className="mt-1 text-[13.5px] leading-[1.5] text-ink/62">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-6 border-border" />

          <div className="mb-1.5 flex items-baseline justify-between">
            <span className="text-sm text-ink/70">Acompte à la réservation</span>
            <span className="text-[17px] font-semibold text-ink">30 %</span>
          </div>
          <p className="text-[13px] leading-[1.5] text-ink/55">{depositNote}</p>
        </aside>
      </Section>
    </>
  );
}
