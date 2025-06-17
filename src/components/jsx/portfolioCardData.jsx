import PortfolioImages from 'jsx/imageAssets';

const portfolioCards = [];

const requiredFields = ["id", "alt", "title", "description", "tools", "link"];

const addPortfolio = (data) => {
    const { id } = data;

    // * Début de validation des données ============================================================================================
    let idErrors = [];

    if (!id || typeof id !== 'string') {
        console.warn(`Validation échouée: L'ID est manquant ou n'est pas une chaîne de caractères.`);
        return;
    }

    if (!/^[a-z0-9]+$/.test(id)) {
        idErrors.push("doit être en minuscules et sans caractères spéciaux (snake_case ou kebab-case non autorisés ici pour simplifier).");
    }

    if (idErrors.length > 0) {
        console.warn(`ID invalide ("${id}"):\n- ${idErrors.join('\n- ')}`);
        return;
    }

    if (!PortfolioImages[id]) {
        console.warn(`Validation échouée: Aucune image trouvée pour l'ID "${id}". Vérifiez que l'ID existe dans portfolioImages.js.`);
        return;
    }

    for (const field of requiredFields) {
        if (data[field] === undefined || data[field] === null) {
            console.warn(`Validation échouée: Le champ requis "${field}" est manquant pour le projet ID "${id}".`);
            return;
        }
    }
    // * Fin de validation ==========================================================================================================
    const formattedData = {
        id: data.id,
        src: PortfolioImages[data.id],
        alt: data.alt,
        title: data.title,
        description: data.description,
        tools: data.tools,
        link: data.link
    };

    portfolioCards.push(formattedData);
}

//* AJOUT DYNAMIQUE DE REALISATIONS =================================================================================================
addPortfolio({
    id : 'coder',
    alt : "Coder background",
    title : "Création d'une Api",
    description : "Création d'une API RESTFULL publique",
    tools : "PHP - SYMFONY",
    link : 'https://webtech.fr/blog/comment-creer-une-api/'
})
addPortfolio({
    id : 'wellbeing',
    alt :"Espace bien-être background",
    title : "Espace bien-être",
    description : "Site de reservation de soins ayurvediques",
    tools : "Site réalisé avec LARAVEL",
    link : 'https://www.duneeteau.fr/'
})
addPortfolio({
    id : 'freshfood',
    alt : "Freshfood background",
    title : "Fresh Food",
    description : "Site de vente de produits frais en ligne",
    tools : "Site réalisé avec PHP et MySQL",
    link : 'http://fr.freshfoodvillage.com/fresh_food_village.html'
})
addPortfolio({
    id : 'japrest',
    alt : "Restaurant japonais background",
    title : "Restaurant Akira",
    description : "Site de restaurant sur place ou à emporter",
    tools : "Réalisé avec WordPress",
    link : 'https://www.akirabackparis.com/fr/'
})
addPortfolio({
    id : 'screens',
    alt : "Screens background",
    title : "Maquette d'un site web",
    description : "Création d'un prototype d'un site",
    tools : "Réaliser avec FIGMA",
    link : 'https://www.figma.com/fr-fr/'
})
addPortfolio({
    id : 'seo',
    alt :"Seo background",
    title : "SEO",
    description : "Amélioration du référencement d'un site e-commerce",
    tools : "Utilisations des outils SEO",
    link : 'https://semji.com/fr/guide/seo/'
})
// *FIN D'AJOUT DYNAMIQUE #######################################################################################################

export const getPortfolioCards = (id) => portfolioCards.find(data =>data.id === id);

//* exportation faite du tableau une fois rempli
export default portfolioCards;