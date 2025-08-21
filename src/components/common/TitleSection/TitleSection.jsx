import { PropTypes } from 'prop-types';

/** Titre de section aligné à gauche avec ligne décorative pleine largeur.
 * @param {string} title
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

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
};
