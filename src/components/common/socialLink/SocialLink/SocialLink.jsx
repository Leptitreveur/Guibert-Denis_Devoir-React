import { PropTypes } from 'prop-types';

import { useContextualStyle } from 'src/hooks/useContextualStyle';

/**
 * Lien vers un profil social avec icône et styles contextuels
 *
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.linkData - Données du lien social
 * @param {string} props.linkData.id - Identifiant unique du lien
 * @param {string} props.linkData.link - URL du profil social
 * @param {string} props.linkData.icon - Classe CSS de l'icône
 * @returns {JSX.Element|null} Lien social avec icône ou null si pas de données
 */
export const SocialLink = ({ linkData }) => {
  const { getClassProps } = useContextualStyle();

  if (!linkData) {
    return null;
  }

  const socialIcon = linkData;

  const { id, link, icon } = socialIcon;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer nofollow" id={id} {...getClassProps('link', 'social')}>
      <i className={`${getClassProps('icon', 'social')?.className || ''} ${icon}`}></i>
    </a>
  );
};

SocialLink.propTypes = {
  linkData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};
