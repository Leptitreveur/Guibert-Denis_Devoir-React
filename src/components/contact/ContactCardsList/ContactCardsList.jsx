import { PropTypes } from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allContactCards from 'src/data/contactData';
import { ContactCard } from 'src/components/contact/ContactCard/ContactCard';

/**
 * Liste de cartes de contact avec filtrage et activation automatique de Maps
 *
 * @param {Object} props - Propriétés du composant
 * @param {string[]} [props.selectedIds] - IDs des cartes de contact à afficher (optionnel, affiche tout si non renseigné)
 * @returns {JSX.Element} Liste des cartes de contact filtrées
 */
export const ContactCardsList = ({ selectedIds = [] }) => {
  const filteredCards = useFilteredData(allContactCards, selectedIds, 'Contact');

  return (
    <>
      {filteredCards.map((data) => (
        <ContactCard key={data.id} contactData={data} toMap={data.id === 'host'} />
      ))}
    </>
  );
};

ContactCardsList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
