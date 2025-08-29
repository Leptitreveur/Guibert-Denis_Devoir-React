/**
 * Validateur de format d'email - Validation du format des adresses email
 *
 * Valide que l'email fourni respecte un format basique d'adresse email.
 * Utilise une regex simple pour la validation, couvrant les cas les plus courants.
 * Note : Cette validation ne couvre pas tous les cas RFC 5322/6531 pour l'internationalisation.
 *
 * @param {string} email - L'adresse email à valider
 * @returns {Object} Résultat de validation avec statut et message d'erreur
 * @returns {boolean} returns.isValid - true si l'email est valide, false sinon
 * @returns {string} returns.error - Message d'erreur si l'email est invalide
 */
export const validateEmailFormat = (email) => {
  // Internationalisation: la regex ne couvre pas tous les cas RFC 5322/6531
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: "Format d'email invalide.",
    };
  }
  return { isValid: true };
};
