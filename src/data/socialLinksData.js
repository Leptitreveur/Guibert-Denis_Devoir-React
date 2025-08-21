/** Gestion des liens sociaux
 * Permet d'ajouter des liens vers les réseaux sociaux avec validation
 */

const socialLinks = [];

const requiredFields = ['id', 'link', 'icon'];

/** Ajoute un lien social avec validation des données
 * @param {Object} data - Données du lien social à ajouter
 */
const addSocialLink = (data) => {
  const linkData = {};

  // * Début validation des données ==============================================================

  // Validation des champs requis
  for (const field of requiredFields) {
    if (data[field] === undefined || data[field] === null) {
      console.warn(`Incomplete data value passed to addSocialLink; Missing value: "${field}"`);
      return;
    }

    // * Fin de validation =========================================================================

    linkData[field] = data[field];
  }

  socialLinks.push(linkData);
};

// * Ajout dynamique  ==================================================================================
addSocialLink({
  id: 'github',
  link: 'https://github.com/github-john-doe',
  icon: 'bi-github',
});
addSocialLink({
  id: 'x',
  link: 'https://x.com/?lang=fr',
  icon: 'bi-twitter',
});
addSocialLink({
  id: 'linkedin',
  link: 'https://www.linkedin.com/',
  icon: 'bi-linkedin',
});
// * Fin d'ajout dynamique =============================================================================

/**Récupère un lien social par son ID
 * @param {string} id - ID du lien social à récupérer
 * @returns {Object|null} Le lien trouvé ou null
 */
export const getSocialLinks = (id) => socialLinks.find((data) => data.id === id);

//* exportation faite du tableau une fois rempli
export default socialLinks;
