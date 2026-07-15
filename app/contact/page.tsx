import type { Metadata } from "next";
import {
  MapPin,
  EnvelopeSimple,
  Clock,
  MapTrifold,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
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

const socials = [
  { href: site.socials.instagram, label: "Instagram", Icon: InstagramLogo },
  { href: site.socials.youtube, label: "YouTube", Icon: YoutubeLogo },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinLogo },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet."
        subtitle="Une question, un format particulier, un devis ? Écrivez-nous — on répond vite. Pour bloquer une date directement, passez plutôt par la réservation."
        size="md"
      />

      <Section className="grid grid-cols-1 gap-9 py-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <ContactForm />

        {/* Coordonnées */}
        <aside className="flex flex-col gap-4">
          <div className="rounded-2xl border border-border bg-surface p-[26px]">
            <div className="flex items-start gap-[13px]">
              <MapPin size={20} className="mt-0.5 shrink-0 text-accent-300" aria-hidden />
              <div>
                <p className="text-[15px] font-medium text-ink">Le studio</p>
                <p className="mt-1.5 text-sm leading-[1.55] text-ink/65">{site.address}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-[26px]">
            <div className="flex items-start gap-[13px]">
              <EnvelopeSimple size={20} className="mt-0.5 shrink-0 text-accent-300" aria-hidden />
              <div>
                <p className="text-[15px] font-medium text-ink">Email</p>
                <p className="mt-1.5 text-sm leading-[1.55] text-ink/65">{site.email}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-[26px]">
            <div className="flex items-start gap-[13px]">
              <Clock size={20} className="mt-0.5 shrink-0 text-accent-300" aria-hidden />
              <div>
                <p className="text-[15px] font-medium text-ink">Horaires</p>
                <p className="mt-1.5 text-sm leading-[1.55] text-ink/65">{site.hours}</p>
              </div>
            </div>
          </div>

          {/* Carte (placeholder) */}
          <div
            role="img"
            aria-label="Emplacement carte — à intégrer"
            className="stripe-texture flex aspect-[4/3] flex-col items-center justify-center gap-2.5 rounded-2xl border border-border bg-surface"
          >
            <MapTrifold size={32} className="text-accent-300" aria-hidden />
            <span className="text-[13.5px] text-ink/55">Carte du studio [à intégrer]</span>
          </div>

          <div className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-11 flex-1 items-center justify-center rounded-xl border border-border text-ink/70 transition-colors hover:text-ink"
              >
                <Icon size={19} aria-hidden />
              </a>
            ))}
          </div>
        </aside>
      </Section>
    </>
  );
}
