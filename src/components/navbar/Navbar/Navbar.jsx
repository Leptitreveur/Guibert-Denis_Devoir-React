import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

import { FooterStyle } from 'src/contexts/FooterContext';

export const Navbar = ({ navData }) => {
  const { id, path, name } = navData;

  const style = useContext(FooterStyle);
  const isFooterNavItem = `${style ? 'app-footer__nav-item' : 'app-navbar__nav-item'}`;
  const isFooterLink = `${style ? 'app-footer__Link' : 'app-navbar__link'}`;

  return (
    <li id={id} className={isFooterNavItem}>
      <NavLink to={path} className={isFooterLink}>
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
