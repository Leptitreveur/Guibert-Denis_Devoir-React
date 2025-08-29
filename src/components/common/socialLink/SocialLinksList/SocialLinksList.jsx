import PropTypes from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allSocialLinks from 'src/data/socialLinksData.js';
import { useContextualStyle } from 'src/hooks/useContextualStyle';

import { SocialLink } from 'src/components/common/socialLink/SocialLink/SocialLink';

/** Composant SocialLinksList
 * Filtre et affiche une liste de liens sociaux à partir des IDs.
 * @param {string[]} selectedIds
 */
export function SocialLinksList({ selectedIds = [] }) {
  // Filtrage des données avec le hook
  const filteredCards = useFilteredData(allSocialLinks, selectedIds, 'SocialLink');
  const { getClassProps } = useContextualStyle();

  return (
    // Conteneur stylé via contexte
    <div {...getClassProps('box', 'social')}>
      {/* Rendu des liens sociaux filtrés */}
      {filteredCards.map((data) => (
        <SocialLink key={data.id} linkData={data} />
      ))}
    </div>
  );
}

SocialLinksList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
