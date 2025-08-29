/**
 * Hook useFilteredData - Filtrage de données selon les IDs sélectionnés avec validation
 *
 * Filtre un tableau de données selon les IDs fournis et effectue une validation
 * des IDs pour s'assurer qu'ils correspondent à des données existantes.
 * Retourne toutes les données si aucun ID n'est spécifié.
 *
 * @param {Array} sourceData - Tableau source de données à filtrer
 * @param {Array} selectedIds - IDs des éléments à filtrer (optionnel)
 * @param {string} sourceName - Nom de la source pour les logs de validation
 * @returns {Array} Données filtrées ou tableau complet si aucun ID spécifié
 */
export const useFilteredData = (sourceData, selectedIds = [], sourceName = 'source') => {
  //* Début de la validation ==========================================================================================================

  // Validation des IDs sélectionnés
  selectedIds.forEach((id) => {
    if (typeof id !== 'string' || !id.trim()) {
      console.warn(`[useFilteredData] Invalid id passed to source "${sourceName}". Id reçu: `, id);
    } else if (!sourceData.some((data) => data.id === id)) {
      console.warn(`[useFilteredData] Id, "${id}", about the source "${sourceName}" does not match any existing data`);
    }
  });
  //* Fin de la validation ===========================================================================================================

  //* Logique de filtrage ============================================================================================================

  // Retourne toutes les données si aucun ID n'est spécifié
  if (selectedIds.length === 0) {
    return sourceData;
  } else {
    // Filtre les données selon les IDs sélectionnés
    return sourceData.filter((data) => selectedIds.includes(data.id));
  }
};
