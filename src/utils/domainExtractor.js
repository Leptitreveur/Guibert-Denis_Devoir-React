/**
 * Utilitaire d'extraction de domaine - Extraction du nom de domaine d'une URL
 *
 * Extrait le nom de domaine d'une URL pour l'affichage, en gérant les erreurs
 * de parsing et en retournant l'URL originale en cas de problème.
 *
 * @param {string} url - URL à traiter
 * @returns {string} Nom de domaine extrait ou URL originale en cas d'erreur
 */
export const extractDomain = (url) => {
  if (!url) return '';

  try {
    // Parse l'URL et extrait le nom de domaine
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
  } catch (error) {
    // En cas d'erreur de parsing, retourne l'URL originale
    console.error("Erreur de parsing d'Url :", error);
    return url;
  }
};
