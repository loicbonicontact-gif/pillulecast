/**
 * Construit l'URL d'embed YouTube (domaine nocookie) pour une lecture
 * automatique, muette, en boucle et SANS contrôle — utilisée par la vidéo de
 * bannière et les extraits de podcasts. Centralisé ici pour éviter la
 * duplication des paramètres entre composants.
 */
export function youtubeEmbedUrl(id: string, opts?: { start?: number }): string {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: id, // requis pour boucler une seule vidéo
    controls: "0",
    modestbranding: "1",
    rel: "0",
    playsinline: "1",
    iv_load_policy: "3",
    disablekb: "1",
    fs: "0",
    ...(opts?.start ? { start: String(opts.start) } : {}),
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}
