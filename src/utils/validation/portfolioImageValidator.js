import PortfolioImages from 'src/data/portfolioImages';

/**
 * Validateur d'image de portfolio - Vérification de l'existence d'une image pour un ID donné
 *
 * Vérifie qu'une image correspondante existe dans le fichier portfolioImages.js
 * pour l'ID fourni. Utilisé pour assurer la cohérence entre les données et les images.
 *
 * @param {string} id - L'identifiant du portfolio pour lequel vérifier l'image
 * @returns {Object} Résultat de validation avec statut
 * @returns {boolean} returns.isValid - true si l'image existe, false sinon
 */
export const validateImageById = (id) => {
  // Vérification de l'existence de l'image correspondante
  if (!PortfolioImages[id]) {
    return { isValid: false };
  }

  return { isValid: true };
};
