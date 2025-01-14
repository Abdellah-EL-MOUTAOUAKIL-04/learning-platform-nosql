// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse : Gérez le cache en utilisant des stratégies d'expiration (TTL) pour éviter une surcharge mémoire,
// en utilisant des clés structurées pour une meilleure organisation,
// et en utilisant un mécanisme de cache invalideur pour garantir des données à jour.
// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse : Utilisez un format cohérent pour nommer les clés , évitez les clés trop longues,
// et incluez des noms descriptifs pour faciliter la compréhension et le débogage.

// Fonctions utilitaires pour Redis
async function cacheData(key, data, ttl) {
  // TODO: Implémenter une fonction générique de cache
  const redisClient = await redisdb.connectRedis();
  try {
    await redisClient.set(key, JSON.stringify(data), { EX: ttl });
  } catch (error) {
    console.error("Error caching data:", error);
  }
}

async function getCachedData(key) {
  // get cash data implemenatation
  const redisClient = await redisdb.connectRedis();
  try {
    const data = await redisClient.get(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    console.error("Error getting cached data:", error);
    return null;
  }
}

module.exports = {
  // TODO: Exporter les fonctions utilitaires
  cacheData,
  getCachedData,
};
