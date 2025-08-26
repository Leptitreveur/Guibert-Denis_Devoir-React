/** Gestion des liens de navigation
 * Permet d'ajouter des liens avec validation des champs requis
 */

const navbarLinks = [];

const requiredFields = ['id', 'path', 'name'];

/** Ajoute un lien de navigation avec validation
 * @param {Object} data - Données du lien à ajouter
 */
function addLink(data) {
  const linkData = {};

  // Validation des champs requis
  for (const field of requiredFields) {
    if (data[field] === undefined || data[field] === null) {
      console.warn(`Incomplete value passed to navbarLinks. Missing value: "${field}"`);
      return;
    }
    linkData[field] = data[field];
  }
  navbarLinks.push(linkData);
}

//* AJOUT DYNAMIQUE DE LIEN DE NAVIGATION ##################################################################################
// ! Mettre le nom avec la premiere lettre en majuscule
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
//* FIN D'AJOUT DYNAMIQUE ##################################################################################################

/** Récupère un lien par son ID
 * @param {string} id - ID du lien à récupérer
 * @returns {Object|null} Le lien trouvé ou null
 */
export const getNavbarLinks = (id) => navbarLinks.find((data) => data.id === id);

export default navbarLinks;
