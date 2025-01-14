// Question: Pourquoi séparer les routes dans différents fichiers ?
// Réponse :Pour améliorer la lisibilité,
//  la maintenabilité et l'organisation du code en regroupant les routes par fonctionnalité ou module.
// Question : Comment organiser les routes de manière cohérente ?
// Réponse:Utilisez des fichiers distincts pour chaque module, définissez des préfixes d'URL clairs,
//  et suivez une structure logique pour regrouper les routes similaires.

const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// Routes pour les cours
router.post("/", courseController.createCourse);
router.get("/stats", courseController.getCourseStats);
router.get("/:id", courseController.getCourse);

module.exports = router;
