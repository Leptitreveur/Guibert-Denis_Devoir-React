import { PropTypes } from 'prop-types';

import './ServiceCardsList.scss';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allServiceCards from 'src/data/servicesData.js';
import { ServiceCard } from 'src/components/services/ServiceCard/ServiceCard';

export const ServiceCardsList = ({ selectedIds }) => {
  const filteredCards = useFilteredData(allServiceCards, selectedIds, 'ServicesPage');

  return (
    <div className="card app-card--service__container">
      {filteredCards.map((data) => (
        <ServiceCard key={data.id} cardData={data} />
      ))}
    </div>
  );
};

ServiceCardsList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
