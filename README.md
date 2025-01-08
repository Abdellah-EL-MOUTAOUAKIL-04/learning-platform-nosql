# Projet de fin de module NoSQL

## Introduction

Ce projet est une API backend pour une plateforme d'apprentissage en ligne, utilisant une base de données NoSQL. L'objectif est de fournir une structure claire, modulaire et sécurisée tout en respectant les bonnes pratiques de développement.

---

## Installation et Démarrage

### Prérequis

- **Node.js** : version >= 16.x
- **MongoDB** : local ou sur un service cloud comme MongoDB Atlas

### Étapes d'installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Abdellah-EL-MOUTAOUAKIL-04/learning-platform-nosql
   cd learning-platform-nosql
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Configurez les variables d'environnement :
   Créez un fichier `.env` à la racine du projet et ajoutez les variables suivantes :

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/learning_platform
   ```

4. Lancez le serveur :

   ```bash
   npm start
   ```

5. Accédez à l'API sur [http://localhost:3000](http://localhost:3000).

---

## Structure du Projet

Le projet suit une organisation modulaire avec une séparation claire des responsabilités :

```
/src
  /routes         # Définit les points d'entrée pour les différentes API
    courseRoutes.js
  /controllers    # Contient la logique pour traiter les requêtes
    courseController.js
  /services       # Gère la logique métier
    mongoService.js
    redisService.js
  /config         # Configuration globale, y compris les variables d'environnement
    db.js
    env.js
App.js            # Fichier principal pour démarrer l'application
.env              # Variables d'environnement
README.md         # Documentation
```

---

## Choix Techniques

### Variables d'environnement

Les données sensibles (comme l'URI MongoDB) sont gérées via un fichier `.env`, ce qui garantit la sécurité et la portabilité.

### Outils supplémentaires

- **Postman** : Tests des routes API

---

## Réponses aux Questions

### Fichiers et Questions

#### `app.js`

- **Question :** Comment organiser le point d'entrée de l'application ?
- **Réponse :** On organise le point d'entrée de l'application en créant un fichier principal, comme App.js, où le serveur est initialisé. Ensuite, on configure les middlewares et les routes avant de démarrer l'écoute sur un port spécifique.

- **Question :** Quelle est la meilleure façon de gérer le démarrage de l'application ?
- **Réponse :** La meilleure façon de gérer le démarrage de l'application est de centraliser l'initialisation dans un fichier principal comme App.js. Vous configurez les middleware, les routes et écoutez sur le port souhaité pour démarrer le serveur.

#### `db.js`

- **Question :** Pourquoi créer un module séparé pour les connexions aux bases de données ?
- **Réponse :** Créer un module séparé pour les connexions aux bases de données permet de centraliser la gestion de la connexion, facilitant la maintenance et la réutilisation du code. Cela améliore également la modularité et la testabilité de l'application.

- **Question :** Comment gérer proprement la fermeture des connexions ?
- **Réponse :** Pour gérer proprement la fermeture des connexions, il est essentiel de fermer la connexion à la base de données lors de l'arrêt de l'application.

#### `env.js`

- **Question :** Pourquoi est-il important de valider les variables d'environnement au démarrage ?
- **Réponse :** Valider les variables d'environnement au démarrage permet de s'assurer que l'application a toutes les informations nécessaires pour fonctionner correctement et éviter les erreurs en production.

- **Question :** Que se passe-t-il si une variable requise est manquante ?
- **Réponse :** Si une variable requise est manquante, l'application risque de ne pas fonctionner correctement, entraînant des erreurs ou des comportements imprévus. Cela peut aussi causer des échecs de connexion à des services externes ou des problèmes de configuration.

#### `courseController.js`

- **Question :** Quelle est la différence entre un contrôleur et une route ?
- **Réponse :** Une route définit l'URL et la méthode HTTP pour une requête, tandis qu'un contrôleur contient la logique qui gère cette requête.

- **Question :** Pourquoi séparer la logique métier des routes ?
- **Réponse :** Séparer la logique métier des routes permet d'améliorer la lisibilité, la maintenabilité et la testabilité du code, en isolant la gestion des requêtes de la logique spécifique à l'application.

---

## Auteur

## EL MOUTAOUAKIL Abdellah BDCC

**Bon développement !**
