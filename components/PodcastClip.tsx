import { youtubeEmbedUrl } from "@/lib/youtube";

/**
 * Extrait de podcast en lecture automatique : autoplay, muet, en boucle,
 * SANS aucun contrôle de lecture (controls=0 + pointer-events désactivés).
 * Rendu « showreel » : les clips tournent tout seuls, on ne peut pas les mettre
 * en pause. Domaine youtube-nocookie pour limiter le tracking.
 */
export default function PodcastClip({
  id,
  title,
  start,
}: {
  id: string;
  title: string;
  start?: number;
}) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-border bg-surface">
      <div className="relative aspect-video overflow-hidden">
        <iframe
          title={title}
          tabIndex={-1}
          loading="lazy"
          src={youtubeEmbedUrl(id, { start })}
          allow="autoplay; encrypted-media"
          // Léger sur-cadrage pour masquer le bandeau résiduel de l'embed.
          className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <figcaption className="flex items-center gap-3 p-4">
        <span className="h-2 w-2 shrink-0 rounded-pill bg-lav" aria-hidden />
        <span className="text-sm text-ink">{title}</span>
      </figcaption>
    </figure>
  );
}
