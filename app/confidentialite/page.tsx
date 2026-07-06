import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Politique de confidentialité et gestion des données (RGPD) — PilluleCast.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <LegalLayout eyebrow="Légal" title="Politique de confidentialité">
      <p className="text-sm">
        [À REMPLACER : gabarit RGPD de départ, à faire relire/compléter. Ce
        n&apos;est pas un conseil juridique.]
      </p>

      <section className="flex flex-col gap-2">
        <h2>Responsable du traitement</h2>
        <p>[À REMPLACER : nom de l&apos;éditeur] — contact : [À REMPLACER : email].</p>
      </section>

      <section className="flex flex-col gap-2">
        <h2>Données collectées</h2>
        <p>
          Via le formulaire de contact : nom, email, sujet et message. Ces données
          servent uniquement à traiter votre demande et ne sont pas utilisées à des
          fins commerciales sans votre accord.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2>Base légale & durée de conservation</h2>
        <p>
          Traitement fondé sur votre consentement / l&apos;intérêt légitime à
          répondre. Conservation : [À REMPLACER : durée, ex. 12 mois après le
          dernier échange].
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2>Sous-traitants</h2>
        <p>
          Envoi des emails : [À REMPLACER : Resend]. Réservation & paiement de
          l&apos;acompte : [À REMPLACER : Cal.com / Stripe]. Hébergement : [À
          REMPLACER : Vercel]. [Listez les prestataires réellement utilisés.]
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2>Vos droits</h2>
        <p>
          Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
          d&apos;opposition et de portabilité. Pour les exercer : [À REMPLACER :
          email]. Réclamation possible auprès de la CNIL (cnil.fr).
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2>Cookies</h2>
        <p>
          [À REMPLACER : ce site n&apos;utilise pas de cookie de suivi. Si vous
          ajoutez de l&apos;analytics ou des cookies tiers, décrivez-les ici et
          ajoutez une bannière de consentement.]
        </p>
      </section>
    </LegalLayout>
  );
}
