"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import Logo from "./Logo";
import PillButton from "./PillButton";
import { nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Le lien « Réserver » vit dans le CTA, pas dans la liste de nav desktop.
  const links = nav.filter((l) => l.href !== "/reserver");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/82 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-10">
        <Link href="/" className="shrink-0" aria-label="PilluleCast — accueil">
          <Logo className="text-lg" />
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navigation principale" className="hidden items-center gap-[30px] md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-[14.5px] font-medium transition-colors ${
                  active ? "text-ink" : "text-ink/72 hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <PillButton href="/reserver">Réserver</PillButton>
        </div>

        {/* Bouton menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-pill border border-border text-ink transition-colors hover:bg-ink/6 md:hidden"
        >
          {open ? <X size={18} aria-hidden /> : <List size={18} aria-hidden />}
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Navigation principale (mobile)"
          className="border-t border-border bg-bg px-5 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-base ${
                      active ? "bg-surface text-ink" : "text-ink/72"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <PillButton
            href="/reserver"
            size="lg"
            className="mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            Réserver une séance
          </PillButton>
        </nav>
      ) : null}
    </header>
  );
}
