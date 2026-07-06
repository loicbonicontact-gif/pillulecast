import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site PilluleCast.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout eyebrow="Légal" title="Mentions légales">
      <p className="text-sm">
        [À REMPLACER : ce gabarit est un point de départ. Faites-le relire/compléter
        avant mise en ligne — ce n&apos;est pas un conseil juridique.]
      </p>

      <section className="flex flex-col gap-2">
        <h2>Éditeur du site</h2>
        <p>
          [À REMPLACER : raison sociale / nom de l&apos;éditeur], [forme juridique],
          au capital de [montant]. Siège : [adresse]. SIRET : [numéro]. TVA
          intracommunautaire : [numéro]. Directeur de la publication : [nom].
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2>Contact</h2>
        <p>Email : [À REMPLACER : email] — Téléphone : [À REMPLACER : téléphone].</p>
      </section>

      <section className="flex flex-col gap-2">
        <h2>Hébergement</h2>
        <p>
          [À REMPLACER : hébergeur, ex. Vercel Inc., 340 S Lemon Ave #4133, Walnut,
          CA 91789, USA]. [Adaptez selon votre hébergeur réel.]
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2>Propriété intellectuelle</h2>
        <p>
          [À REMPLACER : mention sur les droits — textes, visuels, marque
          PilluleCast, etc.]
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2>Crédits</h2>
        <p>
          Photographies de démonstration : Unsplash [à remplacer par vos propres
          visuels et crédits].
        </p>
      </section>
    </LegalLayout>
  );
}
