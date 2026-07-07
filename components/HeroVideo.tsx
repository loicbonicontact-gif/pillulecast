import { videos } from "@/lib/site";

/**
 * Vidéo de fond du hero (YouTube), autoplay muet en boucle, assombrie pour
 * garder les titres lisibles. Purement décorative (aria-hidden, pointer-events
 * désactivés). Domaine youtube-nocookie pour limiter le tracking.
 *
 * Astuce « cover » : l'iframe 16:9 est dimensionnée en vw/vh et centrée pour
 * remplir le conteneur sans bandes noires (équivalent object-fit: cover).
 */
export default function HeroVideo() {
  const { id } = videos.banner;
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    controls: "0",
    loop: "1",
    playlist: id, // requis pour boucler une seule vidéo
    playsinline: "1",
    rel: "0",
    modestbranding: "1",
    iv_load_policy: "3",
    disablekb: "1",
    fs: "0",
  });

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-bg">
      <iframe
        title=""
        tabIndex={-1}
        src={`https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`}
        allow="autoplay; encrypted-media"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
      />
      {/* Voile d'assombrissement + teinte de marque pour la lisibilité */}
      <div className="absolute inset-0 bg-bg/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/80" />
      <div className="glow-aqua absolute -bottom-10 right-0 h-72 w-72 opacity-60" />
    </div>
  );
}
