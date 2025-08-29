import PropTypes from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allProgressBars from 'src/data/progressbarsData.js';
import { Progressbar } from 'src/components/progressbar/Progressbar/Progressbar';

/**
 * Liste de barres de progression avec filtrage par IDs
 *
 * Affiche une liste de barres de progression avec possibilité de filtrage
 * par IDs spécifiques. Utilise le hook useFilteredData pour la logique
 * de filtrage et la validation des données.
 *
 * @param {Object} props - Propriétés du composant
 * @param {string[]} [props.selectedIds] - IDs des barres à afficher (optionnel, affiche tout si non renseigné)
 *
 * @example
 * ```jsx
 * // Affichage de toutes les barres de progression
 * <ProgressbarsList />
 *
 * // Affichage de barres spécifiques
 * <ProgressbarsList selectedIds={['html', 'css', 'javascript']} />
 *
 * // Affichage d'une seule barre
 * <ProgressbarsList selectedIds={['react']} />
 * ```
 *
 * @returns {JSX.Element} Liste des barres de progression filtrées
 */
export const ProgressbarsList = ({ selectedIds = [] }) => {
  const filteredCards = useFilteredData(allProgressBars, selectedIds, 'Progressbar');

  return (
    <>
      {filteredCards.map((data) => (
        <Progressbar key={data.id} barData={data} />
      ))}
    </>
  );
};

/**
 * Validation des propriétés du composant ProgressbarsList
 */
ProgressbarsList.propTypes = {
  /** IDs des barres de progression à afficher (optionnel) */
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
