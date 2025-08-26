import { PropTypes } from 'prop-types';

import { useContextualStyle } from 'src/hooks/useContextualStyle';

/* Affiche un lien vers un profil social avec icône et styles contextuels.
  @param {Object} linkData - { id, link, icon }
  @returns {JSX.Element|null}
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
    <a href={link} target="_blank" rel="noopener noreferrer" id={id} {...getClassProps('link', 'social')}>
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
