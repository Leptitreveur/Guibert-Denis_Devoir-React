3.1. Polices
    La police choisie est une police Google, sans-serif, dénommée « Nunito Sans ». Elle est
    implémentée avec une graisse de 400 pour le corps du texte et de 600 pour les titres et les
    balises <strong>.
    Les icônes utilisées sur les maquettes sont celles de Bootstrap : https://icons.getbootstrap.com

3.2.1. Logo
    Il s’agit d’un logo textuel, qui sera repris dans la zone navbar-brand de la barre de navigation
    de Bootstrap.

3.2.2. Favicon
    Le favicon est disponible sur le site Flaticon : https://www.flaticon.com/de/kostenlose-
    icons/john-doe

3.3. Palette de couleurs
    Les couleurs utilisées sur les maquettes sont celles disponibles avec Bootstrap, sans
    personnalisation : https://getbootstrap.com/docs/5.2/customize/color/

4.1. Contenu des pages
     1 Page d'accueil
        o Une image de fond en pleine page (Hero),
        o Des balises h1 et h2 centrées horizontalement par rapport à l'image,
        o Un bouton "En savoir plus" (voir § La Modale),
        Une section contenant la présentation de John Doe et la liste de ses compétences
        (progress bar Bootstrap),

     1 page de services
        o La présentation des offres de services que John Doe propose (sous forme de Card
        Bootstrap),
        o Chaque Card doit changer de couleur de fond (#efefef) et voir une légère ombre
        sur son pourtour au survol,
        o La disposition des Cards en fonction du media de visualisation est celui des
        maquettes fournies,

     1 page réalisations
        o Le portfolio de John Doe, avec un minimum de 6 projets, présentés sous forme
        de Card Bootstrap. Vous pouvez personnaliser et ajouter des réalisations si vous
        le souhaitez,
        o Chaque Card doit changer de couleur de fond (#efefef) et voir une légère ombre
        sur son pourtour au survol,
        o Le couleur de fond du bouton doit s'éclaircir légèrement au survol de celui-ci,
        o La disposition des Cards en fonction du media de visualisation est celui des
        maquettes fournies,

     1 page de contact
        o Un formulaire de contact intégrant les champs nom, courriel, numéro de
        téléphone, sujet et message (tous obligatoires).
        o Les coordonnées de John Doe : adresse, numéro de téléphone, mail et Google
        Map,

     1 page avec les mentions légales
        o L’éditeur du site,
        o L’hébergeur du site,
        o Les crédits, avec un lien vers le site de Pixabay pour les images et vers Flaticon
        pour le favicon,
        o La mise en page est réalisée en utilisant le composant accordéon de Bootstrap,
        o Cette page ne doit pas être indexée par les moteurs de recherche.
        importation

4.2. Sur tout le site
     Le header
        o Le header est présent sur toutes les pages,
        o Il reprend le logo à gauche et la navigation vers les pages à droite. Sur mobile et
        tablette, la navigation s’affiche sous forme d’icône de « hamburger »,
        o L’élément actif doit pouvoir être affiché dans une autre couleur ou nuance
        (https://reactrouter.com/en/main/components/nav-link),
        o Le texte des hyperliens est affiché en majuscule, en utilisant des règles CSS ou
        une classe Bootstrap,

     Le footer
        o Le footer est identique sur toutes les pages,
        o Il contient des colonnes de largeur égale :
        o La 1ère avec le nom du développeur, son adresse, son numéro de téléphone et les
        icônes vers ses réseaux professionnels (Github, Twitter et LinkedIn),

     Les icônes doivent être cliquables et mener vers les comptes que John
    Doe possède sur les différents réseaux. Leur couleur doit s’éclaircir au
    survol,

     Les liens doivent s’ouvrir dans une nouvelle fenêtre et ne doivent pas être
    suivis pour le SEO,
        o La 2 ème colonne reprend les liens vers les différentes pages,
        o La 3ème colonne reprend les liens vers les dernières réalisations (tant que les
        contenus de chaque réalisation ne sont pas disponibles, le lien se fera sur la page
        Portfolio,

     La modale
        o Une fenêtre modale doit permettre de présenter des éléments du profil GitHub
        de John Doe. Cette modale sera ouverte au clic sur le bouton "En savoir plus" du
        Hero de la page d'accueil,
        o Les informations sont disponibles ici : https://api.github.com/users/github-john-
        doe, Si vous préférez utiliser les informations de votre propre profil, libre à vous,
        o Les informations ne doivent être récupérées qu'une fois, au moment du
        chargement de la page (pensez à utilise le hook useEffect).

4.3. Effets graphiques
    Les effets suivants sont demandés (CSS) :
     Dans le menu du header
        o Le lien actif doit être mis en évidence (gras + souligné),
        o Les liens doivent être soulignés au survol,

     Cards
        o Une ombre doit être appliquée autour de la Card au survol,
        o La couleur de fond de la Card doit être modifiée au survol de la Card,

     Boutons
        o La couleur de fond des boutons doit s'assombrir au survol,

     Pied de page
        o Les images des réseaux sociaux doivent devenir blancs au survol,
        o Les liens du pied de page doivent passer en gras au survol.

    N'hésitez pas à utiliser des transitions CSS.

4.4. Quelques conseils
    Ce projet mobilise principalement deux compétences : Bootstrap et React. Sans un minimum
    d'organisation, vous risquez rapidement de vous perdre.

     Commencez par étudier les maquettes fournies :
        o Repérez les différences entre les 3 formats d'affichage,
        o Identifiez les parties qui peuvent être réalisées avec des composants réutilisables,
        o Réfléchissez aux imbrications possibles.
         En partant de l'étude des pages et des composants identifiés, réfléchissez à une structure
        de fichiers (arborescence) pratique afin d'éviter que tous vos composants se retrouvent
        dans le même dossier,

     Imaginez l'ordre dans lequel vous allez traiter les différents points et établissez un
    ordonnancement des tâches : cela vous donnera une base pour créer des issues sur
    GitHub

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//le style de la navbar viendra après
<nav class="navbar navbar-expand-lg bg-body-dark">
    <div>
    <p className="nav-brand>Jhon doe</p>
    <button class"navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
        <div className="className="collapse navbar-collapse" id="navbarSupportContent">
            <navitems/>
        </div>
    <navitems/>
    </div>
</nav>
export function NavItems(){
  return(
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item><NavLink to="/">Accueil</NavLink></li>
        <li className="nav-item><NavLink to="/services" >Services</NavLink></li>
        <li className="nav-item><NavLink to="/realisations" >Portfolio</NavLink></li>
        <li className="nav-item><NavLink to="/contact" >Contact</NavLink></li>
        <li className="nav-item><NavLink to="/legal-notice" >Mentions légales</NavLink></li>
      </ul>
  )
}




<header className="header-container">
        <div className="header-container__mobile">
          <h1 className="logo-container">jhon doe</h1>
          <span className="header-container__custom-icon">
            <i className="bi bi-list custom-icon"></i>
          </span>
        </div>

        <nav className="nav-container">
          <NavItems/>
        </nav>
</header>
export function NavItems(){
  return(
      <ul className="custom-list-before">
        <li ><NavLink to="/">Accueil</NavLink></li>
        <li ><NavLink to="/services" >Services</NavLink></li>
        <li ><NavLink to="/realisations" >Portfolio</NavLink></li>
        <li ><NavLink to="/contact" >Contact</NavLink></li>
        <li ><NavLink to="/legal-notice" >Mentions légales</NavLink></li>
      </ul>
  )
}
























++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
contacts
services
realisations

definition
container > subjetctBox > testList > subject > test1 > question1 : reponse1

container= []
subjectBox= {
    subject1  : [{question1 : reponse1}, {question 2 : reponse 2}, {question 3 : reponse 3}, {question 4 : reponse 4}, {question 5 : reponse 5}]
    subject2  : [{question1 : reponse1}, {question 2 : reponse 2}, {question 3 : reponse 3}, {question 4 : reponse 4}, {question 5 : reponse 5}]
    subject3  : [{question1 : reponse1}, {question 2 : reponse 2}, {question 3 : reponse 3}, {question 4 : reponse 4}, {question 5 : reponse 5}]
}

exemple de finalité :

Les informations sur l'id sont rangées par sujet et fournissent les erreurs rencontrées:
id >
    contact > (jhondo === jhondoe) = false, convention de nommage respecté
    contact > ( alwaysdata === alwaysdata) = true, convention de nommage respecté
    service > (ux-design === uxdesign) = false, [ caractères spéciaux ]convention de nommage non respectée
    ______________________________________________________________________________________________________

subjectBox = {}; //contact page

testList = []; //test à selectionner

addSubjetTest = () => {} // ajout dynamique des themes de test

IdTest = { //objet contenatnles différents test sur le theme de l'id
    same : !services.some(service => service.id === id),
    space: (/\s/.test(id)),
    empty: !id.trim(),
    specialcharacter : (/[!:;/*\-+]/.test(id)),
    snakecase: (!/^[a-z]*$/.test(id))
    }
