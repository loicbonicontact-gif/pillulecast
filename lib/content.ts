/**
 * Contenu éditorial des pages (tarifs, studio).
 * ⚠️ Placeholders réalistes (fourchettes marché France/Lyon) — à ajuster.
 *    Aucun prix n'est définitif : validez-les avant mise en ligne.
 */

/** Grille tarifaire par format. */
export const pricing = [
  {
    format: "Capsule Audio",
    accent: "aqua" as const,
    tagline: "Enregistrement audio, jusqu'à 4 micros, ingé son inclus.",
    rows: [
      { label: "L'heure", price: "~55 €" },
      { label: "Demi-journée (4h)", price: "~190 €" },
      { label: "Journée", price: "~320 €" },
    ],
    includes: ["Jusqu'à 4 micros", "Ingé son inclus", "Fichiers livrés le jour même"],
  },
  {
    format: "Capsule Vidéo",
    accent: "lav" as const,
    tagline: "Multi-caméra, jusqu'à 3 invités, régie + ingé son.",
    rows: [
      { label: "L'heure", price: "~110 €" },
      { label: "Demi-journée (4h)", price: "~390 €" },
      { label: "Journée", price: "~690 €" },
    ],
    includes: ["Multi-caméra", "Jusqu'à 3 invités", "Régie + ingé son"],
  },
];

/** Prestations complémentaires. */
export const addons = [
  {
    title: "Montage podcast",
    price: "à partir de ~70 €/épisode",
    desc: "On monte, on nettoie, on égalise. Vous publiez.",
  },
  {
    title: "Clips réseaux sociaux",
    price: "à partir de ~40 €/clip",
    desc: "Formats verticaux sous-titrés, prêts pour Insta / TikTok / LinkedIn.",
  },
  {
    title: "Captation live / streaming",
    price: "[À REMPLACER : sur devis]",
    desc: "Diffusion en direct multi-plateformes. Parlons-en.",
  },
];

/** Conditions d'acompte. */
export const depositNote =
  "Acompte de 30 % à la réservation (via Stripe dans Cal.com), solde sur place. [À REMPLACER : votre politique exacte d'acompte / annulation]";

/** Espaces & équipement du studio. */
export const studioSpaces = [
  {
    title: "Cabine audio",
    desc: "Traitée acoustiquement pour une voix propre, sans écho.",
    items: [
      "[À REMPLACER : modèles de micros, ex. Shure SM7B]",
      "[À REMPLACER : casques de monitoring]",
      "[À REMPLACER : interface / préampli]",
    ],
  },
  {
    title: "Plateau vidéo",
    desc: "Éclairage maîtrisé et fonds au choix pour une image nette.",
    items: [
      "[À REMPLACER : caméras, ex. Sony / Blackmagic]",
      "[À REMPLACER : éclairage, ex. Aputure]",
      "[À REMPLACER : fonds / décor]",
    ],
  },
  {
    title: "Régie",
    desc: "Un ingé son pilote la prise pendant que vous parlez.",
    items: [
      "[À REMPLACER : console de mixage]",
      "[À REMPLACER : logiciel de captation]",
      "[À REMPLACER : monitoring régie]",
    ],
  },
];

/** Ce qui est inclus dans toute séance (badges-pill). */
export const studioIncludes = [
  "Ingé son / opérateur",
  "Installation & réglages",
  "Casques pour tous",
  "Eau & café",
  "Wi-Fi",
  "Fichiers livrés le jour même",
  "[À REMPLACER : accès PMR ?]",
  "[À REMPLACER : parking / transports]",
];
