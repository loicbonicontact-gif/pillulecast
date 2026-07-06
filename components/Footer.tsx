import Link from "next/link";
import Logo from "./Logo";
import OnAirBadge from "./OnAirBadge";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marque */}
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="PilluleCast — accueil">
              <Logo className="text-2xl" />
            </Link>
            <p className="max-w-xs text-sm text-muted">{site.shortPitch}</p>
            <OnAirBadge className="w-fit" />
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation de pied de page">
            <h2 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Navigation
            </h2>
            <ul className="flex flex-col gap-2 text-sm">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink/80 transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-muted transition-colors hover:text-ink"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="text-muted transition-colors hover:text-ink"
                >
                  Confidentialité
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Studio
            </h2>
            <address className="flex flex-col gap-2 text-sm not-italic text-muted">
              <span>{site.address}</span>
              <a href={`mailto:${site.email}`} className="text-ink/80 hover:text-ink">
                {site.email}
              </a>
              <span>{site.hours}</span>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {site.name} — Studio podcast &amp; vidéo, {site.city}.
          </p>
          <p>Fait avec soin. [À REMPLACER : SIRET / éditeur si besoin]</p>
        </div>
      </div>
    </footer>
  );
}
