// Question: Comment organiser le point d'entrée de l'application ?
// Reponse:On organise le point d'entrée de l'application en créant un fichier principal, comme App.js, où le serveur est initialisé.
//  Ensuite, on configure les middlewares et les routes avant de démarrer l'écoute sur un port spécifique.
// Question: Quelle est la meilleure façon de gérer le démarrage de l'application ?
// Reponse: La meilleure façon de gérer le démarrage de l'application est de centraliser l'initialisation dans un fichier principal comme App.js.
//  Vous configurez les middleware, les routes et écoutez sur le port souhaité pour démarrer le serveur.
const express = require("express");
const config = require("./config/env");
const db = require("./config/db");

const courseRoutes = require("./routes/courseRoutes");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

async function startServer() {
  try {
    // TODO: Initialiser les connexions aux bases de données
    await db.connectMongo();
    await db.connectRedis();
    // TODO: Configurer les middlewares Express
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    // TODO: Monter les routes
    app.use("/api/course", courseRoutes);
    app.use("/api/student", studentRoutes);
    // TODO: Démarrer le serveur
    app.listen(config.port, () => {
      console.log(`Server started on port ${config.port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

// Gestion propre de l'arrêt
process.on("SIGTERM", async () => {
  // TODO: Implémenter la fermeture propre des connexions
});

startServer();
