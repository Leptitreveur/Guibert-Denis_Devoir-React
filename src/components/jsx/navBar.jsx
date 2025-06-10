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
    id : 'Home',
    path : '/',
    name : 'Accueil'
})
addLink({
    id : 'Services',
    path :'/Services',
    name :'Services'
})
addLink({
    id : 'Portfolio',
    path :'/Portfolio',
    name :'Portfolio'
})
addLink({
    id : 'ContactForm',
    path :'/ContactForm',
    name :'ContactForm'
})
addLink({
    id : 'LegalNotice',
    path :'/LegalNotice',
    name :'Mentions légales'
})
//* FIN D'AJOUT DYNAMIQUE ##################################################################################################

const getNavbarLinks = (id) => navbarLinks.find(data => data.id === id);

const NavbarBox = ({ dataId }) => {

    const { id, path, name } = getNavbarLinks(dataId);

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
                    .filter(data => !selectedIds|| selectedIds.includes(data.id))
                    .map(data => (
                        <NavbarBox key ={data.id} dataId={data.id} />
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