import { PropTypes } from 'prop-types';

import { useContextualStyle } from 'src/hooks/useContextualStyle';

/**
 * Lien vers un profil social avec icône et styles contextuels
 *
 * Affiche un lien vers un réseau social avec une icône et des styles
 * adaptés selon le contexte (footer ou page normale). Utilise le hook
 * useContextualStyle pour adapter l'apparence.
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

  // Garde-fou: aucun rendu si aucunes données
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

/**
 * Validation des propriétés du composant SocialLink
 */
SocialLink.propTypes = {
  /** Données du lien social */
  linkData: PropTypes.shape({
    /** Identifiant unique du lien */
    id: PropTypes.string.isRequired,
    /** URL du profil social */
    link: PropTypes.string.isRequired,
    /** Classe CSS de l'icône */
    icon: PropTypes.string.isRequired,
  }).isRequired,
};
