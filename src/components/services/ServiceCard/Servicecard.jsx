import { PropTypes } from 'prop-types';

/**Carte de service avec icône, titre et description.
 * @param {Object} cardData - { id, icon, title, text }
 */
export const ServiceCard = ({ cardData }) => {
  if (!cardData) {
    return null;
  }

  const { id, icon, title, text } = cardData;

  return (
    <div className="col-12 gx-0 gy-3 gx-md-3 gy-lg-0">
      <div className="card h-100">
        <div id={`${id.replace(/\s+/g, '-').toLowerCase()}`} className="card-body app-card--hover d-flex flex-column align-items-center justify-content-start w-100 h-100 border-0">
          <i className={`bi ${icon} card-img-top m-3 text-primary fs-2 text-center`}></i>
          <h3 className="card-title fw-bold text-center">{title}</h3>
          <p className="card-text text-center">{text}</p>
        </div>
      </div>
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
