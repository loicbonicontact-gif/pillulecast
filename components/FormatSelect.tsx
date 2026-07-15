"use client";

import { useState } from "react";
import { CheckCircle, Circle } from "@phosphor-icons/react/dist/ssr";
import PhIcon from "./PhIcon";
import { pricing } from "@/lib/content";

/**
 * Sélecteur de format (Audio / Vidéo) pour la page Réserver.
 * Visuel uniquement pour l'instant : un seul lien Cal.com est configuré
 * (NEXT_PUBLIC_CALCOM_LINK) — l'agenda affiché ne change pas selon le choix.
 */
export default function FormatSelect() {
  const [selected, setSelected] = useState(pricing[0].format);

  return (
    <div className="mb-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
      {pricing.map((p) => {
        const active = selected === p.format;
        return (
          <button
            key={p.format}
            type="button"
            onClick={() => setSelected(p.format)}
            aria-pressed={active}
            className={`cursor-pointer rounded-[14px] border p-[22px] text-left transition-colors ${
              active ? "border-accent" : "border-border hover:border-accent/55"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-[11px]">
                <PhIcon name={p.icon} size={22} className="text-accent-300" />
                <span className="text-[17px] font-semibold text-ink">{p.format}</span>
              </span>
              {active ? (
                <CheckCircle size={20} weight="fill" className="text-accent" aria-hidden />
              ) : (
                <Circle size={20} className="text-ink/40" aria-hidden />
              )}
            </div>
            <p className="mt-3 text-[13.5px] text-ink/66">
              dès {p.rows[0].price.replace("~", "")}/h · {p.includes[0].toLowerCase()}
            </p>
          </button>
        );
      })}
    </div>
  );
}
