import { PropTypes } from 'prop-types';

/**
 * Titre de section aligné à gauche avec ligne décorative pleine largeur
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
      <span className="d-block w-100 app-h-4px bg-primary m-0 p-0" />
    </div>
  );
}

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
};
