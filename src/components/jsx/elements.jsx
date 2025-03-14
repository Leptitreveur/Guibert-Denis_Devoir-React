import PropTypes from "prop-types";

// Importation d'images Portofolio
// =======================================================================================================
import Coder from "@/coder.jpg"
import Espacebienetre from "@/espace-bien-etre.jpg"
import Freshfood from "@/fresh-food.jpg"
import Restaurantjaponais from "@/restaurant-japonais.jpg"
import Screens from "@/screens.jpg"
import Seo from "@/seo.jpg"

// =======================================================================================================
import { CiMap } from "react-icons/ci"
import { CgSmartphone } from "react-icons/cg";
import { BsEnvelopeAt } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { TfiWorld } from "react-icons/tfi";
// Selecteur de carte partielement prérempli
// =======================================================================================================
export function Cardselector ({selector}){
    const getCards = (selector) => {
        switch (selector){
            case 1 :
                return {
                    src : Coder,
                    alt : "Coder background",
                    title : "Création d'une Api",
                    description : "Création d'une API RESTFULL publique",
                    donewith : "PHP - SYMFONY"
                }
                case 2 :
                    return {
                        src : Espacebienetre,
                        alt :"Espace bien-être background",
                        title : "Espace bien-être",
                        description : "Site de reservation de soins ayurvediques",
                        donewith : "Site réalisé avec LARAVEL"
                    }
                    case 3 :
                        return {
                            src : Freshfood,
                            alt : "Freshfood background",
                            title : "Fresh Food",
                            description : "Site de vente de produits frais en ligne",
                            donewith : "Site réalisé avec PHP et MySQL"
                        }
                        case 4 :
                            return {
                                src : Restaurantjaponais,
                                alt : "Restaurant japonais background",
                                title : "Restaurant Akira",
                                description : "Site de restaurant sur place ou à emporter",
                                donewith : "Réalisé avec WordPress"
                            }
                            case 5 :
                                return {
                                    src : Screens,
                                    alt : "Screens background",
                                    title : "Maquette d'une site web",
                                    description : "Création d'un prototype d'un site",
                                    donewith : "Réaliser avec FIGMA"
                                }
                                case 6 :
                                    return {
                                        src : Seo,
                                        alt :"Seo background",
                                        title : "SEO",
                                        description : "Amélioration du référencement d'un site e-commerce",
                                        donewith : "Utilisations des outils SEO"
                                    }
                                    default :
                                    return {
                                        src : "",
                                        alt : "image non trouvée",
                                        title : "titre non trouvé",
                                        description : "description non trouvée",
                                        donewith : "descritption non trouvée"
                                    }
                                }
                            }
                            const {src, alt, title, description, donewith} = getCards (selector);

    return(
        <div className="m-3">
            <div className="d-flex flex-column justify-content-center align-items-center m-0 p-0 border border-bottom-0 rounded-top overflow-hidden">
                <img src = {src} alt = {alt} className="w-100"/>

                <div className="d-flex flex-column justify-content-center align-items-center m-2 p-0">
                    <h2 className="m-2">{title}</h2>
                    <p className="m-1">{description}</p>
                </div>

                <button type="button" className="btn btn-primary w-25 mb-3">Voir la page</button>
            </div>

            <div className="d-flex flex-row justify-content-center align-items-center w-100 bg-light border rounded-bottom" style={{height : '3rem'}}>
                <p className="m-0">{donewith}</p>
            </div>
        </div>
    )
}

Cardselector.propTypes ={
    selector : PropTypes.number.isRequired
}

// ======================================================================================================
export function Cardlist() {
    
    const selectors = [1, 2, 3, 4, 5, 6];
    
    return(
        <div className="">
            {selectors.map((selector) => (
                <Cardselector key = {`card-${selector}`} selector = {selector}/>
            ))}
        </div>
    )
}
// ======================================================================================================

export function Presentation({title, description}) {
    return(
        <div className="d-flex flex-column justify-content-center align-items-center m-5">
            <h1 className="fw-bold">{title}</h1>
            {description && <p>{description}</p>}
            <span className="m-0 mt-3 p-0 bg-primary opacity-100" style={{height : '0.4rem', width :'8rem'}} />
        </div>
    )
}

Presentation.propTypes ={
    title : PropTypes.string.isRequired,
    description : PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

// =======================================================================================================

export function Sectiontitle({title}) {
    return(
        <div className="d-flex flex-column justify-content-center align-items-start mb-4">
            <h2 className="fw-bold mb-3">{title}</h2>
            <span className="m-0 p-0 bg-primary opacity-100 w-100" style={{height : '5px'}} />
        </div>
    )
}

Sectiontitle.propTypes ={
    title : PropTypes.string.isRequired
}

// =======================================================================================================

export function Coordonate({showicon}) {
    return(
        <div className = "mb-3">
            <h4 className="strong">Jhon Doe</h4>
            <p className = "m-0 p-0"> {showicon && <CiMap />} 40 rue laure Diebold</p>
            <p className = "m-0 p-0"> {showicon && <SlLocationPin />} 69009 Lyon, France</p>
            <p className = "m-0 p-0"> {showicon && <CgSmartphone />} 10 20 30 40 50</p>
            <p className = "m-0 p-0"> {showicon && <BsEnvelopeAt />} jhon.doe@gmail.com</p>
        </div>
    )
}
Coordonate.propTypes = {
    showicon : PropTypes.bool.isRequired
}
// =======================================================================================================
export function Coordonatehost({showicon}) {
    return(
        <div className = "mb-3">
            <h4 className="strong">alwaysdata</h4>
            <p className = "m-0 p-0"> 91 rue du Faubourg Saint-Honoré</p>
            <p className = "m-0 p-0"> 75008 Paris</p>
            <p className = "m-0 p-0"> {showicon && <TfiWorld />} www.alwaysdata.com</p>
        </div>
    )
}
Coordonatehost.propTypes = {
    showicon : PropTypes.bool.isRequired
}
// =======================================================================================================





export function Detailsaccordion({ title, text, id }){
    return(
        <div className = "accordion " id = "legalnotice">
            <div className ="accordion-item ">
                <h2 className="accordion-header ">
                    <button 
                            className="accordion-button"
                            type = "button"
                            data-bs-toggle = "collapse"
                            data-bs-target = {`#collapse${id}`}
                            aria-expanded = "true"
                            aria-controls = {`collapse${id}`}
                    >
                        {title}
                    </button>
                </h2>
                <div id = {`collapse${id}`} className="accordion-collapse collapse show" data-bs-parent ="#legalnotice" >
                    <div className="accordion-body">
                       {text}
                    </div>
                </div>
            </div>
        </div>
    )
}
Detailsaccordion.propTypes = {
    title : PropTypes.string.isRequired,
    text : PropTypes.node.isRequired,
    id : PropTypes.string.isRequired
}

