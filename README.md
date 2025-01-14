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
   npm i -g nodemon
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

#### `mongoService.js`

- **Question :** Pourquoi créer des services séparés ?
- **Réponse :**Créer des services séparés permet d'encapsuler des fonctionnalités spécifiques,de réutiliser le code et d'améliorer la testabilité, tout en rendant l'application plus modulaire et facile à maintenir.

#### `redisService.js`

- **Question :** Comment gérer efficacement le cache avec Redis ?
- **Réponse :** Gérez le cache en utilisant des stratégies d'expiration (TTL) pour éviter une surcharge mémoire, en utilisant des clés structurées pour une meilleure organisation, et en utilisant un mécanisme de cache invalideur pour garantir des données à jour.

- **Question :** Quelles sont les bonnes pratiques pour les clés Redis ?
- **Réponse :** Utilisez un format cohérent pour nommer les clés , évitez les clés trop longues, et incluez des noms descriptifs pour faciliter la compréhension et le débogage.

#### `courseRoutes.js`

- **Question :** Pourquoi séparer les routes dans différents fichiers ?
- **Réponse :** Pour améliorer la lisibilité, la maintenabilité et l'organisation du code en regroupant les routes par fonctionnalité ou module.

- **Question :** Comment organiser les routes de manière cohérente ?
- **Réponse :** Utilisez des fichiers distincts pour chaque module, définissez des préfixes d'URL clairs, et suivez une structure logique pour regrouper les routes similaires.

#### `env`

- **Question :** Quelles sont les informations sensibles à ne jamais commiter ?
- **Réponse :** Les informations sensibles incluent les clés API, les mots de passe, les URI de base de données,les jetons d accès, les secrets de configuration et toute donnée confidentielle.

- **Question :** Pourquoi utiliser des variables d'environnement ?
- **Réponse :** Les variables d'environnement permettent de stocker les informations sensibles et les configurations en dehors du code source, offrant ainsi une meilleure sécurité, flexibilité et portabilité de l'application.

---

## Illustrations

Voici quelques captures d'écran pour illustrer le fonctionnement de l'application.

### 1. **Création de la base de données et des collections**

![Création de BD et Collection](screenshots/Creation%20de%20BD%20et%20Collection.png)
_Cette image montre la création de la base de données et des collections dans MongoDB pour le projet._

### 2. **Vérification de Redis**

![La vérification de redis](screenshots/La%20verification%20de%20redis.png)
_Ici, on peut voir l'écran de vérification de bon fonctionnement de cahe avec redis._

### 3. **Création d'un cours**

![La création d'un cours](screenshots/La%20creation%20d'un%20cours.png)
_Ici, on voit le formulaire de création d'un cours dans l'application._

### 4. **Recherche d'un cours avec l'ID**

![La recherche d'un cours avec l'id](screenshots/La%20recherche%20d'un%20cours%20avec%20l'id.png)
_Cette capture d'écran montre la fonctionnalité de recherche d'un cours en utilisant son ID._

### 5. **Récupération des statistiques**

![La récupération des statistiques](screenshots/La%20recupuration%20des%20statistiques.png)
_Cette image présente la vue des statistiques récupérées de l'application._

---

## Choix Techniques

### Variables d'environnement

Les données sensibles (ex. URI MongoDB) sont stockées dans un fichier `.env`, ce qui garantit la sécurité et la portabilité de l'application entre différents environnements (développement, production).

### Gestion des Bases de Données

- **MongoDB** : Base de données NoSQL principale pour stocker les cours et utilisateurs.
- **Redis** : Utilisé comme cache pour améliorer la performance des requêtes fréquentes.

### Séparation de la Logique Métier et des Routes

Le projet suit une architecture modulaire :

- **Routes** : Définissent les points d'entrée.
- **Contrôleurs** : Gèrent la logique métier.
- **Services** : Gèrent la communication avec la base de données.

### Utilisation de Nodemon pour le Développement

Nodemon est utilisé pour redémarrer automatiquement le serveur lors de modifications du code, facilitant le développement.

### Test avec Postman

Les routes API sont testées via Postman pour s'assurer de leur bon fonctionnement.

### Gestion des Erreurs

Les erreurs sont centralisées et renvoyées sous un format standardisé avec un message d'erreur et un code HTTP approprié, facilitant la gestion des exceptions.

---

## Auteur

## EL MOUTAOUAKIL Abdellah BDCC

**Bon développement !**
