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
    const collection = db.getdb().collection("course");
    const course = await mongoService.findOneById(collection, idCourse);
    if (!course) {
      return res.status(404).send("Cours non trouvé");
    }
    res.send(course);
  } catch (err) {
    console.log("Erreur lors de la recupuration du cours ", err);
    res.status(500).send("Erreur serveur");
  }
}

async function getCourseStats(req, res) {
  res.send("enrolled by 18");
}

// Export des contrôleurs
module.exports = {
  // TODO: Exporter les fonctions du contrôleur
  createCourse,
  getCourse,
  getCourseStats,
};
