import { youtubeEmbedUrl } from "@/lib/youtube";

/**
 * Tuile vidéo compacte (sans légende) pour le ruban défilant.
 * Autoplay muet, en boucle, sans contrôle (comme <PodcastClip />), mais à
 * largeur fixe pour composer une bande horizontale. `loading="lazy"` : ne se
 * charge qu'à l'approche du viewport.
 */
export default function ClipTile({
  id,
  title,
  start,
}: {
  id: string;
  title: string;
  start?: number;
}) {
  return (
    <div className="relative aspect-video w-[260px] shrink-0 overflow-hidden rounded-2xl border border-border bg-surface sm:w-[340px]">
      <iframe
        title={title}
        tabIndex={-1}
        loading="lazy"
        src={youtubeEmbedUrl(id, { start })}
        allow="autoplay; encrypted-media"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
