import { youtubeEmbedUrl } from "@/lib/site";

/**
 * Vidéo YouTube en lecture automatique, muette, en boucle, SANS AUCUN
 * contrôle de lecture. `pointer-events-none` + `tabIndex={-1}` : l'iframe ne
 * capte ni clic ni focus clavier — impossible de mettre en pause, les clics
 * traversent vers l'élément parent (ex. une carte-lien).
 * Domaine youtube-nocookie pour limiter le tracking.
 */
export default function YouTubeEmbed({
  id,
  title,
  className,
  fit = "crop",
  lazy = true,
}: {
  id: string;
  title: string;
  className?: string;
  /** "cover" : remplit le conteneur (16:9 source → aspect ratio libre, ex. hero).
   *  "crop"  : léger sur-cadrage pour masquer le bandeau résiduel de l'embed (cartes 16:9). */
  fit?: "cover" | "crop";
  lazy?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <iframe
        title={title}
        tabIndex={-1}
        loading={lazy ? "lazy" : "eager"}
        src={youtubeEmbedUrl(id)}
        allow="autoplay; encrypted-media"
        className={
          fit === "cover"
            ? "pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
            : "pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2"
        }
      />
    </div>
  );
}
