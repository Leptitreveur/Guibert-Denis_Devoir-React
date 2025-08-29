import { PropTypes } from 'prop-types';

/**
 * Titre avec description optionnelle et ligne décorative
 *
 * Composant de mise en page pour les titres de page avec description
 * optionnelle et une ligne décorative en dessous du titre.
 *
 * @param {Object} props - Propriétés du composant
 * @param {string} props.title - Titre principal à afficher
 * @param {string|boolean} [props.description] - Description optionnelle sous le titre
 * @returns {JSX.Element} Titre avec description et ligne décorative
 */
export function TitleLayout({ title, description }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mb-5 text-center">
      <h1 className="fw-bold">{title}</h1>
      {description && <p className="mb-4">{description}</p>}
      {/* Ligne décorative sous le titre */}
      <span className="app-h-6px app-w-30vw m-0 p-0 bg-primary" />
    </div>
  );
}

/**
 * Validation des propriétés du composant TitleLayout
 */
TitleLayout.propTypes = {
  /** Titre principal à afficher */
  title: PropTypes.string.isRequired,
  /** Description optionnelle sous le titre */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
