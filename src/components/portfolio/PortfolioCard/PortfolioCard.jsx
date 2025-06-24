import { PropTypes } from 'prop-types';

import './PortfolioCard.scss'

export const PortfolioCard = ({ cardData }) => {
  if (!cardData) {
    return null;
  }

  const { id, src, alt, title, description, tools, link } = cardData;

  return (
    <div className="app-card--portfolio__box card-hover">
      <div id={id} className="app-card--portfolio__box--upper">
        <div className="app-card--portfolio__box--inner">
          <div className="app-card--portfolio__box--image">
            <img src={src} alt={alt} className="app-card--portfolio__image" />
          </div>

          <div className="app-text__box--inner">
            <div>
              <h2 className="m-2 app-title--2">{title}</h2>
            </div>
            <div>
              <p className="m-1">{description}</p>
            </div>
          </div>
        </div>
        <div className="app-box--btn">
          <button type="button" className="btn btn-primary m-3" onClick={() => window.open(link, '_blank')}>
            Voir la page
          </button>
        </div>
      </div>

      <div className="app-card--portfolio__box--lower">
        <p className="m-0">{tools}</p>
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
