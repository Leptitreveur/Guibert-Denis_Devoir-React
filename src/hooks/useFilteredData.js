/**
 * Hook useFilteredData - Filtrage de données selon les IDs sélectionnés avec validation
 *
 * @param {Array} sourceData - Tableau source de données à filtrer
 * @param {Array} selectedIds - IDs des éléments à filtrer (optionnel)
 * @param {string} sourceName - Nom de la source pour les logs de validation
 * @returns {Array} Données filtrées ou tableau complet si aucun ID spécifié
 */
export const useFilteredData = (sourceData, selectedIds = [], sourceName = 'source') => {
  selectedIds.forEach((id) => {
    if (typeof id !== 'string' || !id.trim()) {
      console.warn(`[useFilteredData] Invalid id passed to source "${sourceName}". Id reçu: `, id);
    } else if (!sourceData.some((data) => data.id === id)) {
      console.warn(`[useFilteredData] Id, "${id}", about the source "${sourceName}" does not match any existing data`);
    }
  });

  if (selectedIds.length === 0) {
    return sourceData;
  } else {
    return sourceData.filter((data) => selectedIds.includes(data.id));
  }
};
