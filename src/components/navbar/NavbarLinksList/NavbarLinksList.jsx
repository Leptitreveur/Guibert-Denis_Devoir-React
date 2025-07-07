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
  const isFooterNavbar = style ? 'app-footer__box' : 'collapse navbar-collapse';
  const isFooterId = style ? null : 'navbarNav';
  const isFooterNav = style ? null : 'navbar-nav ms-auto gap-1';

  return (
    <fieldset className={isFooterNavbar} id={isFooterId} ref={ref}>
      {style && <legend className="mb-1 fw-bold ">Liens utiles</legend>}

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
