const socialLinks = [];

const requiredFields = ['id', 'link', 'icon'];

const addSocialLink = (data) => {
  const linkData = {};

  for (const field of requiredFields) {
    // * Début validation des données ==============================================================

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

export const getSocialLinks = (id) => socialLinks.find((data) => data.id === id);

//* exportation faite du tableau une fois rempli
export default socialLinks;
