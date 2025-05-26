import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FooterStyle } from 'jsx/footer-context.jsx';

import { validateId } from 'jsx/errors-management.jsx';

import Coder from "portfolio/coder.jpg";
import EspaceBienEtre from "portfolio/espace-bien-etre.jpg";
import FreshFood from "portfolio/fresh-food.jpg";
import RestaurantJaponais from "portfolio/restaurant-japonais.jpg";
import Screens from "portfolio/screens.jpg";
import Seo from "portfolio/seo.jpg";

let realisations =[];

const requiredFields = ["id", "src", "alt", "title", "description", "tools", "link"  ];

const addRealisationDynamic = (rea) => {
    const formattedRealisations = {};
    requiredFields.forEach(field => {
        if ( field === 'id' && !validateId(rea[field])) {
            return;
        }
        formattedRealisations[field] = rea[field] || "non specified";
    })
    realisations.push(formattedRealisations);
}

//* AJOUT DYNAMIQUE DE REALISATIONS ##################################################################################################
addRealisationDynamic({
    id : 'coder',
    src : Coder,
    alt : "Coder background",
    title : "Création d'une Api",
    description : "Création d'une API RESTFULL publique",
    tools : "PHP - SYMFONY",
    link : 'https://webtech.fr/blog/comment-creer-une-api/'
})
addRealisationDynamic({
    id : 'bienetre',
    src : EspaceBienEtre,
    alt :"Espace bien-être background",
    title : "Espace bien-être",
    description : "Site de reservation de soins ayurvediques",
    tools : "Site réalisé avec LARAVEL",
    link : 'https://www.duneeteau.fr/'
})
addRealisationDynamic({
    id : 'freshfood',
    src : FreshFood,
    alt : "Freshfood background",
    title : "Fresh Food",
    description : "Site de vente de produits frais en ligne",
    tools : "Site réalisé avec PHP et MySQL",
    link : 'http://fr.freshfoodvillage.com/fresh_food_village.html'
})
addRealisationDynamic({
    id : 'restaujap',
    src : RestaurantJaponais,
    alt : "Restaurant japonais background",
    title : "Restaurant Akira",
    description : "Site de restaurant sur place ou à emporter",
    tools : "Réalisé avec WordPress",
    link : 'https://www.akirabackparis.com/fr/'
})
addRealisationDynamic({
    id : 'screens',
    src : Screens,
    alt : "Screens background",
    title : "Maquette d'une site web",
    description : "Création d'un prototype d'un site",
    tools : "Réaliser avec FIGMA",
    link : 'https://www.figma.com/fr-fr/'
})
addRealisationDynamic({
    id : 'seo',
    src : Seo,
    alt :"Seo background",
    title : "SEO",
    description : "Amélioration du référencement d'un site e-commerce",
    tools : "Utilisations des outils SEO",
    link : 'https://semji.com/fr/guide/seo/'
})
// *FIN D'AJOUT DYNAMIQUE #######################################################################################################

const getRealisationsById = (id) => realisations.find(rea =>rea.id === id) || { id : ""};

const BoxRea = ({cardid}) => {
    const {id, src, alt, title, description, tools, link} = getRealisationsById(cardid);

    return(
        <div className="reaCard card-hover">
            <div id = {id} className ="app_realisationCard-upperBox">

                <div className="app_realisationCard-innerBox">
                    <img src = {src} alt = {alt} className="app_reaCard-image"/>
                    <div className="innerBox-text">
                        <h2 className="m-2 app_title-2"><strong>{title}</strong></h2>
                        <p className="m-1">{description}</p>
                    </div>
                </div>

                <button type="button" className="btn btn-primary m-3"
                onClick={() => window.open(link, "_blank")}
                >Voir la page</button>
            </div>

            <div className="app_realisationCard-lowerBox">
                <p className="m-0">{tools}</p>
            </div>
        </div>
    )
}
BoxRea.propTypes = {
    cardid : PropTypes.string.isRequired
}

export const RealisationsList = ({selectedIds}) => {
    selectedIds.forEach(id => {
        if (!id.trim()) { // Si l'ID est vide ou uniquement des espaces
            console.log(`Value of <ContactList selectedIds = {["${id}"]} />`);
        }
        else if (!realisations.some(rea => rea.id === id)) {
            console.log(`Value of <ContactList selectedIds={["${id}"]} } /> does not match any existing ID in the contacts list.`);
        }
    });
    return (
        <div className="reaCardContainer">
            {realisations
                .filter(rea => !selectedIds || selectedIds.includes(rea.id))
                .map(rea => (
                    <BoxRea key={rea.id} cardid={rea.id} />
                ))}
        </div>
    );
}
RealisationsList.propTypes = {
    selectedIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

// *==============================================================================================
export function ReaFooterList () {
    const style = useContext(FooterStyle);
    const isFooter = `${style ? "footerBox footerBox-portfolio" : "" }`;
    return(
    <fieldset className={isFooter}>
        <legend className="footerList-legend">Mes dernières réalisations</legend>
        <ul className="footerList">
                {realisations.map(rea => (
                    <li key={rea.id} className="footerList-item">
                        <Link to={rea.link} target="_blank" rel="noopenner noreferrer" className="footerLink">
                            <strong>{rea.title}</strong>
                        </Link>
                    </li>
                ))}
        </ul>
    </fieldset>)
}
