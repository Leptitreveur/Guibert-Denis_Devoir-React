import { NavLink } from "react-router-dom";
import { PropTypes } from 'prop-types'

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
// ! Mettre le nom avec la premiere letre en majuscule
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
    return(
        <li id = {id} className="nav-item">
            <NavLink to = {path} className="nav-link">
                {name}
            </NavLink>
        </li>
    )
}
NavbarBox.propTypes = {
    navId : PropTypes.string.isRequired
}

export const NavbarItems = ({ selectedIds, header=true }) => {
    const navClass = `${header ? "navbar-nav ms-auto app_navbar-nav" : ""}`;
    
    return(
        <ul className={navClass}>
            {!header && <h4 className="app_title-4">Liens utiles</h4>}
            {navbarLinks
                .filter(nav => !selectedIds|| selectedIds.includes(nav.id))
                .map(nav => (
                    <NavbarBox key ={nav.id} navId={nav.id} />
            ))
            }
        </ul>
    )
}
NavbarItems.propTypes = {
    selectedIds: PropTypes.arrayOf(PropTypes.string),
    header : PropTypes.bool
}