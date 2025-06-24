import { PropTypes } from 'prop-types';

import './ServiceCard.scss';

export const ServiceCard = ({ cardData }) => {
  if (!cardData) {
    return null;
  }

  const { id, icon, title, text } = cardData;

  return (
    <div id={`${id.replace(/\s+/g, '-').toLowerCase()}`} className="card-body card-hover app-card--service__body">
      <i className={`bi ${icon} card-img-top`}></i>
      <h2 className="card-title fw-bold">{title}</h2>
      <p className="card-text">{text}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
