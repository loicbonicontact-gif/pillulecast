import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import PillButton from "@/components/PillButton";
import StudioPhoto from "@/components/StudioPhoto";
import Gelule from "@/components/Gelule";
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
        eyebrow="Le studio"
        title="Un lieu pensé pour la voix et l'image."
        subtitle="Traité acoustiquement, éclairé avec soin, équipé pour que vous n'ayez qu'à parler. On s'occupe de la technique."
      >
        <div className="mt-2">
          <PillButton href="/reserver" size="lg">
            Réserver une séance
          </PillButton>
        </div>
      </PageHero>

      {/* Galerie */}
      <Section className="pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StudioPhoto
            src={photos.studioRoom.src}
            alt={photos.studioRoom.alt}
            className="aspect-[4/3] sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:aspect-auto"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
            priority
          />
          <StudioPhoto
            src={photos.broadcastMic.src}
            alt={photos.broadcastMic.alt}
            className="aspect-[4/3]"
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
          <StudioPhoto
            src={photos.mixingDesk.src}
            alt={photos.mixingDesk.alt}
            className="aspect-[4/3]"
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
          <StudioPhoto
            src={photos.emptyVideoStudio.src}
            alt={photos.emptyVideoStudio.alt}
            className="aspect-[4/3]"
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
          <StudioPhoto
            src={photos.interview.src}
            alt={photos.interview.alt}
            className="aspect-[4/3]"
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <p className="mt-3 text-xs text-muted">
          [À REMPLACER : photos de démonstration — remplacez-les par vos vraies
          photos du studio.]
        </p>
      </Section>

      {/* Espaces & équipement */}
      <Section className="py-8">
        <h2 className="mb-8 text-3xl sm:text-4xl">Les espaces</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {studioSpaces.map((s) => (
            <article
              key={s.title}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-6"
            >
              <div className="flex items-center gap-3">
                <Gelule angle={35} className="h-8 w-4 shrink-0" />
                <h3 className="text-xl text-ink">{s.title}</h3>
              </div>
              <p className="text-sm text-muted">{s.desc}</p>
              <ul className="mt-auto flex flex-col gap-2 border-t border-border pt-4 text-sm text-muted">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span aria-hidden className="text-aqua">
                      —
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Ce qui est inclus */}
      <Section className="py-16">
        <div className="rounded-3xl border border-border bg-surface/50 p-6 sm:p-10">
          <h2 className="mb-6 text-3xl sm:text-4xl">Ce qui est inclus</h2>
          <ul className="flex flex-wrap gap-3">
            {studioIncludes.map((inc) => (
              <li
                key={inc}
                className="rounded-pill border border-border bg-bg/40 px-4 py-2 text-sm text-ink/85"
              >
                {inc}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-24">
        <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-border bg-surface px-6 py-14 text-center">
          <h2 className="max-w-xl text-3xl sm:text-4xl">
            Envie de voir le studio en vrai ?
          </h2>
          <p className="max-w-md text-muted">
            Réservez un créneau, ou écrivez-nous pour une visite.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PillButton href="/reserver" size="lg">
              Réserver une séance
            </PillButton>
            <PillButton href="/tarifs" variant="secondary" size="lg">
              Voir les tarifs
            </PillButton>
          </div>
        </div>
      </Section>
    </>
  );
}
