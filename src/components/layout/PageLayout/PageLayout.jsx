import { PropTypes } from 'prop-types';

/**
 * Gabarit de page avec conteneur Bootstrap et grille responsive
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
      {beforeContent}
      <div className={`container d-flex justify-content-center w-auto my-5 ${classNameLv1}`}>
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
