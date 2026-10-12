# Ndako V1

Plateforme de location immobilière transparente et mobile-first pour Libreville (Gabon).
Cette V1 est une interface avec des données de démonstration. Base de données et paiement viendront en V2.

## Ce que contient la V1

- Accueil avec recherche par quartier et filtres gabonais (EDAN individuel, forage / eau H24, cour fermée, budget).
- Page détail d'un logement avec bloc « Infos vérifiées par Ndako » et décomposition des frais.
- Espace petit bailleur (formulaire, photos, bascule Disponible / Loué).
- Modale de paiement Airtel Money / Moov Money (simulée en V1).
- Données de démonstration dans `src/data/logements.js`.

## Stack

Astro 5, Tailwind CSS 3 (`@astrojs/tailwind`), JavaScript natif. Aucune dépendance frontend lourde.

## Déploiement GitHub Pages

Le workflow est dans `.github/workflows/deploy.yml`.
Il utilise Node 24, `npm install`, puis `npm run build` et déploie `dist`.

Dans GitHub : **Settings → Pages → Build and deployment → Source → GitHub Actions**.

Adresse : `https://slimsuguru-art.github.io/Ndoka/`

## Important

Les logements, prix et infos vérifiées de la V1 sont fictifs.
