import { PropTypes } from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allContactCards from 'src/data/contactData';
import { ContactCard } from 'src/components/contact/ContactCard/ContactCard';

export const ContactCardsList = ({ selectedIds }) => {
  const filteredCards = useFilteredData(allContactCards, selectedIds, 'Contact');

  return (
    <>
      {filteredCards.map((data) => (
        <ContactCard key={data.id} contactData={data}  toMap={data.id === 'host'} />
      ))}
    </>
  );
};

ContactCardsList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
