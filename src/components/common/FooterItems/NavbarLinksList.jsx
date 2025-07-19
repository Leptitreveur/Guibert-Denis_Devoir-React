import { PropTypes } from 'prop-types';
import { forwardRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import allNavbarLinks from 'src/data/navbarLinks';
import { useFilteredData } from 'src/hooks/useFilteredData';
import { Navbar } from 'src/components/navbar/Navbar/Navbar';

const Navbar = ({ navData }) => {
  const { id, path, name } = navData;

  return (
    <li id={id} className=''>
      <NavLink to={path} className=''>
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
// ======================================================================

export const InnerNavbarLinkList = ({ selectedIds }, ref) => {
  const filteredCards = useFilteredData(allNavbarLinks, selectedIds, 'Navbar');

  return (
    <fieldset className='' ref={ref}>
      <legend className=''>Liens utiles</legend>
      <ul className=''>
        {filteredCards.map((data) => (
          <Navbar key={data.id} navData={data} />
        ))}
      </ul>
    </fieldset>
  );
};

InnerNavbarLinkList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};

export const NavbarLinksList = forwardRef(InnerNavbarLinkList);

NavbarLinksList.displayName = 'NavbarLinksList';
