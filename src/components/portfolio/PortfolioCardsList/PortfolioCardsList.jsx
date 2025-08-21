import { PropTypes } from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allPortfolioCards from 'src/data/portfolioData.js';
import { PortfolioCard } from 'src/components/portfolio/PortfolioCard/PortfolioCard';

/** Grille de cartes de réalisations avec filtrage par IDs.
 * @param {string[]} selectedIds - IDs des réalisations à afficher
 */
export const PortfolioCardsList = ({ selectedIds }) => {
  const filteredCards = useFilteredData(allPortfolioCards, selectedIds, 'PortfolioPage');

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {filteredCards.map((data) => (
        <PortfolioCard key={data.id} cardData={data} />
      ))}
    </div>
  );
};
PortfolioCardsList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};
