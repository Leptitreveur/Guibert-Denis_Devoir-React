import { PropTypes } from 'prop-types'

let services = [];

const requiredFields = ["id", "icon", "title", "text" ];

const addServicesDynamics = (service) => {
    const formattedServices = {};
    requiredFields.forEach(fields => {
        formattedServices[fields] =  service[fields] || "non specified";
    })
    services.push(formattedServices);
}
//* AJOUT DYNAMIQUE DE SERVICES ##################################################################################################
addServicesDynamics({
    id : 'uxdesign',
    icon : <i className="bi bi-brush card-img-top" ></i>,
    title : "UX Design",
    text : "L'UX design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et la plus agréable possible."
})
addServicesDynamics({
    id : 'dev',
    icon : <i className="bi bi-code-slash card-img-top"></i>,
    title : "Developpement Web",
    text : "Le développement de site web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)"
})
addServicesDynamics({
    id : 'ref',
    icon : <i className="bi bi-search card-img-top"></i>,
    title : "Référencement",
    text : "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
})

// *FIN D'AJOUT DYNAMIQUE #######################################################################################################

const getServicesById = (id) => services.find(service => service.id === id) || { id : ""};

const BoxService = ({cardid}) => {
    const {id, icon, title, text} = getServicesById(cardid);

    return(
        <div id = {`${id.replace(/\s+/g, '-').toLowerCase()}`} className="card-body app_card-body card-hover">
            {icon}
            <h2 className="card-title fw-bold">{title}</h2>
            <p className="card-text">{text}</p>
        </div>
    )
}
BoxService.propTypes = {
    cardid : PropTypes.string.isRequired
}

export const ServicesList = ({ selectedIds }) => {
    selectedIds.forEach(id => {
        if (!id.trim()) { // Si l'ID est vide ou uniquement des espaces
            console.log(`Value of <ContactList selectedIds = {["${id}"]} />`);
        }
        else if (!services.some(service => service.id === id)) {
            console.log(`Value of <ContactList selectedIds={["${id}"]} /> does not match any existing ID in the contacts list.`);
        }
    });
    return (
        <div className="card app_cardContainer">
            {services
                .filter(service => !selectedIds || selectedIds.includes(service.id))
                .map(service => (
                    <BoxService key={service.id} cardid={service.id} />
                ))
            }
            </div>
    );
};
ServicesList.propTypes = {
    selectedIds : PropTypes.arrayOf(PropTypes.string)
};
