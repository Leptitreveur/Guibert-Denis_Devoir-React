import { PropTypes } from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allPortfolioCards from 'src/data/portfolioData.js';
import { PortfolioCard } from 'src/components/portfolio/PortfolioCard/PortfolioCard';

/**
 * Grille de cartes de réalisations avec filtrage par IDs
 *
 * @param {Object} props - Propriétés du composant
 * @param {string[]} [props.selectedIds] - IDs des réalisations à afficher (optionnel, affiche tout si non renseigné)
 * @param {Function} [props.registerElement] - Fonction pour enregistrer les refs des éléments
 * @returns {JSX.Element} Conteneur avec liste des cartes sélectionnées du portfolio 
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


PortfolioCardsList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
  registerElement: PropTypes.func,
};
