import { PropTypes } from "prop-types";
import { useFilteredData } from "hooks/useFilteredData";

import allContactCards from 'jsx/contactCardData';
import { ContactCardBox } from "./contactCardBox";

export const ContactCardList = ({ selectedIds, showIcon = false }) => {

    const filteredCards = useFilteredData(allContactCards, selectedIds, 'Contact');

  return (
    <>
      {filteredCards.map((data) => (
          <ContactCardBox
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
