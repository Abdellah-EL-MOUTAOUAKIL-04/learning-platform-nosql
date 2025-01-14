// Question: Pourquoi créer des services séparés ?
// Réponse: Créer des services séparés permet d'encapsuler des fonctionnalités spécifiques,
//  de réutiliser le code et d'améliorer la testabilité, tout en rendant l'application plus modulaire et facile à maintenir.

const { ObjectId } = require("mongodb");
const { getdb } = require("../config/db");

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  // TODO: Implémenter une fonction générique de recherche par ID
  try {
    const result = await collection.findOne({
      _id: new ObjectId(id),
    });
    return result;
  } catch (err) {
    console.error("Erreur lors de la recherche par ID:", err);
    throw new Error("Erreur de recupuration de l'element");
  }
}

async function insertOne(collection, document) {
  try {
    const result = await collection.insertOne(document);
    return result;
  } catch (error) {
    console.error();
    throw new Error("Erreur lors de la creation de l'element");
  }
}

async function getStats(collection) {
  try {
    //Pour obtenir les statistiques d'une collection
    /*const stats = await getdb().command({
      collStats: collection.collectionName,
    });
    return stats;
    */
    const totalCourses = await collection.countDocuments();
    const recentCourse = await collection
      .find()
      .sort({ createdAt: -1 })
      .limit(1)
      .toArray();
    const averageDuration = await collection
      .aggregate([
        { $group: { _id: null, avgDuration: { $avg: "$duration" } } },
      ])
      .toArray();

    return {
      totalCourses,
      recentCourse: recentCourse.length > 0 ? recentCourse[0] : null,
      averageDuration:
        averageDuration.length > 0 ? averageDuration[0].avgDuration : 0,
    };
  } catch (err) {
    console.log("Erreur lors de la recupuration des stats ", err);
    throw new Error("Erreur lors de la recupuration des stats");
  }
}

// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
  findOneById,
  insertOne,
  getStats,
};
