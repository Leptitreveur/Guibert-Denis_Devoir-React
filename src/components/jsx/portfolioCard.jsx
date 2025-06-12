import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { FooterStyle } from 'jsx/footerContext.jsx';
import { validateId } from 'jsx/errorHandling.jsx';

// ! Déplacer l'importation dans le fichier imagesAsstes.jsx
import Coder from "portfolio/coder.jpg";
import EspaceBienEtre from "portfolio/espace-bien-etre.jpg";
import FreshFood from "portfolio/fresh-food.jpg";
import RestaurantJaponais from "portfolio/restaurant-japonais.jpg";
import Screens from "portfolio/screens.jpg";
import Seo from "portfolio/seo.jpg";

let portfolioCards =[];

const requiredFields = ["id", "src", "alt", "title", "description", "tools", "link"  ];

// ! est ce que formattedData recoit bien des donnée formatées?
const addPortfolio = (data) => {
    const formattedData = {};
    requiredFields.forEach(field => {
        if ( field === 'id' && !validateId(data[field])) {
            return;
        }
        formattedData[field] = data[field] || "non specified";
    })
    portfolioCards.push(formattedData);
}

//* AJOUT DYNAMIQUE DE REALISATIONS ##################################################################################################
addPortfolio({
    id : 'coder',
    src : Coder,
    alt : "Coder background",
    title : "Création d'une Api",
    description : "Création d'une API RESTFULL publique",
    tools : "PHP - SYMFONY",
    link : 'https://webtech.fr/blog/comment-creer-une-api/'
})
addPortfolio({
    id : 'bienetre',
    src : EspaceBienEtre,
    alt :"Espace bien-être background",
    title : "Espace bien-être",
    description : "Site de reservation de soins ayurvediques",
    tools : "Site réalisé avec LARAVEL",
    link : 'https://www.duneeteau.fr/'
})
addPortfolio({
    id : 'freshfood',
    src : FreshFood,
    alt : "Freshfood background",
    title : "Fresh Food",
    description : "Site de vente de produits frais en ligne",
    tools : "Site réalisé avec PHP et MySQL",
    link : 'http://fr.freshfoodvillage.com/fresh_food_village.html'
})
addPortfolio({
    id : 'restaujap',
    src : RestaurantJaponais,
    alt : "Restaurant japonais background",
    title : "Restaurant Akira",
    description : "Site de restaurant sur place ou à emporter",
    tools : "Réalisé avec WordPress",
    link : 'https://www.akirabackparis.com/fr/'
})
addPortfolio({
    id : 'screens',
    src : Screens,
    alt : "Screens background",
    title : "Maquette d'un site web",
    description : "Création d'un prototype d'un site",
    tools : "Réaliser avec FIGMA",
    link : 'https://www.figma.com/fr-fr/'
})
addPortfolio({
    id : 'seo',
    src : Seo,
    alt :"Seo background",
    title : "SEO",
    description : "Amélioration du référencement d'un site e-commerce",
    tools : "Utilisations des outils SEO",
    link : 'https://semji.com/fr/guide/seo/'
})
// *FIN D'AJOUT DYNAMIQUE #######################################################################################################

const getPortfolioCards = (id) => portfolioCards.find(data =>data.id === id) || { id : ""};

const PortfolioCardBox = ({dataId}) => {
    const {id, src, alt, title, description, tools, link} = getPortfolioCards(dataId);

    return(
        <div className="app-card--portfolio__box card-hover">
            <div id = {id} className ="app-card--portfolio__box--upper">

                <div className="app-card--portfolio__box--inner">
                    <div className="app-card--portfolio__box--image">
                        <img src = {src} alt = {alt} className="app-card--portfolio__image"/>
                    </div>

                    <div className="app-text__box--inner">
                        <div>
                            <h2 className="m-2 app-title--2">{title}</h2>
                        </div>
                        <div>
                            <p className="m-1">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="app-box--btn">
                    <button
                    type="button"
                    className="btn btn-primary m-3"
                    onClick={() => window.open(link, "_blank")}
                    >
                        Voir la page
                    </button>
                </div>
            </div>

            <div className="app-card--portfolio__box--lower">
                <p className="m-0">{tools}</p>
            </div>
        </div>
    )
}
PortfolioCardBox.propTypes = {
    dataId : PropTypes.string.isRequired
}

export const PortfolioCardList = ({selectedIds}) => {
    selectedIds.forEach(id => {
        if (!id.trim()) { // Si l'ID est vide ou uniquement des espaces
            console.log(`Value of <ContactCardList selectedIds = {["${id}"]} />`);
        }
        else if (!portfolioCards.some(data => data.id === id)) {
            console.log(`Value of <ContactCardList selectedIds={["${id}"]} } /> does not match any existing ID in the contacts list.`);
        }
    });

    return (
        <div className="app-card--portfolio__container">
            {portfolioCards
                .filter(data => !selectedIds || selectedIds.includes(data.id))
                .map(data => (
                    <PortfolioCardBox key={data.id} dataId={data.id} />
                ))}
        </div>
    );
}
PortfolioCardList.propTypes = {
    selectedIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

// *==============================================================================================
export function PortfolioLinkList () {
    const style = useContext(FooterStyle);
    const isFooter = style ? "app-footer__box app-footer__box--portfolio" : null;

    return(
    <fieldset className={isFooter}>
        <legend className="app-footer__nav-legend">Mes dernières réalisations</legend>
        <ul className="app-footer__nav">
                {portfolioCards.map(data => (
                    <li key={data.id} className="app-footer__nav-item">
                        <Link to={data.link} target="_blank" rel="noopenner noreferrer" className="app-footer__link">
                            <strong>{data.title}</strong>
                        </Link>
                    </li>
                ))}
        </ul>
    </fieldset>)
}
