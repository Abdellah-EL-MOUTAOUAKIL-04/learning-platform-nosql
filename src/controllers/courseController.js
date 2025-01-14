// Question: Quelle est la différence entre un contrôleur et une route ?
// Réponse:Une route définit l'URL et la méthode HTTP pour une requête, tandis qu'un contrôleur contient la logique qui gère cette requête.
// Question : Pourquoi séparer la logique métier des routes ?
// Réponse :Séparer la logique métier des routes permet d'améliorer la lisibilité, la maintenabilité et la testabilité du code, en isolant la gestion des requêtes de la logique spécifique à l'application.

const { ObjectId } = require("mongodb");
const db = require("../config/db");
const mongoService = require("../services/mongoService");
const redisService = require("../services/redisService");

async function createCourse(req, res) {
  // TODO: Implémenter la création d'un cours
  // Utiliser les services pour la logique réutilisable
  try {
    const collection = db.getdb().collection("course");

    const result = await mongoService.insertOne(collection, req.body);

    if (result.insertedId) {
      await redisService.cacheData("course_stats", null, 0);

      return res.status(201).send({
        message: "Cours créé avec succès",
        courseId: result.insertedId,
      });
    }

    res.status(500).send("Erreur lors de la création du cours.");
  } catch (error) {
    console.error("Erreur lors de l'insertion du cours", error);
    res.status(500).send("Erreur serveur");
  }
}

async function getCourse(req, res) {
  const idCourse = req.params.id;
  try {
    const cachedCourse = await redisService.getCachedData(`course_${idCourse}`);
    if (cachedCourse) {
      return res.send(cachedCourse);
    }

    const collection = db.getdb().collection("course");
    const course = await mongoService.findOneById(collection, idCourse);

    if (!course) {
      return res.status(404).send("Cours non trouvé");
    }

    await redisService.cacheData(`course_${idCourse}`, course, 3600);

    res.send(course);
  } catch (err) {
    console.log("Erreur lors de la récupération du cours ", err);
    res.status(500).send("Erreur serveur");
  }
}

async function getCourseStats(req, res) {
  try {
    const cachedStats = await redisService.getCachedData("course_stats");
    if (cachedStats) {
      return res.send(cachedStats);
    }

    const collection = db.getdb().collection("course");
    const stats = await mongoService.getStats(collection);

    await redisService.cacheData("course_stats", stats, 3600);

    res.send(stats);
  } catch (err) {
    console.log("Erreur lors de la récupération des statistiques ", err);
    res.status(500).send("Erreur serveur");
  }
}

// Export des contrôleurs
module.exports = {
  // TODO: Exporter les fonctions du contrôleur
  createCourse,
  getCourse,
  getCourseStats,
};
