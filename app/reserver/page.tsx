import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Réserver une séance",
  description:
    "Réservez votre séance au studio PilluleCast à Lyon : choisissez un créneau, réglez l'acompte de 30 %, c'est confirmé.",
  alternates: { canonical: "/reserver" },
};

const steps = [
  {
    n: "1",
    title: "Choisir un créneau",
    desc: "Sélectionnez le jour et l'heure qui vous arrangent dans le calendrier.",
  },
  {
    n: "2",
    title: "Payer l'acompte",
    desc: "Un acompte de 30 % confirme et bloque votre créneau (paiement sécurisé).",
  },
  {
    n: "3",
    title: "C'est confirmé",
    desc: "Vous recevez la confirmation et des rappels automatiques. Le solde se règle sur place.",
  },
];

const reassurance = [
  "Annulation / report possible [À REMPLACER : délai, ex. jusqu'à 48h avant].",
  "Rappels automatiques par email avant la séance.",
  "Paiement de l'acompte sécurisé (Stripe via Cal.com).",
];

export default function ReserverPage() {
  return (
    <>
      <PageHero
        eyebrow="Réserver"
        title="Réservez en trois étapes."
        subtitle="Pas d'aller-retour par email. Vous choisissez, vous confirmez, on vous attend."
      />

      {/* Étapes */}
      <Section className="pb-12">
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="flex flex-col gap-3 rounded-3xl border border-border bg-surface p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-pill bg-aqua text-lg font-bold text-bg">
                {s.n}
              </span>
              <h2 className="text-xl text-ink">{s.title}</h2>
              <p className="text-sm text-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Embed Cal.com */}
      <Section className="pb-12">
        <CalEmbed />
      </Section>

      {/* Réassurance */}
      <Section className="pb-24">
        <ul className="grid gap-4 sm:grid-cols-3">
          {reassurance.map((r) => (
            <li
              key={r}
              className="flex gap-3 rounded-2xl border border-border bg-surface/50 p-5 text-sm text-muted"
            >
              <span aria-hidden className="text-aqua">
                ✓
              </span>
              {r}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
