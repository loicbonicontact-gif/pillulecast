import type { Metadata } from "next";
import { Check, Circle, Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";
import Section, { Eyebrow } from "@/components/Section";
import PageHero from "@/components/PageHero";
import PillButton from "@/components/PillButton";
import StudioPhoto from "@/components/StudioPhoto";
import PhIcon from "@/components/PhIcon";
import { photos } from "@/lib/site";
import { studioSpaces, studioIncludes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Le studio",
  description:
    "Le studio PilluleCast à Lyon : cabine audio traitée, plateau vidéo multi-caméra, régie et ingé son. Découvrez les espaces et l'équipement.",
  alternates: { canonical: "/studio" },
};

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Le lieu"
        title="Un studio pensé pour la voix et l'image."
        subtitle="Traité acoustiquement, éclairé avec soin, prêt à tourner. Trois espaces, un ingé son en régie, et tout le matériel pour que vous n'ayez qu'à parler."
      />

      {/* Galerie */}
      <Section className="pb-2 pt-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <StudioPhoto
            src={photos.studioRoom.src}
            alt={photos.studioRoom.alt}
            className="aspect-[4/5] sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:aspect-auto"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
            priority
          />
          <StudioPhoto
            src={photos.broadcastMic.src}
            alt={photos.broadcastMic.alt}
            className="aspect-[4/3]"
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
          <StudioPhoto
            src={photos.emptyVideoStudio.src}
            alt={photos.emptyVideoStudio.alt}
            className="aspect-[4/3]"
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
          <StudioPhoto
            src={photos.mixingDesk.src}
            alt={photos.mixingDesk.alt}
            className="aspect-[4/3]"
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
          <StudioPhoto
            src={photos.micCloseup.src}
            alt={photos.micCloseup.alt}
            className="aspect-[4/3]"
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <p className="mt-4 flex items-center gap-1.5 text-[13px] text-ink/48">
          <ImageIcon size={15} aria-hidden />
          Photos de démonstration — remplacez-les par vos vraies photos du studio.
        </p>
      </Section>

      {/* Espaces */}
      <Section className="py-14">
        <Eyebrow>Les espaces</Eyebrow>
        <h2 className="mt-4 mb-[30px] text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[34px]">
          Trois espaces, un même standard.
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {studioSpaces.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-surface p-[30px]">
              <PhIcon name={s.icon} size={26} className="text-accent-300" />
              <h3 className="mt-4 text-xl font-semibold leading-[1.15] text-ink">{s.title}</h3>
              <p className="mt-2.5 mb-[18px] text-[15px] leading-[1.6] text-ink/74">{s.desc}</p>
              <ul className="flex flex-col gap-2.5">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-sm leading-[1.4] text-ink/70">
                    <Circle size={14} className="mt-1 shrink-0 text-accent-300" aria-hidden />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Inclus */}
      <Section className="pb-[60px] pt-2">
        <div className="rounded-[18px] border border-border bg-surface p-9">
          <h2 className="mb-1.5 text-2xl font-semibold leading-[1.15] text-ink">
            Inclus dans toute séance
          </h2>
          <p className="mb-[22px] text-[15px] leading-[1.6] text-ink/66">
            Pas de suppléments cachés. Tout est prêt quand vous arrivez.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {studioIncludes.map((inc) => {
              const isPlaceholder = inc.startsWith("[À REMPLACER");
              return (
                <span
                  key={inc}
                  className={`rounded-pill px-3.5 py-2 text-sm ${
                    isPlaceholder
                      ? "border border-dashed border-border text-ink/55"
                      : "border border-border text-ink/85"
                  }`}
                >
                  {!isPlaceholder && (
                    <Check size={14} className="mr-1.5 inline text-accent-300" aria-hidden />
                  )}
                  {inc}
                </span>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-[72px]">
        <div className="relative flex flex-col items-center justify-between gap-7 overflow-hidden rounded-[20px] border border-border bg-[radial-gradient(700px_340px_at_90%_-60%,var(--color-accent-800)_0%,transparent_62%),var(--color-surface)] p-9 sm:flex-row sm:p-12">
          <div>
            <h2 className="text-[26px] font-semibold leading-[1.14] tracking-[-0.02em] text-ink sm:text-[30px]">
              Envie de voir le studio en vrai ?
            </h2>
            <p className="mt-3 max-w-[46ch] text-[15.5px] leading-[1.6] text-ink/74">
              Réservez une séance ou passez nous voir. On vous fait le tour.
            </p>
          </div>
          <div className="flex gap-3.5">
            <PillButton href="/reserver" size="lg">
              Réserver
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
