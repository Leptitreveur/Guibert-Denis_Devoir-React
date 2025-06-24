import { PropTypes } from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allContactCards from 'src/data/contactData';
import { ContactCard } from 'src/components/contact/ContactCard/ContactCard';

export const ContactCardsList = ({ selectedIds, showIcon = false }) => {
  const filteredCards = useFilteredData(allContactCards, selectedIds, 'Contact');

  return (
    <>
      {filteredCards.map((data) => (
        <ContactCard key={data.id} contactData={data} showIcon={showIcon} toMap={data.id === 'host'} />
      ))}
    </>
  );
};

ContactCardsList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
  showIcon: PropTypes.bool,
};
