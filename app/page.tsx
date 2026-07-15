import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Play,
  ArrowRight,
  Quotes,
  Plus,
} from "@phosphor-icons/react/dist/ssr";
import Section, { Eyebrow } from "@/components/Section";
import PillButton from "@/components/PillButton";
import LiveBadge from "@/components/LiveBadge";
import PhIcon from "@/components/PhIcon";
import { site, videos, youtubeThumbnail } from "@/lib/site";
import { pricing } from "@/lib/content";

/* Chiffres clés — PLACEHOLDERS à remplacer par vos vrais chiffres. */
const stats = [
  { value: "150+", label: "séances enregistrées" },
  { value: "400+", label: "épisodes produits" },
  { value: "900+", label: "heures de studio" },
  { value: "60+", label: "créateurs accompagnés" },
];

/* Formats — copy homepage ; les prix viennent de lib/content.ts (source unique). */
const formats = [
  {
    title: "Capsule Audio",
    icon: "microphone-stage" as const,
    desc: "Jusqu'à 4 micros, ingé son inclus. Votre voix, propre et prête à publier.",
    tags: ["Jusqu'à 4 micros", "Ingé son inclus", "Fichiers le jour même"],
  },
  {
    title: "Capsule Vidéo",
    icon: "video-camera" as const,
    desc: "Multi-caméra, jusqu'à 3 invités, régie et ingé son. De l'entretien filmé au format réseaux.",
    tags: ["Multi-caméra", "Jusqu'à 3 invités", "Régie + ingé son"],
  },
];

const process = [
  {
    n: "01",
    title: "Réservez un créneau",
    desc: "En ligne, en deux minutes. Un acompte de 30 % bloque la date.",
  },
  {
    n: "02",
    title: "Enregistrez",
    desc: "On installe, on règle le son, on cadre. Vous vous concentrez sur le contenu.",
  },
  {
    n: "03",
    title: "Repartez avec vos fichiers",
    desc: "Livrés le jour même. Montage et clips réseaux en option.",
  },
];

const testimonials = [
  {
    quote: "[À remplacer : témoignage client — 1 à 2 phrases, concret et sincère.]",
    author: "[Nom]",
    role: "[Podcast / entreprise]",
  },
  {
    quote: "[À remplacer : témoignage client — 1 à 2 phrases, concret et sincère.]",
    author: "[Nom]",
    role: "[Podcast / entreprise]",
  },
];

const faq = [
  {
    q: "Je débute, vous m'accompagnez ?",
    a: "Oui. On règle le son, on cadre, on vous guide pendant l'enregistrement. Vous venez avec vos idées, on s'occupe du reste.",
  },
  {
    q: "Qu'est-ce que je repars avec ?",
    a: "[À remplacer : livrables précis, ex. fichiers audio bruts + version montée, clips verticaux, rushes vidéo.]",
  },
  {
    q: "Comment se passe la réservation ?",
    a: "Vous choisissez un créneau en ligne, vous réglez un acompte de 30 % pour le bloquer, et c'est confirmé. Le solde se règle sur place.",
  },
  {
    q: "Où se trouve le studio ?",
    a: `À ${site.city}. [À remplacer : adresse exacte du studio.]`,
  },
];

function priceFor(title: string) {
  return pricing.find((p) => p.format === title)?.rows[0].price.replace("~", "") ?? "";
}

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[radial-gradient(1100px_640px_at_100%_-140px,var(--color-accent-900)_0%,transparent_58%),radial-gradient(900px_700px_at_-10%_120%,rgba(0,0,0,0.3)_0%,transparent_55%),var(--color-bg)]">
        <Section className="grid grid-cols-1 items-center gap-12 py-16 sm:py-[76px] lg:grid-cols-[1fr_1.02fr] lg:gap-14">
          <div>
            <LiveBadge className="mb-7">En direct du studio · {site.city}</LiveBadge>

            <h1 className="max-w-xl text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[56px] sm:leading-[1.02] lg:text-[64px]">
              Le studio où votre voix passe à l&apos;antenne.
            </h1>

            <p className="mt-6 max-w-[47ch] text-[17px] leading-[1.62] text-ink/76 sm:text-[18.5px]">
              {site.baseline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <PillButton href="/reserver" size="lg">
                Réserver une séance
              </PillButton>
              <PillButton href="/studio" variant="secondary" size="lg">
                Découvrir le studio
              </PillButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-7">
              {["Ingé son inclus", "Fichiers le jour même", "Acompte 30 %"].map((f) => (
                <span key={f} className="inline-flex items-center gap-2.5 text-sm text-ink/64">
                  <CheckCircle size={17} className="text-accent-300" aria-hidden />
                  {f}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/reserver"
            className="clipcard relative block overflow-hidden rounded-2xl border border-border shadow-2xl"
            style={{ aspectRatio: "16 / 10" }}
          >
            <div className="thumb h-full" style={{ aspectRatio: "auto" }}>
              <Image
                src={youtubeThumbnail(videos.banner.id, "max")}
                alt="Aperçu de la chaîne PilluleCast"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/62" />
            <LiveBadge tone="solid" className="absolute left-4 top-4">
              Chaîne PilluleCast
            </LiveBadge>
            <span className="absolute left-1/2 top-1/2 flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill border border-white/25 bg-black/62 text-white backdrop-blur-sm">
              <Play size={20} weight="fill" aria-hidden />
            </span>
            <span className="absolute bottom-4 left-[18px] max-w-[74%] text-[15px] font-semibold text-white">
              Le dernier épisode, tourné ici.
            </span>
          </Link>
        </Section>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* RAIL « À L'AFFICHE »                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-border">
        <Section className="pb-5 pt-14">
          <div className="mb-[26px] flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Enregistré ici</Eyebrow>
              <h2 className="mt-3.5 text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[34px]">
                À l&apos;affiche
              </h2>
            </div>
            <Link
              href="/studio"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-300"
            >
              Toutes les réalisations <ArrowRight size={15} aria-hidden />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-[18px] lg:grid-cols-4">
            {videos.excerpts.map((v) => (
              <Link
                key={v.id}
                href="/reserver"
                className="clipcard block overflow-hidden rounded-2xl border border-border"
              >
                <div className="thumb relative">
                  <Image
                    src={youtubeThumbnail(v.id)}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <span className="absolute left-1/2 top-1/2 flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill border border-white/25 bg-black/62 text-white backdrop-blur-sm">
                    <Play size={18} weight="fill" aria-hidden />
                  </span>
                </div>
                <div className="p-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.07em] text-accent-300">
                    Vidéo
                  </span>
                  <p className="mt-2 text-[14.5px] font-medium leading-[1.4] text-ink">{v.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* FORMATS                                                          */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-16">
        <Eyebrow>Ce qu&apos;on fait</Eyebrow>
        <h2 className="mt-4 max-w-[22ch] text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[34px]">
          Deux formats, une même exigence.
        </h2>

        <div className="mt-[30px] grid grid-cols-1 gap-5 md:grid-cols-2">
          {formats.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-surface p-8">
              <PhIcon name={f.icon} size={26} className="text-accent-300" />
              <h3 className="mt-[18px] text-2xl font-semibold leading-[1.15] text-ink">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-ink/74">{f.desc}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-pill border border-border px-3 py-1.5 text-xs text-ink/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-baseline justify-between border-t border-border pt-5">
                <span className="text-[22px] font-semibold text-ink">
                  dès {priceFor(f.title)}
                  <span className="text-[13px] font-normal text-ink/55"> /h</span>
                </span>
                <PillButton href="/reserver" variant="secondary">
                  Réserver
                </PillButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* PROCESS                                                          */}
      {/* ---------------------------------------------------------------- */}
      <Section className="pb-[68px] pt-3">
        <Eyebrow>Comment ça se passe</Eyebrow>
        <div className="mt-[30px] grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0">
          {process.map((s, i) => (
            <div
              key={s.n}
              className={`sm:px-[34px] ${i === 0 ? "sm:pl-0" : ""} ${
                i === process.length - 1 ? "sm:pr-0" : "sm:border-r sm:border-border"
              }`}
            >
              <p className="text-[15px] font-bold text-accent">{s.n}</p>
              <h3 className="mt-4 text-xl font-semibold leading-[1.15] text-ink">{s.title}</h3>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-ink/72">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* BANDE DE STATS — seule zone saturée                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[radial-gradient(900px_420px_at_85%_-40%,var(--color-section-glow)_0%,transparent_64%),var(--color-section)]">
        <Section className="py-[52px]">
          <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:justify-between">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-[38px] font-bold leading-none tracking-[-0.02em] text-white sm:text-[46px]">
                  {s.value}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.07em] text-white/66">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-[26px] text-xs text-white/42">[À remplacer : vos chiffres réels]</p>
        </Section>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* TÉMOIGNAGES                                                      */}
      {/* ---------------------------------------------------------------- */}
      <Section className="py-16">
        <Eyebrow>On en parle</Eyebrow>
        <h2 className="mt-4 mb-[30px] text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[34px]">
          Ce qu&apos;ils en disent.
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-border bg-surface p-8">
              <Quotes size={24} weight="fill" className="text-accent-300" aria-hidden />
              <blockquote className="mt-4 text-lg leading-[1.55] text-ink">{t.quote}</blockquote>
              <figcaption className="mt-5 text-sm text-ink/60">
                <span className="text-ink">{t.author}</span> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* FAQ                                                              */}
      {/* ---------------------------------------------------------------- */}
      <Section className="pb-[68px] pt-5">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-[26px] font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[32px]">
              Les questions qui reviennent.
            </h2>
          </div>
          <div className="border-t border-border">
            {faq.map((item) => (
              <details key={item.q} className="group border-b border-border py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium text-ink">
                  {item.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-pill border border-border text-accent-300 transition-transform duration-200 group-open:rotate-45">
                    <Plus size={13} aria-hidden />
                  </span>
                </summary>
                <p className="mt-3.5 max-w-[60ch] text-[15px] leading-[1.65] text-ink/72">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* BLOC RÉSERVATION FINAL                                           */}
      {/* ---------------------------------------------------------------- */}
      <Section className="pb-[72px]">
        <div className="relative overflow-hidden rounded-[20px] border border-border bg-[radial-gradient(700px_340px_at_90%_-60%,var(--color-accent-800)_0%,transparent_62%),var(--color-surface)] p-9 sm:p-12">
          <LiveBadge className="mb-[22px]">Le studio est ouvert cette semaine</LiveBadge>
          <h2 className="max-w-[20ch] text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[38px]">
            Prêt à enregistrer votre première capsule ?
          </h2>
          <p className="mt-4 max-w-[52ch] text-base leading-[1.6] text-ink/74">
            Choisissez un créneau, réglez l&apos;acompte de 30 %, on s&apos;occupe du son et de
            l&apos;image. Vous repartez avec vos fichiers.
          </p>
          <div className="mt-[30px] flex flex-wrap gap-3.5">
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
