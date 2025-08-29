/**
 * Validateur de format d'URL - Validation du format des URLs
 *
 * Valide que l'URL fournie respecte le format standard avec protocole,
 * domaine et structure valide. Utilise l'API URL native du navigateur
 * pour une validation robuste.
 *
 * @param {string} website - L'URL du site web à valider
 * @returns {Object} Résultat de validation avec statut
 * @returns {boolean} returns.isValid - true si l'URL est valide, false sinon
 */
export const validateUrlFormat = (website) => {
  if (typeof website !== 'string' || website.trim() === '') return { isValid: false };
  try {
    new URL(website);
    return { isValid: true };
  } catch {
    return { isValid: false };
  }
};
