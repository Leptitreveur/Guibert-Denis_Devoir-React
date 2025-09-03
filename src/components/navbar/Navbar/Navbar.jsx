import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { useContextualStyle } from 'src/hooks/useContextualStyle';

/**
 * Élément de navigation individuel avec lien et styles contextuels
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
    <li data-id={id} {...getClassProps('lign', 'nav')}>
      <NavLink to={path} end={path === '/'} {...getClassProps('link', 'nav')}>
        <strong>{name}</strong>
      </NavLink>
    </li>
  );
};
Navbar.propTypes = {
  navData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
