import { PropTypes } from 'prop-types';
import { useContext, forwardRef } from 'react';

// import './NavbarLinksList.scss';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allNavbarLinks from 'src/data/navbarLinks';
import { FooterStyle } from 'src/contexts/FooterContext';
import { Navbar } from 'src/components/navbar/Navbar/Navbar';

export const InnerNavbarLinkList = ({ selectedIds }, ref) => {
  const filteredCards = useFilteredData(allNavbarLinks, selectedIds, 'Navbar');

  const style = useContext(FooterStyle);
  const isFooterNavbar = `${style ? 'app-footer__box app-footer__box--navbar' : 'collapse navbar-collapse'}`;
  const isFooterId = style ? null : 'navbarNav';
  const isFooterNav = `${style ? 'app-footer__nav' : 'navbar-nav ms-auto app-navbar__nav'}`;

  return (
    <fieldset className={isFooterNavbar} id={isFooterId} ref={ref}>
      {style && <legend className="app-footer__nav-legend">Liens utiles</legend>}

      <ul className={isFooterNav}>
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
