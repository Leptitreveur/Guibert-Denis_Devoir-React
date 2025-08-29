import { PropTypes } from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allServiceCards from 'src/data/servicesData.js';
import { ServiceCard } from 'src/components/services/ServiceCard/ServiceCard';

/**
 * Grille de cartes de services avec filtrage par IDs
 *
 * Affiche une grille responsive de cartes de services avec possibilité
 * de filtrage par IDs spécifiques. Utilise le hook useFilteredData pour
 * la logique de filtrage et la validation des données.
 *
 * @param {Object} props - Propriétés du composant
 * @param {string[]} [props.selectedIds] - IDs des services à afficher (optionnel, affiche tout si non renseigné)
 *
 * @example
 * ```jsx
 * // Affichage de tous les services
 * <ServiceCardsList />
 *
 * // Affichage de services spécifiques
 * <ServiceCardsList selectedIds={['web', 'mobile', 'seo']} />
 *
 * // Affichage d'un seul service
 * <ServiceCardsList selectedIds={['consulting']} />
 * ```
 *
 * @returns {JSX.Element} Grille des cartes de services filtrées
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

/**
 * Validation des propriétés du composant ServiceCardsList
 */
ServiceCardsList.propTypes = {
  /** IDs des services à afficher (optionnel) */
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
