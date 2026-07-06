"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

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
      // Thème sombre + couleur de marque aqua pour rester cohérent avec le site.
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#34e0c8" },
          dark: { "cal-brand": "#34e0c8" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [isConfigured]);

  if (!isConfigured) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-border bg-surface/50 px-6 py-16 text-center">
        <span className="rounded-pill border border-border bg-bg/50 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted">
          Réservation
        </span>
        <p className="max-w-md text-ink">
          Le module de réservation Cal.com s&apos;affichera ici.
        </p>
        <p className="max-w-md text-sm text-muted">
          [À CONFIGURER] Renseignez <code className="text-aqua">NEXT_PUBLIC_CALCOM_LINK</code>{" "}
          dans <code>.env.local</code> (ex.{" "}
          <code>votre-compte/seance-studio</code>). L&apos;acompte de 30 % se
          branche via l&apos;app Stripe <em>dans</em> Cal.com.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-surface">
      <Cal
        calLink={calLink!}
        style={{ width: "100%", height: "100%", minHeight: "640px" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
