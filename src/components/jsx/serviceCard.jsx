import { PropTypes } from 'prop-types';
import { useFilteredData } from "hooks/useFilteredData";

import allServiceCards from 'jsx/serviceCardData.jsx';
import { ServiceCardBox } from './serviceCardBox';

export const ServiceCardList = ({ selectedIds }) => {

    const filteredCards = useFilteredData(allServiceCards, selectedIds, 'Services')

    return (
        <div className="card app-card--service__container">
            {filteredCards.map(data => (
                    <ServiceCardBox key={data.id} cardData={data} />
                ))
            }
        </div>
    );
};

ServiceCardList.propTypes = {
    selectedIds : PropTypes.arrayOf(PropTypes.string)
};
