const navbarLinks = [];

const requiredFields = ["id", "path", "name"];

function addLink(data) {
  const linkData = {};

  for (const field of requiredFields) {
    if (data[field] === undefined || data[field] === null) {
      console.warn(
        `Incomplete value passed to navbarLinks. Missing value: "${field}"`
      );
      return;
    }
    linkData[field] = data[field];
  }
  navbarLinks.push(linkData);
}

//* AJOUT DYNAMIQUE DE LIEN DE NAVIGATION ##################################################################################
// ! Mettre le nom avec la premiere lettre en majuscule
addLink({
  id: "HomePage",
  path: "/",
  name: "Accueil",
});
addLink({
  id: "ServicesPage",
  path: "/ServicesPage",
  name: "ServicesPage",
});
addLink({
  id: "PortfolioPage",
  path: "/PortfolioPage",
  name: "PortfolioPage",
});
addLink({
  id: "ContactPage",
  path: "/ContactPage",
  name: "Contact",
});
addLink({
  id: "LegalNoticePage",
  path: "/LegalNoticePage",
  name: "Mentions légales",
});
//* FIN D'AJOUT DYNAMIQUE ##################################################################################################

export const getNavbarLinks = (id) =>
  navbarLinks.find((data) => data.id === id);

export default navbarLinks;
