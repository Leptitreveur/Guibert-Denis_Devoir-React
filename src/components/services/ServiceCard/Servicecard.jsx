import { PropTypes } from 'prop-types';

// import './ServiceCard.scss';

export const ServiceCard = ({ cardData }) => {
  if (!cardData) {
    return null;
  }

  const { id, icon, title, text } = cardData;

  return (
    <div className="col-12 col-sm-10 col-md-7 col-lg-3">
      <div id={`${id.replace(/\s+/g, '-').toLowerCase()}`} className="card-body app-card--hover d-flex flex-column align-items-center h-100  border rounded ">
        <i className={`bi ${icon} card-img-top m-3 text-primary fs-2 text-center`}></i>
        <h2 className="card-title fw-bold text-center">{title}</h2>
        <p className="card-text text-center">{text}</p>
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
