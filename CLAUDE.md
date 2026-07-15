@AGENTS.md

# PilluleCast — mémoire projet

## Le projet

Site vitrine premium pour **PilluleCast**, studio de **podcast & vidéo à Lyon**.
Objectif business n°1 : qu'un visiteur comprenne l'offre en 10 s et clique sur
**« Réserver une séance »**.

Cinq routes : `/` (Accueil) · `/studio` · `/tarifs` · `/reserver` · `/contact`,
plus `/mentions-legales` et `/confidentialite` (RGPD).

## Stack (imposée — ne pas dévier)

- **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**.
- ⚠️ Cette version de Next.js diffère des versions connues : **lire les guides
  dans `node_modules/next/dist/docs/` avant d'écrire du code** (cf. AGENTS.md).
- **Tailwind v4** = config CSS-first via `@theme` dans `app/globals.css`
  (PAS de `tailwind.config.js`). Tokens exposés en utilitaires : `bg-bg`,
  `bg-surface`, `text-ink`, `text-muted`, `text-accent`, `text-accent-300`,
  `bg-live`, `rounded-pill`, etc.
- Alias d'import : `@/*` → racine du projet.
- Déploiement cible : **Vercel** (ne pas déployer soi-même).
- **Réservation** : embed **Cal.com** via `@calcom/embed-react`, lien lu depuis
  `NEXT_PUBLIC_CALCOM_LINK`. Pas de moteur de réservation maison.
- **Paiement** : acompte 30 % encaissé via **Stripe branché DANS Cal.com**
  (app Stripe de Cal.com), jamais en dur dans le code.
- **Contact** : route API `app/api/contact/route.ts` → email via **Resend**
  (log en dev si `RESEND_API_KEY` absente). Clés en env uniquement.
- **Secrets** : tout dans `.env.local` (gitignoré). `.env.example` documenté.
  Ne jamais committer de clé, ne pas demander les clés à l'utilisateur.

## Direction artistique (refonte « Studio en direct »)

- **Ambiance** : dark neutre-bleuté, pro, « studio en direct » (broadcast,
  rythmé, orienté réalisations vidéo). Plus sobre que la V1 — pas de grain,
  pas de marquees défilants, pas de glows saturés, pas de compteurs animés.
- **Marque** : la **gélule** reste le concept mais en version **sobre** : une
  petite barre verticale arrondie en dégradé accent (voir `components/Gelule.tsx`,
  utilisée uniquement dans le logo). Marqueur **« ● en direct »** : point rouge
  `#e0483d` qui pulse lentement (2,4 s), remplace l'ancien badge « ON AIR ».
- **Palette — mono-accent blurple** : fond `#161826`, surface `#232532`,
  bordure/divider `rgba(233,233,237,.16)`, texte `#E9E9ED`, **accent unique
  `#9184D9`** (+ variantes `accent-300 #D2CEFD`, `accent-600 #796CBF`,
  `accent-800 #423A6A`, `accent-900 #2B2741`). Bande de stats sur
  `--color-section #262A60` — seule zone saturée du site.
- **Boutons** : **contournés** (bordure sur fond transparent), jamais pleins.
  `primary` = bordure/texte accent ; `secondary` = bordure neutre.
- **Typo** : *Inter* uniquement (titres 600/700, `letter-spacing` -0.02/-0.03em).
- **Icônes** : Phosphor (`@phosphor-icons/react/dist/ssr`, import direct — pas
  de `"use client"` requis). Mapping par nom dans `components/PhIcon.tsx` pour
  les icônes pilotées par `lib/content.ts`.
- **Vidéos** : miniatures YouTube **statiques** (`img.youtube.com`, plus
  d'iframe autoplay) — carte hero + rail « À l'affiche », tout pointe vers
  `/reserver`. Domaine autorisé dans `next.config.ts`.
- **Ton éditorial** : direct, chaleureux, un brin cool. Phrases courtes.
  Zéro formule creuse (« passionnés depuis toujours », « solution innovante »).

## Règle d'or — ne jamais inventer

Toute info factuelle non fournie (adresse, prix définitifs, photos, témoignages,
chiffres, liens réseaux) reste un placeholder balisé **`[À REMPLACER : …]`**.
Les placeholders centralisés vivent dans `lib/site.ts`.

## Structure de code

- `app/` — routes (App Router), `layout.tsx` (fonts + Header/Footer),
  `globals.css` (design system), `robots.ts`, `sitemap.ts`, `icon.svg` (gélule).
- `components/` — `Logo`, `Gelule` (barre sobre), `LiveBadge` (badge « en
  direct »), `PillButton` (contourné), `PhIcon` (registre d'icônes Phosphor),
  `StudioPhoto`, `Section`/`Eyebrow`, `PageHero`, `Header`, `Footer`,
  `CalEmbed`, `ContactForm`, `FormatSelect`, `LegalLayout`.
- `lib/site.ts` — config centrale (nom, nav, placeholders, `photos`,
  `videos`, `youtubeThumbnail()`).
- `lib/content.ts` — contenu éditorial (tarifs, add-ons, studio), chaque item
  porte un champ `icon` (nom Phosphor, résolu via `PhIcon`).
- **Photos** : URLs Unsplash de démo centralisées dans `lib/site.ts` (`photos`),
  rendues via `StudioPhoto` (next/image). Domaines autorisés dans
  `next.config.ts` (`images.remotePatterns` : Unsplash + `img.youtube.com`).
  ⚠️ Placeholders à remplacer par les vraies photos.

## Convention de commits

Commits conventionnels, en français, atomiques par phase :
`feat: …`, `fix: …`, `chore: …`, `docs: …`, `style: …`.
Un commit à la fin de chaque phase validée.

## Avancement (phases)

- [x] **Phase 0** — init, design system, Accueil.
- [x] **Phase 1** — `/studio` + `/tarifs`.
- [x] **Phase 2** — `/reserver` (embed Cal.com via `@calcom/embed-react`,
  fallback si lien non configuré) + `/contact` (formulaire → `app/api/contact`
  + Resend, log si clé absente) + `/mentions-legales` + `/confidentialite`.
- [x] **Phase 3** — refonte complète « Studio en direct » (nouveau design
  system, 5 pages recréées d'après un handoff `.dc.html`) : palette mono-accent
  blurple, boutons contournés, icônes Phosphor, plus de marquees/glows/
  compteurs animés/grain, vidéos en miniatures statiques (fini l'autoplay).

Contenu éditorial des pages : `lib/content.ts` (tarifs, add-ons, studio).
