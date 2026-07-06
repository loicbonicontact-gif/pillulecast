/**
 * Configuration centrale du site.
 * ⚠️ RÈGLE D'OR : ne rien inventer. Toute donnée factuelle non fournie
 * reste un placeholder balisé « [À REMPLACER : …] », à compléter avant mise en ligne.
 */

export const site = {
  name: "PilluleCast",
  // Baseline principale affichée dans le hero.
  baseline: "[À REMPLACER : baseline, ex. « Votre voix, en capsule. »]",
  shortPitch:
    "Studio de podcast & vidéo à Lyon. Enregistrez, filmez, repartez avec vos capsules.",
  city: "Lyon",
  // URL de production (sert au SEO / Open Graph / sitemap).
  url: "https://pillulecast.fr", // [À REMPLACER : domaine définitif]
  email: "[À REMPLACER : email de contact]",
  address: "[À REMPLACER : adresse exacte du studio, Lyon]",
  hours: "[À REMPLACER : horaires d'ouverture]",
  socials: {
    instagram: "[À REMPLACER : lien Instagram]",
    linkedin: "[À REMPLACER : lien LinkedIn]",
    youtube: "[À REMPLACER : lien YouTube]",
  },
} as const;

/** Navigation principale (header + footer). */
export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/studio", label: "Studio" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/reserver", label: "Réserver" },
  { href: "/contact", label: "Contact" },
] as const;
