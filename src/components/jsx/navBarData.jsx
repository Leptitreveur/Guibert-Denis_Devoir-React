const navbarLinks = [];

const requiredFields = ['id', 'path','name'];

function addLink (data){

    const linkData = {};

    for(const field of requiredFields){
        if(data[field] === undefined || data[field] === null){
            console.warn(`Incomplete value passed to navbarLinks. Missing value: "${field}"`);
            return;
        }
        linkData[field] = data[field];
    };
    navbarLinks.push(linkData);
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
    name :'Contact'
})
addLink({
    id : 'LegalNotice',
    path :'/LegalNotice',
    name :'Mentions légales'
})
//* FIN D'AJOUT DYNAMIQUE ##################################################################################################

export const getNavbarLinks = (id) => navbarLinks.find(data => data.id === id);

export default navbarLinks