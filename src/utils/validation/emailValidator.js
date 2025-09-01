/**
 * Validateur de format des adresses email.
 *
 * @param {string} email - L'adresse email à valider
 * @returns {Object} Objet contenant isValid (boolean) et error (string) si applicable
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
