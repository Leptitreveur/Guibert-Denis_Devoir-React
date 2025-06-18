import { PropTypes } from "prop-types";
import { useFilteredData } from "hooks/useFilteredData";

import allContactCards from "data/contactData";
import { ContactCard } from "contact/ContactCard/ContactCard";

export const ContactCardList = ({ selectedIds, showIcon = false }) => {
  const filteredCards = useFilteredData(
    allContactCards,
    selectedIds,
    "Contact"
  );

  return (
    <>
      {filteredCards.map((data) => (
        <ContactCard
          key={data.id}
          contactData={data}
          showIcon={showIcon}
          toMap={data.id === "host"}
        />
      ))}
    </>
  );
};

ContactCardList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
  showIcon: PropTypes.bool,
};
