import PortfolioImages from 'src/data/portfolioImages';

/**
 * Validateur d'image de portfolio
 *
 * @param {string} id - L'identifiant du portfolio pour lequel vérifier l'image
 * @returns {Object} Objet contenant isValid (boolean)
 */
export const validateImageById = (id) => {
  if (!PortfolioImages[id]) {
    return { isValid: false };
  }

  return { isValid: true };
};
