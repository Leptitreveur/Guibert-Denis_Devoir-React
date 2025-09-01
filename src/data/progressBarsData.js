const progressBars = [];

const requieredFields = ['id', 'title', 'percent', 'color'];

const bootstrapColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

/**
 * Ajoute une barre de progression avec validation
 *
 * @param {Object} data - Données de la barre à ajouter
 * @param {string} data.id - Identifiant unique de la barre
 * @param {string} data.title - Titre de la compétence
 * @param {number} data.percent - Pourcentage de maîtrise (0-100)
 * @param {string} data.color - Couleur Bootstrap de la barre
 */
const addProgressBar = (data) => {
  for (const field of requieredFields) {
    if (data[field] === undefined || data[field] === null) {
      console.warn(`Validation échouée: La propriété requise "${field}" est manquante. Données reçues:`, data);
      return;
    }
  }

  const { percent } = data;
  if (typeof percent !== 'number' || percent < 0 || percent > 100) {
    console.warn(`Validation échouée: La propriété "percent" doit être un nombre entre 0 et 100. Reçu: ${percent}`);
    return;
  }

  const { color } = data;
  if (!bootstrapColors.includes(color)) {
    console.warn(`Validation échouée: La couleur "${color}" n'est pas une couleur Bootstrap valide. Valides: ${bootstrapColors.join(', ')}`);
    return;
  }

  const formattedData = {
    id: data.id,
    title: data.title,
    percent: data.percent,
    color: data.color,
  };

  progressBars.push(formattedData);
};

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

/**
 * Récupère une barre de progression par son ID
 *
 * @param {string} id - ID de la barre à récupérer
 * @returns {Object|null} La barre trouvée ou null si non trouvée
 */
export const getProgressBars = (id) => progressBars.find((data) => data.id === id);

export default progressBars;
