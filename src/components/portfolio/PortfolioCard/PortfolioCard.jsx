import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import { validateUrlFormat } from 'src/utils/validation/urlValidator';

/**
 * Carte de réalisation avec image, description et lien vers le projet
 *
 * Affiche une carte de portfolio avec image, titre, description, outils utilisés
 * et un lien vers le projet. Le lien s'adapte selon la validité de l'URL :
 * lien externe si URL valide, lien interne "En création" sinon.
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
 *
 * @example
 * ```jsx
 * const cardData = {
 *   id: 'freshfood',
 *   src: '/images/fresh-food.jpg',
 *   alt: 'Freshfood background',
 *   title: 'Fresh Food',
 *   description: 'Site de vente de produits frais en ligne',
 *   tools: 'Site réalisé avec PHP et MySQL',
 *   link: 'http://fr.freshfoodvillage.com/fresh_food_village.html'
 * };
 *
 * <PortfolioCard
 *   cardData={cardData}
 *   registerElement={registerElement}
 * />
 * ```
 */
export const PortfolioCard = ({ cardData, registerElement }) => {
  const cardRef = useRef(null);

  /**
   * Effet pour enregistrer la ref de l'élément pour le scroll automatique
   * @description Enregistre la référence DOM de la carte pour permettre le scroll automatique via hash
   * @dependencies [registerElement, cardData?.id] - Se déclenche quand registerElement ou cardData.id change
   * @returns {void} Aucune valeur de retour
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
   * @returns {JSX.Element} Lien externe ou interne selon la validité
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

/**
 * Validation des propriétés du composant PortfolioCard
 */
PortfolioCard.propTypes = {
  /** Données de la réalisation */
  cardData: PropTypes.shape({
    /** Identifiant unique de la réalisation */
    id: PropTypes.string.isRequired,
    /** URL de l'image de la réalisation */
    src: PropTypes.string.isRequired,
    /** Texte alternatif de l'image */
    alt: PropTypes.string.isRequired,
    /** Titre de la réalisation */
    title: PropTypes.string.isRequired,
    /** Description du projet */
    description: PropTypes.string.isRequired,
    /** Outils/technologies utilisés */
    tools: PropTypes.string.isRequired,
    /** URL du projet (optionnel) */
    link: PropTypes.string,
  }).isRequired,
  /** Fonction pour enregistrer la ref de l'élément (optionnel) */
  registerElement: PropTypes.func,
};
