/**
 * Gestion des données du portfolio avec validation
 *
 * IMPORTANT : MODIFICATION DES IDs
 *
 * RAPPEL : La portfolioCard et son image partagent la meme ID.
 *          Les IDs doivent être en minuscules sans caractères spéciaux
 *
 * 1. Modifier la clé correspondante dans src/data/portfolioImages.js
 * 2. Mettre à jour le tableau selectedIds dans src/pages/PortfolioPage/PortfolioPage.jsx si choix personaliser
 */

import PortfolioImages from 'src/data/portfolioImages';
import { validateIdFormat } from 'src/utils/validation/idValidator';
import { validateImageById } from 'src/utils/validation/portfolioImageValidator';
import { validateField } from 'src/utils/validation/fieldValidator';

const portfolioCards = [];

/**
 * Ajoute une réalisation au portfolio avec validation complète
 *
 * @param {Object} data - Données de la réalisation à ajouter
 * @param {string} data.id - Identifiant unique de la réalisation
 * @param {string} data.alt - Texte alternatif de l'image
 * @param {string} data.title - Titre de la réalisation
 * @param {string} data.description - Description du projet
 * @param {string} data.tools - Outils/technologies utilisés
 * @param {string} [data.link] - URL du projet (optionnel)
 */
const addPortfolio = (data) => {
  if (data.id) {
    const idValidation = validateIdFormat(data.id);
    const imageValidation = validateImageById(data.id);
    const errors = [];

    if (!idValidation.isValid) {
      errors.push(...idValidation.errors);
    }

    if (!imageValidation.isValid) {
      errors.push(`Aucune image trouvée pour l'ID "${data.id}". Vérifiez que l'ID existe dans portfolioImages.js.`);
    }

    if (errors.length > 0) {
      console.error(`PortfolioData Validation échouée : \n- ${errors.join('\n- ')}`);
      return;
    }
  }

  if (data) {
    const { isValid, field } = validateField(data);
    if (!isValid) {
      console.warn(`PortfolioData Validation échouée: Le champ requis, "${field}", est manquant pour le projet ID "${data.id}".`);
    }
  }

  // Formatage des données avec l'image correspondante
  const formattedData = {
    id: data.id,
    src: PortfolioImages[data.id],
    alt: data.alt,
    title: data.title,
    description: data.description,
    tools: data.tools,
    link: data.link || '',
  };

  portfolioCards.push(formattedData);
};

addPortfolio({
  id: 'freshfood',
  alt: 'Freshfood background',
  title: 'Fresh Food',
  description: 'Site de vente de produits frais en ligne',
  tools: 'Site réalisé avec PHP et MySQL',
  link: 'http://fr.freshfoodvillage.com/fresh_food_village.html',
});
addPortfolio({
  id: 'japrest',
  alt: 'Restaurant japonais background',
  title: 'Restaurant Akira',
  description: 'Site de restaurant sur place ou à emporter',
  tools: 'Réalisé avec WordPress',
  link: 'https://www.akirabackparis.com/fr/',
});
addPortfolio({
  id: 'wellbeing',
  alt: 'Espace bien-être background',
  title: 'Espace bien-être',
  description: 'Site de reservation de soins ayurvediques',
  tools: 'Site réalisé avec LARAVEL',
  link: 'https://www.duneeteau.fr/',
});
addPortfolio({
  id: 'seo',
  alt: 'Seo background',
  title: 'SEO',
  description: "Amélioration du référencement d'un site e-commerce",
  tools: 'Utilisations des outils SEO',
  link: 'https://semji.com/fr/guide/seo/',
});
addPortfolio({
  id: 'code',
  alt: 'Code background',
  title: "Création d'une Api",
  description: "Création d'une API RESTFULL publique",
  tools: 'PHP - SYMFONY',
  link: 'https://webtech.fr/blog/comment-creer-une-api/',
});
addPortfolio({
  id: 'mockup',
  alt: 'Screens background',
  title: "Maquette d'un site web",
  description: "Création d'un prototype d'un site",
  tools: 'Réaliser avec FIGMA',
  link: 'https://www.figma.com/fr-fr/',
});

/**
 * Récupère une réalisation par son ID
 *
 * @param {string} id - ID de la réalisation à récupérer
 * @returns {Object|null} La réalisation trouvée ou null si non trouvée
 */
export const getPortfolioCards = (id) => portfolioCards.find((data) => data.id === id);

export default portfolioCards;
