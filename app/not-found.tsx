import Section from "@/components/Section";
import PillButton from "@/components/PillButton";
import Gelule from "@/components/Gelule";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <Gelule className="h-14 w-[13px]" />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">Erreur 404</p>
      <h1 className="max-w-xl text-4xl font-bold tracking-[-0.02em] text-ink sm:text-5xl">
        Cette capsule n&apos;existe pas.
      </h1>
      <p className="max-w-md text-ink/70">
        La page que vous cherchez a été déplacée ou n&apos;a jamais été enregistrée.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <PillButton href="/" size="lg">
          Retour à l&apos;accueil
        </PillButton>
        <PillButton href="/reserver" variant="secondary" size="lg">
          Réserver une séance
        </PillButton>
      </div>
    </Section>
  );
}
