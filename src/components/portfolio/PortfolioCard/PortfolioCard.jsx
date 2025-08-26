import { PropTypes } from 'prop-types';

/**Carte de réalisation avec image, description et lien vers le projet.
 * @param {Object} cardData - Données de la réalisation
 */
export const PortfolioCard = ({ cardData }) => {
  if (!cardData) {
    return null;
  }

  const { id, src, alt, title, description, tools, link } = cardData;

  return (
    <div className="col-12 gx-0 gy-3 gx-md-3">
      <div id={id} className="card text-center h-100 app-card--hover">
        <img src={src} alt={alt} className="card-img-top object-fit-cover app-h-15rem" loading="lazy" />

        <div className="card-body">
          <h2 className="card-title fw-bold">{title}</h2>
          <p className="card-text">{description}</p>
          <a href={link} target="_blank" rel="norefferer noopenner" className="btn btn-primary">
            Voir la page
          </a>
        </div>
        <div className="card-footer">{tools}</div>
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
