"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Révèle son contenu (fade + montée) quand il entre dans le viewport.
 * IntersectionObserver, une seule fois. Respecte prefers-reduced-motion
 * (le CSS global affiche alors le contenu immédiatement). Sans JS, le contenu
 * reste dans le DOM (crawlable) mais masqué — fallback visible ci-dessous.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Fallback : pas d'IntersectionObserver → on affiche tout de suite.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);

    // Filet de sécurité : si l'observer ne se déclenche jamais (onglet resté en
    // arrière-plan au chargement, navigateur exotique…), on révèle quand même
    // le contenu pour qu'il ne reste jamais invisible.
    const fallback = window.setTimeout(() => setVisible(true), 1600);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
