import { PropTypes } from 'prop-types';

// import './Progressbar.scss';

export const Progressbar = ({ barData }) => {
  if (!barData) {
    return null;
  }

  const { id, title, percent, color } = barData;

  return (
    <div>
      <h3 className="text-uppercase text-start">
        {title} {percent}%
      </h3>
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
