# Rapport de projet : Audit de sécurité avec CI GitHub Actions

## 1. Objectif

L'objectif de ce projet était de mettre en place un pipeline d'intégration continue (CI) avec GitHub Actions, dans le cadre d'un audit de sécurité, sans inclure de phase de déploiement. Le projet inclut également la création d'un petit site web personnalisé.

## 2. Application développée

Une application web minimale a été développée en Node.js avec Express. Elle expose une route GET `/` qui renvoie un message de test simple.

## 3. Pipeline CI

Le fichier `.github/workflows/ci.yml` configure une pipeline déclenchée à chaque `push` ou `pull request`. Cette pipeline effectue :

- L’installation des dépendances via `npm ci` (dans le dossier `app`)
- Une analyse statique avec Semgrep
- Un audit des dépendances avec `npm audit`

## 4. Outils utilisés

- **Semgrep** : Analyse statique de code, configuration automatique (`--config auto`)
- **npm audit** : Vérifie les vulnérabilités des dépendances Node.js
- **GitHub Actions** : Orchestration des tâches CI dans un environnement Ubuntu

## 5. Résultats

Les exécutions du pipeline CI ont été validées avec succès. Les résultats de l’analyse n’ont révélé aucune vulnérabilité critique dans le code source ni dans les dépendances à ce stade.