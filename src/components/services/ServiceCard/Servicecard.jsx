import { PropTypes } from 'prop-types';

/**
 * Carte de service avec icône, titre et description
 *
 * Composant de carte affichant un service avec son icône Bootstrap,
 * son titre et sa description. Utilise une grille responsive et
 * inclut des effets de survol pour améliorer l'expérience utilisateur.
 *
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.cardData - Données du service à afficher
 * @param {string} props.cardData.id - Identifiant unique du service
 * @param {string} props.cardData.icon - Classe CSS de l'icône Bootstrap
 * @param {string} props.cardData.title - Titre du service
 * @param {string} props.cardData.text - Description du service
 * @returns {JSX.Element|null} Carte de service ou null si pas de données
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

/**
 * Validation des propriétés du composant ServiceCard
 */
ServiceCard.propTypes = {
  /** Données du service à afficher */
  cardData: PropTypes.shape({
    /** Identifiant unique du service */
    id: PropTypes.string.isRequired,
    /** Classe CSS de l'icône Bootstrap */
    icon: PropTypes.string.isRequired,
    /** Titre du service */
    title: PropTypes.string.isRequired,
    /** Description du service */
    text: PropTypes.string.isRequired,
  }).isRequired,
};
