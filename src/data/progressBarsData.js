/**Gestion des barres de progression avec validation
 * Permet d'ajouter des barres avec validation des pourcentages et couleurs Bootstrap
 */

const progressBars = [];

const requieredFields = ['id', 'title', 'percent', 'color'];
const bootstrapColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

/**Ajoute une barre de progression avec validation
 * @param {Object} data - Données de la barre à ajouter
 */
const addProgressBar = (data) => {
  //* Début validation des données ================================================================

  // Validation des champs requis
  for (const field of requieredFields) {
    if (data[field] === undefined || data[field] === null) {
      console.warn(`Validation échouée: La propriété requise "${field}" est manquante. Données reçues:`, data);
      return;
    }
  }

  // Validation du pourcentage (nombre entre 0 et 100)
  const { percent } = data;
  if (typeof percent !== 'number' || percent < 0 || percent > 100) {
    console.warn(`Validation échouée: La propriété "percent" doit être un nombre entre 0 et 100. Reçu: ${percent}`);
    return;
  }

  // Validation de la couleur Bootstrap
  const { color } = data;
  if (!bootstrapColors.includes(color)) {
    console.warn(`Validation échouée: La couleur "${color}" n'est pas une couleur Bootstrap valide. Valides: ${bootstrapColors.join(', ')}`);
    return;
  }

  // * Fin de validation ==========================================================================

  const formattedData = {
    id: data.id,
    title: data.title,
    percent: data.percent,
    color: data.color,
  };

  progressBars.push(formattedData);
};

// * Début ajout dynamique ===========================================================================================
addProgressBar({
  id: 'html',
  title: 'html5',
  percent: 90,
  color: 'danger',
});
addProgressBar({
  id: 'css',
  title: 'css3',
  percent: 80,
  color: 'info',
});
addProgressBar({
  id: 'javascript',
  title: 'javascript',
  percent: 70,
  color: 'warning',
});
addProgressBar({
  id: 'php',
  title: 'php',
  percent: 60,
  color: 'success',
});
addProgressBar({
  id: 'react',
  title: 'react',
  percent: 50,
  color: 'primary',
});
// * Fin ajout dynamique =============================================================================================

/**Récupère une barre de progression par son ID
 * @param {string} id - ID de la barre à récupérer
 * @returns {Object|null} La barre trouvée ou null
 */
export const getProgressBars = (id) => progressBars.find((data) => data.id === id);

export default progressBars;
