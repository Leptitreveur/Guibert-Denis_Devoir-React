import { PropTypes } from "prop-types";
import { useContext, forwardRef } from "react";

import allNavbarLinks from "data/navbarLinks";
import { useFilteredData } from "hooks/useFilteredData";
import { FooterStyle } from "contexts/FooterContext";
import { Navbar } from "navbar/Navbar/Navbar";

export const InnerNavbarLinkList = ({ selectedIds }, ref) => {
  const filteredCards = useFilteredData(allNavbarLinks, selectedIds, "Navbar");

  const style = useContext(FooterStyle);
  const isFooterNavbar = `${
    style
      ? "app-footer__box app-footer__box--navbar"
      : "collapse navbar-collapse app-collapse"
  }`;
  const isFooterId = style ? null : "navbarNav";
  const isFooterNav = `${
    style ? "app-footer__nav" : "navbar-nav ms-auto app-navbar__nav"
  }`;

  return (
    <fieldset className={isFooterNavbar} id={isFooterId} ref={ref}>
      {style && (
        <legend className="app-footer__nav-legend">Liens utiles</legend>
      )}

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

export const NavbarLinkList = forwardRef(InnerNavbarLinkList);

NavbarLinkList.displayName = "NavbarLinkList";
