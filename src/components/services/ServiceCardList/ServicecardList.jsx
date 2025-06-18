import { PropTypes } from "prop-types";
import { useFilteredData } from "hooks/useFilteredData";

import allServiceCards from "data/servicesData.js";
import { ServiceCard } from "services/ServiceCard/ServiceCard";

export const ServiceCardList = ({ selectedIds }) => {
  const filteredCards = useFilteredData(
    allServiceCards,
    selectedIds,
    "ServicesPage"
  );

  return (
    <div className="card app-card--service__container">
      {filteredCards.map((data) => (
        <ServiceCard key={data.id} cardData={data} />
      ))}
    </div>
  );
};

ServiceCardList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
