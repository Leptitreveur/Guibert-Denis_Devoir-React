import { NavLink } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { useContext, forwardRef } from 'react';

import { FooterStyle } from 'jsx/footer-context.jsx';

const navbarLinks = [];

const requiredfields = ['id', 'path','name'];

function addLink (nav){
    const formattedpath = {};
    requiredfields.forEach(field => {
        if (nav[field]){
            formattedpath[field] = nav[field];
        }
    });
    navbarLinks.push(formattedpath);
}

//* AJOUT DYNAMIQUE DE LIEN DE NAVIGATION ##################################################################################
// ! Mettre le nom avec la premiere lettre en majuscule
addLink({
    id : 'home',
    path : '/',
    name : 'Accueil'
})
addLink({
    id : 'services',
    path :'/services',
    name :'Services'
})
addLink({
    id : 'realisation',
    path :'/realisations',
    name :'Portfolio'
})
addLink({
    id : 'contact',
    path :'/contact',
    name :'Contact'
})
addLink({
    id : 'legalnotcie',
    path :'/legal-notice',
    name :'Mentions légales'
})
//* FIN D'AJOUT DYNAMIQUE ##################################################################################################

const getNavbarLink = (id) => navbarLinks.find(nav => nav.id === id);

const NavbarBox = ({ navId }) => {

    const { id, path, name } = getNavbarLink(navId);

    const style = useContext(FooterStyle);
    const isFooterListItem = `${style ? "footerList-item" : "nav-item"}`;
    const isFooterLink = `${style ? "footerLink" : "nav-link"}`;

    return(
        <li id = {id} className={isFooterListItem}>
            <NavLink to = {path} className={isFooterLink}>
                {name}
            </NavLink>
        </li>
    )
}
NavbarBox.propTypes = {
    navId : PropTypes.string.isRequired
}


export const NavbarItems = forwardRef(({ selectedIds }, ref) => {

    const style = useContext(FooterStyle);
    const isFooterNavbar = `${style ? "footerBox footerBox-nav": "collapse navbar-collapse app_collapse"}`;
    const isFooterId = style ? null : "navbarNav";
    const isFooterNav = `${style ? "footerList" : "navbar-nav ms-auto app_navbar-nav"}`;

    return(
        <fieldset className={isFooterNavbar} id={isFooterId} ref={ref}>
            {style && <legend className="footerList-legend">Liens utiles</legend>}
            <ul className={isFooterNav}>
                {navbarLinks
                    .filter(nav => !selectedIds|| selectedIds.includes(nav.id))
                    .map(nav => (
                        <NavbarBox key ={nav.id} navId={nav.id} />
                ))
                }
            </ul>
        </fieldset>
    );
});
NavbarItems.propTypes = {
    selectedIds: PropTypes.arrayOf(PropTypes.string),
}
NavbarItems.displayName = 'NavbarItems';