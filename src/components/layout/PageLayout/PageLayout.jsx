import { PropTypes } from 'prop-types';

/** Gabarit de page: conteneur Bootstrap + grille + contenu.
 * @param {ReactNode} beforeContent - contenu avant la grille
 */
export function PageLayout({ beforeContent, classNameLv1 = '', classNameLv2 = '', children }) {
  return (
    <>
      {/* beforeContent (ex: bannière) */}
      {beforeContent}
      {/* Conteneur principal */}
      <div className={`container d-flex justify-content-center w-auto my-5 ${classNameLv1}`}>
        {/* Grille responsive + rendu des children */}
        <div className={`row app-w-90vw app-w-md-85vw ${classNameLv2}`}>{children}</div>
      </div>
    </>
  );
}
PageLayout.propTypes = {
  beforeContent: PropTypes.node,
  classNameLv1: PropTypes.string,
  classNameLv2: PropTypes.string,
  children: PropTypes.node.isRequired,
};
