import { PropTypes } from 'prop-types';

/** Barre de progression Bootstrap avec titre et pourcentage.
 * @param {Object} barData - { id, title, percent, color }
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
        <div id={id} className={`progress-bar bg-${color}`} style={{ width: `${percent}%` }} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100"></div>
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
