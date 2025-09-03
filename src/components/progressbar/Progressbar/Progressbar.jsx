import { PropTypes } from 'prop-types';

/**
 * Barre de progression Bootstrap avec titre et pourcentage
 *
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.barData - Données de la barre de progression
 * @param {string} props.barData.id - Identifiant unique de la barre
 * @param {string} props.barData.title - Titre de la compétence
 * @param {number} props.barData.percent - Pourcentage de maîtrise (0-100)
 * @param {string} props.barData.color - Couleur Bootstrap de la barre
 * @returns {JSX.Element|null} Barre de progression ou null si pas de données
 */
export const Progressbar = ({ barData }) => {
  if (!barData) {
    return null;
  }

  const { id, title, percent, color } = barData;

  return (
    <div>
      <h4 className="text-uppercase text-start">
        {title} {percent}%
      </h4>
      <div className="progress mb-3">
        <div id={id} className={`progress-bar bg-${color}`} style={{ width: `${percent}%` }} role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  );
};

Progressbar.propTypes = {
  barData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
