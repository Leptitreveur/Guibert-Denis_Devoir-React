import { PropTypes } from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allContactCards from 'src/data/contactData';
import { ContactCard } from 'src/components/contact/ContactCard/ContactCard';

/**
 * Liste de cartes de contact avec filtrage et activation automatique de Maps
 *
 * Affiche une liste de cartes de contact avec possibilité de filtrage par IDs
 * et activation automatique de Google Maps pour la carte avec l'ID 'host'.
 * Utilise le hook useFilteredData pour la logique de filtrage.
 *
 * @param {Object} props - Propriétés du composant
 * @param {string[]} [props.selectedIds] - IDs des cartes de contact à afficher (optionnel, affiche tout si non renseigné)
 * @returns {JSX.Element} Liste des cartes de contact filtrées
 */
export const ContactCardsList = ({ selectedIds = [] }) => {
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

/**
 * Validation des propriétés du composant ContactCardsList
 */
ContactCardsList.propTypes = {
  /** IDs des cartes de contact à afficher (optionnel) */
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
