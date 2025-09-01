/**
 * Utilitaire d'extraction de domaine d'URL
 *
 * @param {string} url - URL à traiter
 * @returns {string} Nom de domaine extrait ou URL originale en cas d'erreur
 */
export const extractDomain = (url) => {
  if (!url) return '';

  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
  } catch (error) {
    console.error("Erreur de parsing d'Url :", error);
    return url;
  }
};
