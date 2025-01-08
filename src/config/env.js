// Question: Pourquoi est-il important de valider les variables d'environnement au démarrage ?
// Réponse : Valider les variables d'environnement au démarrage permet de s'assurer que l'application a toutes les informations nécessaires pour fonctionner correctement et éviter les erreurs en production.
// Question: Que se passe-t-il si une variable requise est manquante ?
// Réponse :Si une variable requise est manquante, l'application risque de ne pas fonctionner correctement, entraînant des erreurs ou des comportements imprévus.
//  Cela peut aussi causer des échecs de connexion à des services externes ou des problèmes de configuration.

const dotenv = require("dotenv");
dotenv.config();

const requiredEnvVars = ["MONGODB_URI", "MONGODB_DB_NAME", "REDIS_URI"];

// Validation des variables d'environnement
function validateEnv() {
  // TODO: Implémenter la validation
  // Si une variable manque, lever une erreur explicative
  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(
        `La variable d'environnement ${envVar} est requise mais est manquante.`
      );
    }
  });
}

module.exports = {
  mongodb: {
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_DB_NAME,
  },
  redis: {
    uri: process.env.REDIS_URI,
  },
  port: process.env.PORT || 3000,
};
