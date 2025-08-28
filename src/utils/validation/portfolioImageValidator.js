import PortfolioImages from 'src/data/portfolioImages';

export const validateImageById = (id) => {

  // Vérification de l'existence de l'image correspondante
  if (!PortfolioImages[id]) {
    return { isValid : false };
  }

  return { isValid : true };
};
