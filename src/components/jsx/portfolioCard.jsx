import { PropTypes } from 'prop-types';
import { useFilteredData } from "hooks/useFilteredData";

import allPortfolioCards from 'jsx/portfolioCardData.jsx'
import { PortfolioCardBox } from 'jsx/portfolioCardBox';

export const PortfolioCardList = ({ selectedIds }) => {

    const filteredCards = useFilteredData(allPortfolioCards, selectedIds, 'Portfolio');

    return (
        <div className="app-card--portfolio__container">
            {filteredCards.map(data => (
                    <PortfolioCardBox key={data.id} cardData={data} />
                ))}
        </div>
    );
}
PortfolioCardList.propTypes = {
    selectedIds: PropTypes.arrayOf(PropTypes.string).isRequired
};