// Question: Pourquoi créer des services séparés ?
// Réponse: Créer des services séparés permet d'encapsuler des fonctionnalités spécifiques,
//  de réutiliser le code et d'améliorer la testabilité, tout en rendant l'application plus modulaire et facile à maintenir.

const { ObjectId } = require("mongodb");

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

// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
  findOneById,
  insertOne,
};
