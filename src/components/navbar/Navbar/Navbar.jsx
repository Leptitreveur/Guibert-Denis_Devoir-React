import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { useContextualStyle } from 'src/hooks/useContextualStyle';

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
Navbar.propTypes = {
  navData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
