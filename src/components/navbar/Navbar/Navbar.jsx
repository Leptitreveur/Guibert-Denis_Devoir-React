import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { useContextualStyle } from 'src/hooks/useContextualStyle';

/**
 * Élément de navigation individuel avec lien et styles contextuels
 *
 * Composant de navigation affichant un lien individuel avec adaptation
 * automatique des styles selon le contexte (footer ou navbar).
 * Utilise le hook useContextualStyle pour l'adaptation des styles.
 *
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.navData - Données de navigation
 * @param {string} props.navData.id - Identifiant unique du lien
 * @param {string} props.navData.path - Chemin de la route
 * @param {string} props.navData.name - Nom affiché du lien
 * @returns {JSX.Element} Élément de navigation avec lien
 */
export const Navbar = ({ navData }) => {
  const { id, path, name } = navData;
  const { getClassProps } = useContextualStyle();

  return (
    <li id={id} {...getClassProps('lign', 'nav')}>
      <NavLink to={path} {...getClassProps('link', 'nav')}>
        <strong>{name}</strong>
      </NavLink>
    </li>
  );
};

/**
 * Validation des propriétés du composant Navbar
 */
Navbar.propTypes = {
  /** Données de navigation */
  navData: PropTypes.shape({
    /** Identifiant unique du lien */
    id: PropTypes.string.isRequired,
    /** Chemin de la route */
    path: PropTypes.string.isRequired,
    /** Nom affiché du lien */
    name: PropTypes.string.isRequired,
  }).isRequired,
};
