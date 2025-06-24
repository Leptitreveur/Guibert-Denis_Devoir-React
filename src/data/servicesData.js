const serviceCard = [];

const requiredFields = ['id', 'icon', 'title', 'text'];

const addService = (data) => {
  const serviceData = {};

  for (const field of requiredFields) {
    // * Début de validation des données ==================================================================================

    if (data[field] === undefined || data[field] === null) {
      console.warn(`Incomplete data value passed to add service. Missed value: "${field}"`);
      return;
    }

    // * Fin de validation ================================================================================================

    serviceData[field] = data[field];
  }

  serviceCard.push(serviceData);
};

//* AJOUT DYNAMIQUE ==============================================================================================

addService({
  id: 'uxdesign',
  icon: 'bi-brush',
  title: 'UX Design',
  text: "L'UX design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et la plus agréable possible.",
});
addService({
  id: 'dev',
  icon: 'bi-code-slash',
  title: 'Developpement Web',
  text: 'Le développement de site web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)',
});
addService({
  id: 'ref',
  icon: 'bi-search',
  title: 'Référencement',
  text: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
});

// *FIN D'AJOUT DYNAMIQUE ===================================================================================================

export const getServices = (id) => serviceCard.find((data) => data.id === id);

//* exportation faite du tableau une fois rempli
export default serviceCard;
