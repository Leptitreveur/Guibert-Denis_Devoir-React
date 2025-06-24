export const useFilteredData = (sourceData, selectedIds = [], sourceName = 'source') => {
  //* Début de la validation ==========================================================================================================
  selectedIds.forEach((id) => {
    if (typeof id !== 'string' || id.trim()) {
      console.warn(`[useFilteredData] Invalid id passed to source "${sourceName}". Id reçu: `, id);
    } else if (!sourceData.some((data) => data.id === id)) {
      console.warn(`[useFilteredData] Id, "${id}", about the source "${sourceName}" does not match any existing data`);
    }
  });
  //* Fin de la validation ===========================================================================================================

  //* Logique de filtrage ============================================================================================================
  if (selectedIds.length === 0) {
    return sourceData;
  } else {
    return sourceData.filter((data) => selectedIds.includes(data.id));
  }
};
