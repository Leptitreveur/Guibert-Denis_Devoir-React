/** Test de validation de l'email 
 * @param {string} email à valider
 * @returns {Object} Résultat de validation avec statut et message d'erreur 
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