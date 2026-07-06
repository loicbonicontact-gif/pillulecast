import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez le studio PilluleCast à Lyon : formulaire, email, adresse et horaires.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="On vous écoute."
        subtitle="Un projet, une question, une envie de visiter ? Écrivez-nous — on répond vite."
      />

      <Section className="grid gap-10 pb-24 lg:grid-cols-[1.3fr_1fr]">
        {/* Formulaire */}
        <ContactForm />

        {/* Coordonnées */}
        <aside className="flex flex-col gap-6">
          <div className="rounded-3xl border border-border bg-surface p-6">
            <h2 className="mb-4 text-lg text-ink">Le studio</h2>
            <address className="flex flex-col gap-3 text-sm not-italic text-muted">
              <span>
                <span className="block text-ink/80">Adresse</span>
                {site.address}
              </span>
              <span>
                <span className="block text-ink/80">Email</span>
                <a href={`mailto:${site.email}`} className="text-aqua hover:underline">
                  {site.email}
                </a>
              </span>
              <span>
                <span className="block text-ink/80">Horaires</span>
                {site.hours}
              </span>
            </address>
          </div>

          {/* Carte (placeholder) */}
          <div
            role="img"
            aria-label="Emplacement carte — à remplacer par une carte du studio"
            className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface-2"
          >
            <div className="wave-texture absolute inset-0 opacity-40" aria-hidden />
            <span className="relative text-xs uppercase tracking-[0.18em] text-muted">
              [À REMPLACER : carte / plan d&apos;accès]
            </span>
          </div>

          {/* Réseaux */}
          <div className="rounded-3xl border border-border bg-surface p-6">
            <h2 className="mb-4 text-lg text-ink">Réseaux</h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href={site.socials.instagram} className="text-muted hover:text-ink">
                  Instagram — {site.socials.instagram}
                </a>
              </li>
              <li>
                <a href={site.socials.linkedin} className="text-muted hover:text-ink">
                  LinkedIn — {site.socials.linkedin}
                </a>
              </li>
              <li>
                <a href={site.socials.youtube} className="text-muted hover:text-ink">
                  YouTube — {site.socials.youtube}
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </Section>
    </>
  );
}
