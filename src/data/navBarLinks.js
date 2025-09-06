const navbarLinks = [];

const requiredFields = ['id', 'path', 'name'];

/**
 * Ajoute un lien de navigation avec validation
 *
 * @param {Object} data - Données du lien à ajouter
 * @param {string} data.id - Identifiant unique du lien
 * @param {string} data.path - Chemin de la route
 * @param {string} data.name - Nom affiché du lien
 */
function addLink(data) {
  const linkData = {};

  for (const field of requiredFields) {
    if (data[field] === undefined || data[field] === null) {
      console.warn(`Incomplete value passed to navbarLinks. Missing value: "${field}"`);
      return;
    }
    linkData[field] = data[field];
  }
  navbarLinks.push(linkData);
}

addLink({
  id: 'HomePage',
  path: '/',
  name: 'Home',
});
addLink({
  id: 'ServicesPage',
  path: '/ServicesPage',
  name: 'Services',
});
addLink({
  id: 'PortfolioPage',
  path: '/PortfolioPage',
  name: 'Portfolio',
});
addLink({
  id: 'ContactPage',
  path: '/ContactPage',
  name: 'Contact',
});
addLink({
  id: 'LegalNoticePage',
  path: '/LegalNoticePage',
  name: 'Mentions légales',
});

/**
 * Récupère un lien par son ID
 *
 * @param {string} id - ID du lien à récupérer
 * @returns {Object|null} Le lien trouvé ou null si non trouvé
 */
export const getNavbarLinks = (id) => navbarLinks.find((data) => data.id === id);

export default navbarLinks;
