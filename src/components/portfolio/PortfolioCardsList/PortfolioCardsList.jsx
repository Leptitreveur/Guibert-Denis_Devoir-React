import { PropTypes } from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allPortfolioCards from 'src/data/portfolioData.js';
import { PortfolioCard } from 'src/components/portfolio/PortfolioCard/PortfolioCard';

/**
 * Grille de cartes de réalisations avec filtrage par IDs
 *
 * Affiche une grille responsive de cartes de portfolio avec possibilité
 * de filtrage par IDs spécifiques. Utilise le hook useFilteredData pour
 * la logique de filtrage et la validation des données.
 *
 * @param {Object} props - Propriétés du composant
 * @param {string[]} [props.selectedIds] - IDs des réalisations à afficher (optionnel, affiche tout si non renseigné)
 * @param {Function} [props.registerElement] - Fonction pour enregistrer les refs des éléments
 *
 * @example
 * ```jsx
 * // Affichage de toutes les réalisations
 * <PortfolioCardsList registerElement={registerElement} />
 *
 * // Affichage de réalisations spécifiques
 * <PortfolioCardsList
 *   selectedIds={['freshfood', 'japrest']}
 *   registerElement={registerElement}
 * />
 *
 * // Sans fonction de scroll
 * <PortfolioCardsList selectedIds={['freshfood']} />
 * ```
 */
export const PortfolioCardsList = ({ selectedIds = [], registerElement }) => {
  const filteredCards = useFilteredData(allPortfolioCards, selectedIds, 'PortfolioPage');

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {filteredCards.map((data) => (
        <PortfolioCard key={data.id} cardData={data} registerElement={registerElement} />
      ))}
    </div>
  );
};

/**
 * Validation des propriétés du composant PortfolioCardsList
 */
PortfolioCardsList.propTypes = {
  /** IDs des réalisations à afficher (optionnel) */
  selectedIds: PropTypes.arrayOf(PropTypes.string),
  /** Fonction pour enregistrer les refs des éléments (optionnel) */
  registerElement: PropTypes.func,
};
