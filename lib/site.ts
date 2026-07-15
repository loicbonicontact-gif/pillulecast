/**
 * Configuration centrale du site.
 * ⚠️ RÈGLE D'OR : ne rien inventer. Toute donnée factuelle non fournie
 * reste un placeholder balisé « [À REMPLACER : …] », à compléter avant mise en ligne.
 */

export const site = {
  name: "PilluleCast",
  // Sous-titre affiché sous le H1 du hero (Accueil).
  baseline:
    "Podcast & vidéo à Lyon. Cabine traitée, plateau éclairé, ingé son en régie. Vous venez avec vos idées — on capte, on cadre, vous repartez avec vos fichiers.",
  shortPitch:
    "Studio de podcast & vidéo à Lyon. Enregistrez, filmez, repartez avec vos capsules.",
  city: "Lyon",
  // URL de production (sert au SEO / Open Graph / sitemap).
  // Lue depuis NEXT_PUBLIC_SITE_URL en déploiement, sinon l'URL Vercel par défaut.
  // [À REMPLACER : votre domaine définitif quand vous en aurez un]
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pillulecast.vercel.app",
  email: "[À REMPLACER : email de contact]",
  address: "[À REMPLACER : adresse exacte du studio, Lyon]",
  hours: "[À REMPLACER : horaires d'ouverture]",
  socials: {
    instagram: "[À REMPLACER : lien Instagram]",
    linkedin: "[À REMPLACER : lien LinkedIn]",
    youtube: "[À REMPLACER : lien YouTube]",
  },
} as const;

/**
 * Photos de démonstration (Unsplash).
 * ⚠️ PLACEHOLDERS à remplacer par vos vraies photos du studio.
 *    Pour changer une image : remplacez l'URL (ou déposez vos fichiers dans
 *    /public et pointez sur « /ma-photo.jpg »). Le domaine unsplash.com est
 *    autorisé dans next.config.ts ; pensez à y ajouter votre hébergeur si besoin.
 *    Chaque `alt` décrit ce que la photo doit montrer.
 */
export const photos = {
  studioRoom: {
    src: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?w=1400&q=80",
    alt: "[À REMPLACER] Studio podcast : table, micros sur bras et casques",
  },
  broadcastMic: {
    src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1000&q=80",
    alt: "[À REMPLACER] Micro de broadcast sur bras articulé",
  },
  mixingDesk: {
    src: "https://images.unsplash.com/photo-1615458318132-1f151a3d18f4?w=1000&q=80",
    alt: "[À REMPLACER] Régie : console de mixage, micro et casque",
  },
  emptyVideoStudio: {
    src: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1400&q=80",
    alt: "[À REMPLACER] Plateau vidéo avec éclairages et fond",
  },
  interview: {
    src: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=1400&q=80",
    alt: "[À REMPLACER] Enregistrement d'un entretien filmé à deux",
  },
  micCloseup: {
    src: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1000&q=80",
    alt: "[À REMPLACER] Gros plan sur un micro de studio",
  },
  hostRecording: {
    src: "https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=1000&q=80",
    alt: "[À REMPLACER] Personne en train d'enregistrer au micro",
  },
} as const;

/**
 * Vidéos YouTube.
 * - `banner` : chaîne PilluleCast, en lecture automatique dans le hero.
 * - `excerpts` : extraits de podcasts réalisés au studio (rail « À l'affiche »).
 * Titres récupérés depuis YouTube (réels, non inventés) — ajustez si besoin.
 */
export const videos = {
  banner: { id: "ZxbpCi62PU8", title: "PilluleCast" },
  excerpts: [
    { id: "gNowW0HLpLI", title: "De Lyon à Hawaï pour un covering auto" },
    { id: "sm_-pYb0F60", title: "Yuna nous dit tout sur Yufrip" },
    { id: "2syHf6yyy6o", title: "L'IA va-t-elle remplacer votre dentiste ?" },
    { id: "Crua-k-ZLRg", title: "Le prix à payer pour devenir strongman" },
  ],
} as const;

/**
 * URL d'embed YouTube (domaine nocookie) pour une lecture automatique,
 * muette, en boucle et SANS AUCUN contrôle de lecture. Le muet est requis
 * par les navigateurs pour autoriser l'autoplay ; impossible d'avoir à la
 * fois le son, l'autoplay et zéro contrôle.
 */
export function youtubeEmbedUrl(id: string) {
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
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

/** Navigation principale (header + footer). */
export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/studio", label: "Studio" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/reserver", label: "Réserver" },
  { href: "/contact", label: "Contact" },
] as const;
