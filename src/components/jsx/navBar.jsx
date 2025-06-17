import { PropTypes } from 'prop-types';
import { useContext, forwardRef } from 'react';
import { useFilteredData } from "hooks/useFilteredData";
import { FooterStyle } from 'jsx/footerContext.jsx';

import allNavbarLinks from 'jsx/navBarData.jsx'
import { NavbarBox } from 'jsx/navBarBox.jsx'

export const InnerNavbarLinkList = ({ selectedIds }, ref) => {

    const filteredCards = useFilteredData(allNavbarLinks, selectedIds, 'Navbar');

    const style = useContext(FooterStyle);
    const isFooterNavbar = `${style ? "app-footer__box app-footer__box--navbar": "collapse navbar-collapse app-collapse"}`;
    const isFooterId = style ? null : "navbarNav";
    const isFooterNav = `${style ? "app-footer__nav" : "navbar-nav ms-auto app-navbar__nav"}`;

    return(
        <fieldset className={isFooterNavbar} id={isFooterId} ref={ref}>

            {style && <legend className="app-footer__nav-legend">Liens utiles</legend>}

            <ul className={isFooterNav}>
                {filteredCards.map(data => (
                        <NavbarBox key ={data.id} navData={data} />
                ))
                }
            </ul>
        </fieldset>
    );
};

InnerNavbarLinkList.propTypes = {
    selectedIds: PropTypes.arrayOf(PropTypes.string),
}

export const NavbarLinkList = forwardRef(InnerNavbarLinkList);

NavbarLinkList.displayName = 'NavbarLinkList';