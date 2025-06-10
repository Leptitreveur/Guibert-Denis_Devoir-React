import { PropTypes } from 'prop-types'

let services = [];

const requiredFields = ["id", "icon", "title", "text" ];

// ! Est ce que formattedData traite bel et bien des données formatées?
const addService = (data) => {
    const formattedData = {};
    requiredFields.forEach(fields => {
        formattedData[fields] =  data[fields] || "non specified";
    })
    services.push(formattedData);
}


// ! Modification necessaire de la valeur de la cle "icon" icon: bi-search ou bi-brush ou bi-code-slash la balise i ira dans le return de la fonction BoxService <i className=`bi ${icon} card-img-top></i>`
//* AJOUT DYNAMIQUE DE SERVICES ##################################################################################################
addService({
    id : 'uxdesign',
    icon : <i className="bi bi-brush card-img-top" ></i>,
    title : "UX Design",
    text : "L'UX design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et la plus agréable possible."
})
addService({
    id : 'dev',
    icon : <i className="bi bi-code-slash card-img-top"></i>,
    title : "Developpement Web",
    text : "Le développement de site web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)"
})
addService({
    id : 'ref',
    icon : <i className="bi bi-search card-img-top"></i>,
    title : "Référencement",
    text : "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
})

// *FIN D'AJOUT DYNAMIQUE #######################################################################################################

const getServices = (id) => services.find(data => data.id === id) || { id : ""};


const ServiceCardBox = ({dataId}) => {
    const {id, icon, title, text} = getServices(dataId);

    return(
        <div id = {`${id.replace(/\s+/g, '-').toLowerCase()}`} className="card-body app-card--service__body card-hover">
            {icon}
            <h2 className="card-title fw-bold">{title}</h2>
            <p className="card-text">{text}</p>
        </div>
    )
}
ServiceCardBox.propTypes = {
    dataId : PropTypes.string.isRequired
}

export const ServiceCardList = ({ selectedIds }) => {
    selectedIds.forEach(id => {
        if (!id.trim()) { // Si l'ID est vide ou uniquement des espaces
            console.log(`Value of <ContactCardList selectedIds = {["${id}"]} />`);
        }
        else if (!services.some(data => data.id === id)) {
            console.log(`Value of <ContactCardList selectedIds={["${id}"]} /> does not match any existing ID in the contacts list.`);
        }
    });

    return (
        <div className="card app-card--service__container">
            {services
                .filter(data => !selectedIds || selectedIds.includes(data.id))
                .map(data => (
                    <ServiceCardBox key={data.id} dataId={data.id} />
                ))
            }
            </div>
    );
};
ServiceCardList.propTypes = {
    selectedIds : PropTypes.arrayOf(PropTypes.string)
};
