import PropTypes from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allSocialLinks from 'src/data/socialLinksData.js';
import { useContextualStyle } from 'src/hooks/useContextualStyle';

import { SocialLink } from 'src/components/common/socialLink/SocialLink/SocialLink';

/**
 * Liste de liens sociaux avec filtrage et adaptation contextuelle
 *
 * @param {Object} props - Propriétés du composant
 * @param {string[]} [props.selectedIds] - IDs des liens sociaux à afficher (optionnel, affiche tout si non renseigné)
 * @returns {JSX.Element} Liste des liens sociaux filtrés et stylés
 */
export function SocialLinksList({ selectedIds = [] }) {
  const filteredCards = useFilteredData(allSocialLinks, selectedIds, 'SocialLink');
  const { getClassProps } = useContextualStyle();

  return (
    <div {...getClassProps('box', 'social')}>
      {filteredCards.map((data) => (
        <SocialLink key={data.id} linkData={data} />
      ))}
    </div>
  );
}

SocialLinksList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
