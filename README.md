# PilluleCast — site vitrine

Studio de **podcast & vidéo à Lyon**. Site Next.js 16 (App Router) + TypeScript +
Tailwind v4. Objectif : présenter le studio, afficher les tarifs, et convertir
vers **« Réserver une séance »**.

> ⚠️ Le site est en construction par phases. **Seule la page d'accueil (`/`) est
> faite pour l'instant.** Les routes `/studio`, `/tarifs`, `/reserver`, `/contact`
> et les pages légales arrivent aux phases suivantes (elles renvoient un 404 tant
> qu'elles ne sont pas construites).

## Développement local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production (test de déployabilité)
```

## Variables d'environnement

Copiez `.env.example` en `.env.local` et remplissez vos valeurs.
`.env.local` est gitignoré — **ne committez jamais de clé**.

| Variable | Rôle | Requis |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique (SEO/OG/sitemap) | Recommandé en prod |
| `NEXT_PUBLIC_CALCOM_LINK` | Lien Cal.com de réservation | Phase 2 |
| `RESEND_API_KEY` | Clé Resend (emails du formulaire) | Phase 2 |
| `CONTACT_TO_EMAIL` | Adresse qui reçoit les messages | Phase 2 |
| `CONTACT_FROM_EMAIL` | Adresse expéditrice (domaine vérifié Resend) | Phase 2 |

## Déploiement — Vercel connecté à GitHub (recommandé)

Vercel héberge Next.js nativement : formulaire de contact (route API),
optimisation d'images et embed Cal.com fonctionnent, redéploiement automatique à
chaque `git push`. C'est gratuit (offre Hobby).

### 1. Mettre le code sur GitHub

Le dépôt Git local est déjà initialisé (branche `main`). Créez un dépôt GitHub
vide (via https://github.com/new, **sans** README ni .gitignore), puis :

```bash
git remote add origin https://github.com/VOTRE-COMPTE/pillulecast.git
git push -u origin main
```

### 2. Importer dans Vercel

1. Aller sur https://vercel.com/new et se connecter avec GitHub.
2. **Import** le dépôt `pillulecast`.
3. Vercel détecte Next.js automatiquement — laisser les réglages par défaut.
4. (Optionnel mais conseillé) Ajouter les variables d'environnement ci-dessus
   dans *Settings → Environment Variables*. Mettre `NEXT_PUBLIC_SITE_URL` à
   l'URL Vercel (ex. `https://pillulecast.vercel.app`).
5. **Deploy**. Le site est en ligne en ~1 min.

Chaque `git push` sur `main` redéploie automatiquement.

### Domaine personnalisé (plus tard)

*Settings → Domains* dans Vercel, puis pointer votre domaine (ex.
`pillulecast.fr`). Mettre à jour `NEXT_PUBLIC_SITE_URL` en conséquence.

## Ce qu'il reste à faire (placeholders & phases)

- Remplacer tous les `[À REMPLACER : …]` (adresse, baseline, tarifs définitifs,
  témoignages, liens réseaux…). La plupart sont centralisés dans `lib/site.ts`.
- Remplacer les **photos de démo Unsplash** (objet `photos` dans `lib/site.ts`)
  par vos vraies photos.
- **Phase 1** : pages `/studio` + `/tarifs`.
- **Phase 2** : `/reserver` (embed Cal.com + acompte Stripe **configuré dans
  Cal.com**), `/contact` (route API + Resend), pages légales.
- **Phase 3** : passe finale responsive / accessibilité / SEO + polish.
