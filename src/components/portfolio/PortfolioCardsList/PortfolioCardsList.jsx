import { PropTypes } from 'prop-types';

// import './PortfolioCardsList.scss';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allPortfolioCards from 'src/data/portfolioData.js';
import { PortfolioCard } from 'src/components/portfolio/PortfolioCard/PortfolioCard';

export const PortfolioCardsList = ({ selectedIds }) => {
  const filteredCards = useFilteredData(allPortfolioCards, selectedIds, 'PortfolioPage');

  return (
    <div className="app-card--portfolio__container">
      {filteredCards.map((data) => (
        <PortfolioCard key={data.id} cardData={data} />
      ))}
    </div>
  );
};
PortfolioCardsList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};
