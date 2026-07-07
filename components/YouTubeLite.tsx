"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Carte vidéo YouTube « facade » : on affiche d'abord la miniature (léger),
 * l'iframe ne se charge qu'au clic. Meilleures perfs + moins de tracking.
 */
export default function YouTubeLite({
  id,
  title,
  start,
}: {
  id: string;
  title: string;
  start?: number;
}) {
  const [playing, setPlaying] = useState(false);

  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    ...(start ? { start: String(start) } : {}),
  });

  return (
    <figure className="group overflow-hidden rounded-3xl border border-border bg-surface">
      <div className="relative aspect-video">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Lire la vidéo : ${title}`}
            className="absolute inset-0 h-full w-full cursor-pointer"
          >
            <Image
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-bg/30 transition-colors group-hover:bg-bg/10" />
            {/* Bouton play */}
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill bg-aqua text-bg shadow-[0_8px_30px_-6px_var(--color-aqua)] transition-transform group-hover:scale-110">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex items-center gap-3 p-4">
        <span className="h-2 w-2 shrink-0 rounded-pill bg-lav" aria-hidden />
        <span className="text-sm text-ink">{title}</span>
      </figcaption>
    </figure>
  );
}
