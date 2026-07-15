import Link from "next/link";
import { InstagramLogo, YoutubeLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

const socials = [
  { href: site.socials.instagram, label: "Instagram", Icon: InstagramLogo },
  { href: site.socials.youtube, label: "YouTube", Icon: YoutubeLogo },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinLogo },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-[52px] sm:px-10 md:grid md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10">
        {/* Marque */}
        <div className="flex flex-col gap-4">
          <Link href="/" aria-label="PilluleCast — accueil">
            <Logo className="text-lg" />
          </Link>
          <p className="max-w-[34ch] text-[14.5px] leading-relaxed text-ink/62">
            {site.shortPitch}
          </p>
          <div className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-border text-ink/70 transition-colors hover:text-ink"
              >
                <Icon size={18} aria-hidden />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Navigation de pied de page" className="mt-10 md:mt-0">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
            Navigation
          </h2>
          <ul className="flex flex-col gap-[11px] text-[14.5px]">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink/72 transition-colors hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Studio */}
        <div className="mt-10 md:mt-0">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
            Studio
          </h2>
          <div className="flex flex-col gap-[11px] text-[14.5px] leading-relaxed text-ink/62">
            <span>{site.address}</span>
            <span>{site.hours}</span>
            <a href={`mailto:${site.email}`} className="text-ink/72 transition-colors hover:text-ink">
              {site.email}
            </a>
          </div>
        </div>

        {/* Légal */}
        <div className="mt-10 md:mt-0">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
            Légal
          </h2>
          <div className="flex flex-col gap-[11px] text-[14.5px]">
            <Link href="/mentions-legales" className="text-ink/72 transition-colors hover:text-ink">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-ink/72 transition-colors hover:text-ink">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-5 sm:px-10">
        <span className="text-[13px] text-ink/48">
          © {year} {site.name} — {site.city}
        </span>
        <span className="text-[13px] text-ink/48">Studio podcast &amp; vidéo</span>
      </div>
    </footer>
  );
}
