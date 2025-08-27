import { PropTypes } from 'prop-types';

/** Gabarit de page: conteneur Bootstrap + grille + contenu.
 * @param {ReactNode} beforeContent - contenu avant la grille
 * @param {string} [tagName='div'] - élément HTML à utiliser pour la grille
 * @param {string} [classNameLv1=''] - classes CSS additionnelles pour le conteneur principal
 * @param {string} [classNameLv2=''] - classes CSS additionnelles pour la grille
 * @param {ReactNode} children - contenu principal de la page
 * @returns {JSX.Element} Composant de mise en page avec grille Bootstrap
 */
export function PageLayout({ beforeContent, tagName = 'div', classNameLv1 = '', classNameLv2 = '', children }) {
  const Tag = tagName;

  return (
    <>
      {/* beforeContent (ex: bannière) */}
      {beforeContent}
      {/* Conteneur principal */}
      <div className={`container d-flex justify-content-center w-auto my-5 ${classNameLv1}`}>
        {/* Grille responsive + rendu des children */}
        <Tag className={`row app-w-90vw app-w-md-85vw ${classNameLv2}`}>
          {children}
        </Tag>
      </div>
    </>
  );
}
PageLayout.propTypes = {
  beforeContent: PropTypes.node,
  tagName: PropTypes.string,
  classNameLv1: PropTypes.string,
  classNameLv2: PropTypes.string,
  children: PropTypes.node.isRequired,
};
