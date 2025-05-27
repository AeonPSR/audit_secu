# Modélisation des menaces (Threat Modeling)

## 1. Composants de l'application

- Utilisateurs
- Le site/application web
- API interne
- Base de données
- Code source
- Pipeline CI

## 2. Actifs sensibles

- Code source
- Données d'entrée des utilisateurs
- Clés/API tokens
- Configuration de sécurité

## 3. Menaces identifiées (STRIDE)

**Spoofing**................Fausse identification d’un utilisateur
**Tampering**...............Modification du code ou des dépendances malicieuses
**Repudiation**.............Impossibilité de retracer les actions
**Information Disclosure**..Exposition des fichiers sensibles
**Denial of Service**.......Utilisation excessive de ressources via des appels API répétés 
**Elevation of Privilege**..Utilisation de modules vulnérables pour exécuter du code arbitraire 

## 4. Contre-mesures proposées

- Ajouter une analyse statique avec Semgrep dans le pipeline CI
- Auditer les dépendances avec `npm audit`
- Éviter l'exposition de fichiers sensibles (vérifier .gitignore)
- Mettre à jour régulièrement les dépendances
- Limiter les entrées utilisateur (sanitiser)
- Vérifier l’absence de données confidentielles dans le dépôt Git
