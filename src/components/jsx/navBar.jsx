import { NavLink } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { useContext, forwardRef } from 'react';

import { FooterStyle } from 'jsx/footerContext.jsx';

const navbarLinks = [];

const requiredfields = ['id', 'path','name'];


// !Est ce que les donnée sont bel et bien formattées (formattedData)
function addLink (data){
    const formattedData = {};
    requiredfields.forEach(field => {
        if (data[field]){
            formattedData[field] = data[field];
        }
    });
    navbarLinks.push(formattedData);
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
    path :'/Services',
    name :'Services'
})
addLink({
    id : 'portfolio',
    path :'/Porftolio',
    name :'Portfolio'
})
addLink({
    id : 'contact',
    path :'/contact',
    name :'Contact'
})
addLink({
    id : 'legalnotice',
    path :'/LegalNotice',
    name :'Mentions légales'
})
//* FIN D'AJOUT DYNAMIQUE ##################################################################################################

const getNavbarLink = (id) => navbarLinks.find(nav => nav.id === id);

const NavbarBox = ({ dataId }) => {

    const { id, path, name } = getNavbarLink(dataId);

    const style = useContext(FooterStyle);
    const isFooterNavItem = `${style ? "app-footer__nav-item" : "app-navbar__nav-item"}`;
    const isFooterLink = `${style ? "app-footer__Link" : "app-navbar__link"}`;

    return(
        <li id = {id} className={isFooterNavItem}>
            <NavLink to = {path} className={isFooterLink}>
                {name}
            </NavLink>
        </li>
    )
}
NavbarBox.propTypes = {
    dataId : PropTypes.string.isRequired
}


export const NavbarLinkList = forwardRef(({ selectedIds }, ref) => {

    const style = useContext(FooterStyle);
    const isFooterNavbar = `${style ? "app-footer__box app-footer__box--navbar": "collapse navbar-collapse app-collapse"}`;
    const isFooterId = style ? null : "navbarNav";
    const isFooterNav = `${style ? "app-footer__nav" : "navbar-nav ms-auto app-navbar__nav"}`;

    return(
        <fieldset className={isFooterNavbar} id={isFooterId} ref={ref}>
            {style && <legend className="app-footer__nav-legend">Liens utiles</legend>}
            <ul className={isFooterNav}>
                {navbarLinks
                    .filter(nav => !selectedIds|| selectedIds.includes(nav.id))
                    .map(nav => (
                        <NavbarBox key ={nav.id} dataId={nav.id} />
                ))
                }
            </ul>
        </fieldset>
    );
});
NavbarLinkList.propTypes = {
    selectedIds: PropTypes.arrayOf(PropTypes.string),
}
NavbarLinkList.displayName = 'NavbarLinkList';