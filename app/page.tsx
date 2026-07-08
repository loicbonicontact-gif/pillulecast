import Section, { Eyebrow } from "@/components/Section";
import PillButton from "@/components/PillButton";
import OnAirBadge from "@/components/OnAirBadge";
import GeluleCard from "@/components/GeluleCard";
import StudioPhoto from "@/components/StudioPhoto";
import HeroVideo from "@/components/HeroVideo";
import PodcastClip from "@/components/PodcastClip";
import ClipTile from "@/components/ClipTile";
import Gelule from "@/components/Gelule";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import Counter from "@/components/Counter";
import { site, photos, videos } from "@/lib/site";

/* Chiffres clés — PLACEHOLDERS à remplacer par vos vrais chiffres. */
const stats = [
  { to: 150, suffix: "+", label: "séances enregistrées" },
  { to: 400, suffix: "+", label: "épisodes produits" },
  { to: 900, suffix: "+", label: "heures de studio" },
  { to: 60, suffix: "+", label: "créateurs accompagnés" },
];

/* Données de contenu — placeholders réalistes, à remplacer. */
const clients = [
  "[À REMPLACER : client 1]",
  "[À REMPLACER : client 2]",
  "[À REMPLACER : client 3]",
  "[À REMPLACER : client 4]",
];

const formats = [
  {
    eyebrow: "Format audio",
    title: "Capsule Audio",
    accent: "aqua" as const,
    desc: "Enregistrement audio jusqu'à 4 micros, ingé son inclus. Votre voix, propre et prête à publier.",
    points: ["Jusqu'à 4 micros", "Ingé son inclus", "Fichiers livrés le jour même"],
    price: "dès ~55 €/h",
  },
  {
    eyebrow: "Format vidéo",
    title: "Capsule Vidéo",
    accent: "lav" as const,
    desc: "Multi-caméra jusqu'à 3 invités, régie et ingé son. De l'entretien filmé au format réseaux.",
    points: ["Multi-caméra", "Jusqu'à 3 invités", "Régie + ingé son"],
    price: "dès ~110 €/h",
  },
];

const testimonials = [
  {
    quote: "[À REMPLACER : témoignage client — 1 à 2 phrases, concret et sincère.]",
    author: "[À REMPLACER : nom]",
    role: "[À REMPLACER : podcast / entreprise]",
  },
  {
    quote: "[À REMPLACER : témoignage client — 1 à 2 phrases, concret et sincère.]",
    author: "[À REMPLACER : nom]",
    role: "[À REMPLACER : podcast / entreprise]",
  },
];

const faq = [
  {
    q: "Je débute, vous m'accompagnez ?",
    a: "Oui. On règle le son, on cadre, on vous guide pendant l'enregistrement. Vous venez avec vos idées, on s'occupe du reste.",
  },
  {
    q: "Qu'est-ce que je repars avec ?",
    a: "[À REMPLACER : livrables précis, ex. fichiers audio bruts + version montée, clips verticaux, rushes vidéo.]",
  },
  {
    q: "Comment se passe la réservation ?",
    a: "Vous choisissez un créneau en ligne, vous réglez un acompte de 30 % pour le bloquer, et c'est confirmé. Le solde se règle sur place.",
  },
  {
    q: "Où se trouve le studio ?",
    a: `À ${site.city}. ${site.address}`,
  },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden py-20">
        {/* Vidéo de fond (chaîne PilluleCast), assombrie */}
        <HeroVideo />

        <Section className="relative z-10">
          <div className="flex flex-col items-start gap-8">
            <OnAirBadge />

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] sm:text-7xl">
              Studio podcast &amp; vidéo
              <br />à <span className="text-aqua">{site.city}</span>.
            </h1>

            <p className="max-w-xl text-lg text-muted sm:text-xl">
              {site.baseline}
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
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* BANDEAU CONFIANCE                                                */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-10">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted">
          Ils sont passés au studio
        </p>
        <Marquee
          ariaLabel="Clients passés au studio"
          duration={38}
          items={[...clients, ...clients, ...clients].map((c, i) => (
            <span
              key={i}
              className="flex h-14 items-center whitespace-nowrap rounded-2xl border border-border bg-surface/40 px-6 text-sm text-muted"
            >
              {c}
            </span>
          ))}
        />
      </Section>

      {/* Ruban vidéo défilant (extraits de podcasts) */}
      <div className="my-6 border-y border-border/60 bg-surface/20 py-6">
        <Marquee
          ariaLabel="Extraits de podcasts qui défilent"
          duration={44}
          gap="1.5rem"
          items={videos.excerpts.map((v) => (
            <ClipTile key={v.id} id={v.id} title={v.title} start={v.start} />
          ))}
        />
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* CE QU'ON FAIT                                                    */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-20">
        <div className="mb-10 flex flex-col gap-3">
          <Eyebrow>Ce qu'on fait</Eyebrow>
          <h2 className="max-w-2xl text-4xl sm:text-5xl">
            Deux formats, une même exigence.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {formats.map((f, i) => (
            <Reveal key={f.title} delay={i * 90} className="h-full">
            <GeluleCard
              className="h-full"
              eyebrow={f.eyebrow}
              title={f.title}
              accent={f.accent}
              footer={
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-ink">{f.price}</span>
                  <PillButton href="/reserver" variant="secondary">
                    Réserver
                  </PillButton>
                </div>
              }
            >
              <p className="mb-4">{f.desc}</p>
              <ul className="flex flex-wrap gap-2">
                {f.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-pill border border-border bg-bg/40 px-3 py-1 text-xs text-ink/80"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </GeluleCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* CHIFFRES CLÉS                                                    */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-16">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/50 px-6 py-12 sm:px-12">
          <div className="glow-lav pointer-events-none absolute -right-16 -top-16 h-56 w-56" aria-hidden />
          <dl className="relative grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <dt className="order-2 text-sm text-muted">{s.label}</dt>
                <dd className="order-1 font-[family-name:var(--font-display)] text-4xl font-bold text-aqua sm:text-5xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
          <p className="relative mt-8 text-center text-xs text-muted">
            [À REMPLACER : vos chiffres réels]
          </p>
        </Reveal>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* APERÇU STUDIO                                                    */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Eyebrow>Le lieu</Eyebrow>
            <h2 className="text-4xl sm:text-5xl">
              Un studio pensé pour la voix et l'image.
            </h2>
            <p className="max-w-md text-muted">
              [À REMPLACER : une phrase sur l'ambiance du studio — insonorisation,
              lumière, confort, matériel.] Traité acoustiquement, éclairé avec soin,
              prêt à tourner.
            </p>
            <PillButton href="/studio" variant="secondary" className="w-fit">
              Découvrir le studio
            </PillButton>
          </div>

          <Reveal className="grid grid-cols-2 gap-4">
            <StudioPhoto
              src={photos.studioRoom.src}
              alt={photos.studioRoom.alt}
              className="col-span-2 aspect-[16/9]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <StudioPhoto
              src={photos.broadcastMic.src}
              alt={photos.broadcastMic.alt}
              className="aspect-[4/3]"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <StudioPhoto
              src={photos.mixingDesk.src}
              alt={photos.mixingDesk.alt}
              className="aspect-[4/3]"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* EXTRAITS DE PODCASTS                                             */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-20">
        <div className="mb-10 flex flex-col gap-3">
          <Eyebrow>Nos réalisations</Eyebrow>
          <h2 className="max-w-2xl text-4xl sm:text-5xl">
            Des extraits enregistrés ici.
          </h2>
          <p className="max-w-xl text-muted">
            Un aperçu des podcasts et vidéos qu&apos;on a tournés au studio.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {videos.excerpts.map((v, i) => (
            <Reveal key={v.id} delay={i * 90}>
              <PodcastClip id={v.id} title={v.title} start={v.start} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* TÉMOIGNAGES                                                      */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-20">
        <div className="mb-10 flex flex-col gap-3">
          <Eyebrow>On en parle</Eyebrow>
          <h2 className="text-4xl sm:text-5xl">Ce qu'ils en disent.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-surface p-8">
                <Gelule angle={35} className="h-9 w-4 opacity-80" />
                <blockquote className="text-lg text-ink">{t.quote}</blockquote>
                <figcaption className="text-sm text-muted">
                  <span className="text-ink">{t.author}</span> — {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* FAQ                                                              */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-3">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-4xl sm:text-5xl">Les questions qui reviennent.</h2>
          </div>
          <Reveal className="flex flex-col divide-y divide-border border-y border-border">
            {faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg text-ink marker:content-['']">
                  {item.q}
                  <span
                    aria-hidden
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-pill border border-border text-muted transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-xl text-muted">{item.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA FINAL                                                        */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-20">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-border bg-surface px-6 py-16 text-center sm:px-16">
          <div className="glow-aqua pointer-events-none absolute -left-20 top-0 h-64 w-64" aria-hidden />
          <div className="glow-lav pointer-events-none absolute -right-20 bottom-0 h-64 w-64" aria-hidden />
          <div className="relative flex flex-col items-center gap-6">
            <OnAirBadge />
            <h2 className="max-w-2xl text-4xl sm:text-5xl">
              Prêt à enregistrer votre première capsule ?
            </h2>
            <p className="max-w-lg text-muted">
              Choisissez un créneau, réglez l'acompte, on s'occupe du son et de
              l'image. Vous repartez avec vos fichiers.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <PillButton href="/reserver" size="lg">
                Réserver une séance
              </PillButton>
              <PillButton href="/contact" variant="secondary" size="lg">
                Nous contacter
              </PillButton>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
