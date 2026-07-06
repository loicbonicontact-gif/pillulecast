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
  `bg-surface`, `text-ink`, `text-muted`, `text-rec`, `text-acid`,
  `rounded-pill`, etc.
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

## Direction artistique

- **Ambiance** : dark cinématique, premium, « on air ». Épuré, beaucoup de
  respiration, grain léger, motif d'onde sonore discret.
- **Marque** : jeu sur *Pillule* → la **gélule / capsule** = capsule audio.
  Boutons & badges en **pill** (arrondi complet), **gélule bicolore** récurrente,
  micro-badge **« ● ON AIR »** animé.
- **Palette (dark)** — fond `#0A0A0D`, surface `#15151C`, bordure `#26262F`,
  texte `#F4F4EF`, secondaire `#A0A0AC`, **accent corail `#FF4D3D`**,
  **accent vert acide `#B8FF5C`**. La gélule = corail + vert acide.
- **Typo** : titres *Space Grotesk*, corps *Inter* (via `next/font`).
- **Ton éditorial** : direct, chaleureux, un brin cool. Phrases courtes.
  Zéro formule creuse (« passionnés depuis toujours », « solution innovante »).

## Règle d'or — ne jamais inventer

Toute info factuelle non fournie (adresse, prix définitifs, photos, témoignages,
chiffres, liens réseaux) reste un placeholder balisé **`[À REMPLACER : …]`**.
Les placeholders centralisés vivent dans `lib/site.ts`.

## Structure de code

- `app/` — routes (App Router), `layout.tsx` (fonts + Header/Footer/Grain),
  `globals.css` (design system), `robots.ts`, `sitemap.ts`, `icon.svg` (gélule).
- `components/` — design system : `Logo`, `Gelule`, `OnAirBadge`, `SoundWave`,
  `Grain`, `PillButton`, `GeluleCard`, `PhotoPlaceholder`, `Section`, `Header`,
  `Footer`.
- `lib/site.ts` — config centrale (nom, nav, placeholders).

## Convention de commits

Commits conventionnels, en français, atomiques par phase :
`feat: …`, `fix: …`, `chore: …`, `docs: …`, `style: …`.
Un commit à la fin de chaque phase validée.

## Avancement (phases)

- [x] **Phase 0** — init, design system, Accueil.
- [ ] **Phase 1** — `/studio` + `/tarifs`.
- [ ] **Phase 2** — `/reserver` (Cal.com) + `/contact` (API + Resend) + légales.
- [ ] **Phase 3** — polish responsive/a11y/SEO + README de mise en ligne.
