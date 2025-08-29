import PropTypes from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allSocialLinks from 'src/data/socialLinksData.js';
import { useContextualStyle } from 'src/hooks/useContextualStyle';

import { SocialLink } from 'src/components/common/socialLink/SocialLink/SocialLink';

/**
 * Liste de liens sociaux avec filtrage et adaptation contextuelle
 *
 * Affiche une liste de liens vers les réseaux sociaux avec possibilité
 * de filtrage par IDs et adaptation automatique des styles selon le contexte
 * (footer ou page normale). Utilise le hook useFilteredData pour la logique
 * de filtrage et useContextualStyle pour l'adaptation des styles.
 *
 * @param {Object} props - Propriétés du composant
 * @param {string[]} [props.selectedIds] - IDs des liens sociaux à afficher (optionnel, affiche tout si non renseigné)
 * @returns {JSX.Element} Liste des liens sociaux filtrés et stylés
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

/**
 * Validation des propriétés du composant SocialLinksList
 */
SocialLinksList.propTypes = {
  /** IDs des liens sociaux à afficher (optionnel) */
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
