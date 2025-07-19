import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export const PortfolioCard = ({ cardData }) => {
  if (!cardData) {
    return null;
  }

  const { id, src, alt, title, description, tools, link } = cardData;

  return (
    <div className="col-12 gx-0 gy-3 gx-md-3">
        <div id={id} className="card text-center h-100">
          <img src={src} alt={alt} className="card-img-top object-fit-cover app-h-15.0rem" loading="lazy" />

          <div className="card-body">
            <h2 className="card-title fw-bold">{title}</h2>
            <p className="card-text">{description}</p>
            <Link to={link} target="_blank" rel="norefferer noopenner" className="btn btn-primary" >
              Voir la page
            </Link>
          </div>
          <div className="card-footer">
            {tools}
          </div>
        </div>
    </div>
  );
};
PortfolioCard.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
