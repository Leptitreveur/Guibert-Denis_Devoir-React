import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { useContextualStyle } from 'src/hooks/useContextualStyle';

/**
 * Élément de navigation individuel avec lien et styles contextuels
 * Gère automatiquement l'état actif via React Router et applique les classes CSS appropriées
 *
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.navData - Données de navigation
 * @param {string} props.navData.id - Identifiant unique du lien
 * @param {string} props.navData.path - Chemin de la route
 * @param {string} props.navData.name - Nom affiché du lien
 * @returns {JSX.Element} Élément de navigation avec lien avec gestion d'état actif
 */
export const Navbar = ({ navData }) => {
  const { id, path, name } = navData;
  const { getClassProps } = useContextualStyle();

  const baseLinkClass = { ...getClassProps('link', 'nav') } ?.className || '';
  const linkClassName = ({isActive}) => {
    return [baseLinkClass, isActive && 'active'].filter(Boolean).join(' '); 
  }

  return (
    <li data-id={id} {...getClassProps('lign', 'nav')}>
      <NavLink to={path} end={path === '/'} className={linkClassName} >
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
