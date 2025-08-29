import { PropTypes } from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allServiceCards from 'src/data/servicesData.js';
import { ServiceCard } from 'src/components/services/ServiceCard/ServiceCard';

/** Grille de cartes de services avec filtrage par IDs.
 * @param {string[]} selectedIds - IDs des services à afficher
 */
export const ServiceCardsList = ({ selectedIds = [] }) => {
  const filteredCards = useFilteredData(allServiceCards, selectedIds, 'ServicesPage');

  return (
    <div className="row row-cols-1 row-cols-md-3">
      {filteredCards.map((data) => (
        <ServiceCard key={data.id} cardData={data} />
      ))}
    </div>
  );
};

ServiceCardsList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
