import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import { validateUrlFormat } from 'src/utils/validation/urlValidator';

/**
 * Carte de réalisation avec image, description et lien vers le projet
 *
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.cardData - Données de la réalisation
 * @param {string} props.cardData.id - Identifiant unique de la réalisation
 * @param {string} props.cardData.src - URL de l'image de la réalisation
 * @param {string} props.cardData.alt - Texte alternatif de l'image
 * @param {string} props.cardData.title - Titre de la réalisation
 * @param {string} props.cardData.description - Description du projet
 * @param {string} props.cardData.tools - Outils/technologies utilisés
 * @param {string} [props.cardData.link] - URL du projet (optionnel)
 * @param {Function} [props.registerElement] - Fonction pour enregistrer la ref de l'élément
 * @returns {JSX.Element} Carte bootstrap avec image, titre, description, bouton d'action et footer des outils
 */
export const PortfolioCard = ({ cardData, registerElement }) => {
  const cardRef = useRef(null);

  /**
   * Effet pour enregistrer la ref de l'élément pour le scroll automatique
   */
  useEffect(() => {
    if (registerElement && cardData?.id) {
      registerElement(cardData.id, cardRef.current);
    }
  }, [registerElement, cardData?.id]);

  if (!cardData) {
    return null;
  }

  const { id, src, alt, title, description, tools, link } = cardData;

  /**
   * Rendu conditionnel du lien selon la validité de l'URL
   */
  const renderLink = () => {
    const { isValid } = validateUrlFormat(link);

    if (isValid) {
      return (
        <a href={link} target="_blank" rel="noopenner noreferrer" className="btn btn-primary app-portfolio__btn">
          Voir la page
        </a>
      );
    } else {
      return (
        <Link to="#" className="btn btn-primary app-portfolio__btn">
          En création
        </Link>
      );
    }
  };

  return (
    <div className="col-12 gx-0 gy-3 gx-md-3">
      <div ref={cardRef} id={id} className="card text-center h-100 app-card--hover">
        <img src={src} alt={alt} className="card-img-top object-fit-cover app-h-15rem" loading="lazy" />

        <div className="card-body">
          <h2 className="card-title fw-bold">{title}</h2>
          <p className="card-text">{description}</p>
          {renderLink()}
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
    link: PropTypes.string,
  }).isRequired,
  registerElement: PropTypes.func,
};
