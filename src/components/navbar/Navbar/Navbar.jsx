import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { useContextualStyle } from 'src/hooks/useContextualStyle';

export const Navbar = ({ navData }) => {
  const { id, path, name } = navData;
  const style = useContextualStyle();

  return (
    <li id={id} className={style.getNavLign()}>
      <NavLink to={path} className={style.getNavLink()}>
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
