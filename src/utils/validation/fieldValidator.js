/**
 * Validateur de champs requis - Validation de la présence et validité des champs obligatoires
 *
 * Vérifie que tous les champs requis sont présents et non vides dans un objet de données.
 * Utilisé pour valider les données avant leur traitement ou affichage.
 *
 * @param {Object} data - L'objet contenant les données à valider
 * @returns {Object} Résultat de validation avec statut et champ problématique
 * @returns {boolean} returns.isValid - true si tous les champs sont valides, false sinon
 * @returns {string} returns.field - Nom du premier champ invalide trouvé (si applicable)
 */
export const validateField = (data) => {
  const requiredFields = ['id', 'alt', 'title', 'description', 'tools'];

  // Validation des champs requis
  for (const field of requiredFields) {
    if (data[field] === undefined || data[field] === null || (typeof data[field] === 'string' && data[field].trim() === '')) {
      return {
        isValid: false,
        field,
      };
    }
  }

  return { isValid: true };
};
