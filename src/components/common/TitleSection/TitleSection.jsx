import { PropTypes } from 'prop-types';

/**
 * Titre de section aligné à gauche avec ligne décorative pleine largeur
 *
 * Composant pour afficher les titres de section avec un alignement à gauche
 * et une ligne décorative qui s'étend sur toute la largeur sous le titre.
 *
 * @param {Object} props - Propriétés du composant
 * @param {string} props.title - Titre de la section à afficher
 * @returns {JSX.Element} Titre de section avec ligne décorative
 */
export function TitleSection({ title }) {
  return (
    <div className="d-flex flex-column align-items-start justify-content-center w-100 mb-5">
      {' '}
      <h2 className="fw-bold pb-2">{title}</h2>
      {/* Ligne décorative sous le titre de section */}
      <span className="d-block w-100 app-h-4px bg-primary m-0 p-0" />
    </div>
  );
}

/**
 * Validation des propriétés du composant TitleSection
 */
TitleSection.propTypes = {
  /** Titre de la section à afficher */
  title: PropTypes.string.isRequired,
};
