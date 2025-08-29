/**
 * Gestion des liens sociaux
 *
 * Permet d'ajouter des liens vers les réseaux sociaux avec validation.
 * Fournit un système de gestion centralisé pour les liens vers les
 * réseaux sociaux avec validation des données.
 */

const socialLinks = [];

/**
 * Champs requis pour un lien social
 * @description Liste des champs obligatoires pour la validation
 */
const requiredFields = ['id', 'link', 'icon'];

/**
 * Ajoute un lien social avec validation des données
 *
 * Valide les champs requis avant d'ajouter le lien social au tableau.
 *
 * @param {Object} data - Données du lien social à ajouter
 * @param {string} data.id - Identifiant unique du lien social
 * @param {string} data.link - URL du profil social
 * @param {string} data.icon - Classe CSS de l'icône Bootstrap
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

/**
 * Récupère un lien social par son ID
 *
 * @param {string} id - ID du lien social à récupérer
 * @returns {Object|null} Le lien trouvé ou null si non trouvé
 */
export const getSocialLinks = (id) => socialLinks.find((data) => data.id === id);

//* exportation faite du tableau une fois rempli
export default socialLinks;
