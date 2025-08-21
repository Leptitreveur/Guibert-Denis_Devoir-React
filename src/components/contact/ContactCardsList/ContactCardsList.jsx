import { PropTypes } from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allContactCards from 'src/data/contactData';
import { ContactCard } from 'src/components/contact/ContactCard/ContactCard';

/** Filtre les cartes de contact et active Maps pour l'hébergeur.
 * @param {string[]} selectedIds
 */
export const ContactCardsList = ({ selectedIds }) => {
  // Filtrage selon IDs
  const filteredCards = useFilteredData(allContactCards, selectedIds, 'Contact');

  return (
    <>
      {/* Rendu des cartes; toMap activé pour l'ID 'host' */}
      {filteredCards.map((data) => (
        <ContactCard key={data.id} contactData={data} toMap={data.id === 'host'} />
      ))}
    </>
  );
};

ContactCardsList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
