import { PropTypes } from 'prop-types';

/**
 * Gabarit de page avec conteneur Bootstrap et grille responsive
 *
 * Composant de mise en page fournissant une structure standardisée pour
 * toutes les pages avec conteneur Bootstrap, grille responsive et gestion
 * du contenu avant et principal.
 *
 * @param {Object} props - Propriétés du composant
 * @param {ReactNode} [props.beforeContent] - Contenu à afficher avant la grille (ex: bannière)
 * @param {string} [props.tagName='div'] - Élément HTML à utiliser pour la grille
 * @param {string} [props.classNameLv1=''] - Classes CSS additionnelles pour le conteneur principal
 * @param {string} [props.classNameLv2=''] - Classes CSS additionnelles pour la grille
 * @param {ReactNode} props.children - Contenu principal de la page
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
        <Tag className={`row app-w-90vw app-w-md-85vw ${classNameLv2}`}>{children}</Tag>
      </div>
    </>
  );
}

/**
 * Validation des propriétés du composant PageLayout
 */
PageLayout.propTypes = {
  /** Contenu à afficher avant la grille (ex: bannière) */
  beforeContent: PropTypes.node,
  /** Élément HTML à utiliser pour la grille */
  tagName: PropTypes.string,
  /** Classes CSS additionnelles pour le conteneur principal */
  classNameLv1: PropTypes.string,
  /** Classes CSS additionnelles pour la grille */
  classNameLv2: PropTypes.string,
  /** Contenu principal de la page */
  children: PropTypes.node.isRequired,
};
