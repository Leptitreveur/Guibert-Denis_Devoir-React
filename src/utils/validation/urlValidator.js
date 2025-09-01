/**
 * Validateur de format d'URL
 *
 * @param {string} website - L'URL du site web à valider
 * @returns {Object} Objet contenant isValid (boolean)
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
