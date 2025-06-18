import { PropTypes } from "prop-types";
import { useFilteredData } from "hooks/useFilteredData";

import allPortfolioCards from "data/portfolioData.js";
import { PortfolioCard } from "Portfolio/PortfolioCard/PortfolioCard";

export const PortfolioCardList = ({ selectedIds }) => {
  const filteredCards = useFilteredData(
    allPortfolioCards,
    selectedIds,
    "PortfolioPage"
  );

  return (
    <div className="app-card--portfolio__container">
      {filteredCards.map((data) => (
        <PortfolioCard key={data.id} cardData={data} />
      ))}
    </div>
  );
};
PortfolioCardList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};
