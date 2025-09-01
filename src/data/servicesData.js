const serviceCard = [];

const requiredFields = ['id', 'icon', 'title', 'text'];

/**
 * Ajoute un service proposé avec validation des données
 *
 * @param {Object} data - Données du service à ajouter
 * @param {string} data.id - Identifiant unique du service
 * @param {string} data.icon - Classe CSS de l'icône Bootstrap
 * @param {string} data.title - Titre du service
 * @param {string} data.text - Description du service
 */
const addService = (data) => {
  const serviceData = {};

  for (const field of requiredFields) {
    if (data[field] === undefined || data[field] === null) {
      console.warn(`Incomplete data value passed to add service. Missed value: "${field}"`);
      return;
    }

    serviceData[field] = data[field];
  }

  serviceCard.push(serviceData);
};

addService({
  id: 'uxdesign',
  icon: 'bi-brush',
  title: 'UX Design',
  text: "L'UX design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et la plus agréable possible.",
});
addService({
  id: 'dev',
  icon: 'bi-code-slash',
  title: 'Développement web',
  text: 'Le développement de site web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)',
});
addService({
  id: 'ref',
  icon: 'bi-search',
  title: 'Référencement',
  text: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attiré un maximum de visiteurs qualifiés sur le site.",
});

/**
 * Récupère un service par son ID
 *
 * @param {string} id - ID du service à récupérer
 * @returns {Object|null} Le service trouvé ou null si non trouvé
 */
export const getServices = (id) => serviceCard.find((data) => data.id === id);

export default serviceCard;
