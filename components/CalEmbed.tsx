"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import PillButton from "./PillButton";

/**
 * Embed Cal.com pour la réservation.
 *
 * Le lien est lu depuis NEXT_PUBLIC_CALCOM_LINK (format "utilisateur/type-evenement").
 * ⚠️ L'ACOMPTE STRIPE (30 %) se configure DANS Cal.com (app Stripe de Cal.com),
 *    pas ici. Ce composant n'affiche que le calendrier de réservation.
 *
 * Tant que le lien n'est pas configuré (placeholder), on affiche un encart
 * explicatif plutôt qu'un embed cassé.
 */
export default function CalEmbed() {
  const calLink = process.env.NEXT_PUBLIC_CALCOM_LINK;
  const isConfigured = Boolean(calLink) && !calLink!.includes("votre-utilisateur");

  useEffect(() => {
    if (!isConfigured) return;
    (async () => {
      const cal = await getCalApi();
      // Thème sombre + couleur de marque accent pour rester cohérent avec le site.
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#9184d9" },
          dark: { "cal-brand": "#9184d9" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [isConfigured]);

  if (!isConfigured) {
    return (
      <div className="stripe-texture flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-surface p-8 text-center">
        <CalendarBlank size={40} className="text-accent-300" aria-hidden />
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-ink">Calendrier de réservation</p>
          <p className="max-w-[40ch] text-sm leading-relaxed text-ink/62">
            L&apos;agenda Cal.com s&apos;affichera ici une fois connecté (variable{" "}
            <code className="text-accent-300">NEXT_PUBLIC_CALCOM_LINK</code>).
          </p>
        </div>
        <PillButton href="/contact" variant="secondary" className="mt-1">
          Réserver par message en attendant
        </PillButton>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <Cal
        calLink={calLink!}
        style={{ width: "100%", height: "100%", minHeight: "420px" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
