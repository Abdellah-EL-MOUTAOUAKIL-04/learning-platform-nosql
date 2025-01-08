// Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
// Réponse : Créer un module séparé pour les connexions aux bases de données permet de centraliser la gestion de la connexion,
//  facilitant la maintenance et la réutilisation du code.
//  Cela améliore également la modularité et la testabilité de l'application.
// Question : Comment gérer proprement la fermeture des connexions ?
// Réponse :Pour gérer proprement la fermeture des connexions,
// il est essentiel de fermer la connexion à la base de données lors de l'arrêt de l'application.

const { MongoClient } = require("mongodb");
const redis = require("redis");
const config = require("./env");

let mongoClient, redisClient, db;

async function connectMongo() {
  // TODO: Implémenter la connexion MongoDB
  mongoClient = new MongoClient(config.mongodb.uri);
  try {
    await mongoClient.connect();
    db = mongoClient.db(config.mongodb.dbName);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("not connected from bd.js");
  }
  // Gérer les erreurs et les retries
}

async function connectRedis() {
  // TODO: Implémenter la connexion Redis
  // Gérer les erreurs et les retries
  redisClient = redis.createClient();
  try {
    await redisClient.connect({
      host: config.redis,
      port: config.port,
    });
    console.log("data base connected");
  } catch (error) {
    console.log("data base not connected");
  }
  return redisClient;
}

function getdb() {
  if (!db) {
    throw new Error("mongodb not found not connected");
  } else {
    return db;
  }
}

// Export des fonctions et clients
module.exports = {
  // TODO: Exporter les clients et fonctions utiles
  connectMongo,
  connectRedis,
  getdb,
};
