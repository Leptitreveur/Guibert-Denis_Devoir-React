// import React from "react";
// import {Routes, Route, Link} from "react-router-dom";


// import Services from "./pages/services"
// import Realisations from "./pages/realistaions"
// import Contact from "./pages/contact"
// import Mentionslegales from "./pages/mentions-legales"
// import Modale from "./pages/modale"

import Github from "./assets/icons-svg/github.svg"
import Linkedin from "./assets/icons-svg/linkedin.svg"
import Twitter from "./assets/icons-svg/twitter.svg"

// import Brush from "/public/icons-svg/brush.svg"
// import Close from "../src/assets/icons-svg/close.svg"
// import Code from "../src/assets/icons-svg/code.svg"
// import Cube from "../src/assets/icons-svg/cube.svg"
// import Description from "../src/assets/icons-svg/description.svg"
// import Email from "../src/assets/icons-svg/email.svg"
// import Github from "../src/assets/icons-svg/github.svg"
// import Globe from "../src/assets/icons-svg/globe.svg"
// import Linkedin from "../src/assets/icons-svg/linkedin.svg"
// import Localisation from "../src/assets/icons-svg/localisation.svg"
// import Mapnavigation from "../src/assets/icons-svg/map-navigation.svg"
// import Menuburger from "../src/assets/icons-svg/menu-burger.svg"
// import Research from "../src/assets/icons-svg/Research.svg"
// import Smartphone from "../src/assets/icons-svg/smartphone.svg"
// import Twitter from "../src/assets/icons-svg/twitter.svg"
// import User from "../src/assets/icons-svg/user.svg"
// import Users from "../src/assets/icons-svg/users.svg"


export default function App() {
   return(
     <div className="App">
       <header>
         <nav className="Nav">
           <ul >
             {/* <li ><Link to="/">Accueil</Link></li> */}
             {/* <li ><Link to="./pages/services" >Services</Link></li> */}
             {/* <li ><Link to="/realisations" >Portofolio</Link></li>
             <li ><Link to="/contact" >Contact</Link></li>
             <li ><Link to="/mentions-legales" >Mentions légales</Link></li> */}
           </ul>
         </nav>
       </header>

       <main>
         <div>
           <h1 className="Title">Bonjour, je suis Jhon Doe</h1>
           <h2 className="SubTitle">Developpeur web full stack</h2>
           {/* <button className="btn"><Link to="/pages/modale.jsx">En savoir plus</Link></button> */}
         </div>
 
         <section className="About">
           <h3>A propos</h3>
           <img src="/assets/images/john-doe-about.jpg" alt="Jhon Doe working"></img>
           <p className="About-text">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat tortor. Proin ac tellus sit amet dolor fringilla elementum.
             Nullam pharetra imperdiet augue ullamcorper pellentesque. Phasellus convallis, lorem at dictum ultricies, neque tortor posuere mauris, ac dignissim odio risus et nisl.
             Curabitur molestie tempor tortor, faucibus efficitur massa dictum non. Donec eu tellus in nunc dapibus commodo. Sed ut quam mi. Curabitur suscipit at lorem a dapibus.
             Nullam sed dapibus justo.
 
             Phasellus eu sapien in sapien aliquam interdum vel vel tellus. Vestibulum elementum malesuada dapibus. Aenean ultrices eget risus dictum faucibus.
             Sed vulputate, justo nec auctor pharetra, massa neque posuere turpis, a posuere lacus libero non mauris. Curabitur ac odio consequat, porta risus non, rutrum odio.
             Nulla facilisi. Ut tincidunt purus tellus, ac aliquet neque lobortis id. Nullam urna augue, efficitur vel massa in, aliquet sollicitudin augue.
             Nam libero massa, blandit eget ex ut, pharetra fermentum est. Donec aliquam, tellus non volutpat vehicula, metus libero finibus tortor, at porta ligula felis vitae justo.
             Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam tincidunt, dolor quis vehicula volutpat, est nisl interdum orci, ac auctor libero tortor sed urna.
             Donec ut viverra mi, et efficitur nisi.
 
             Ut ac velit luctus, iaculis eros volutpat, suscipit quam. Aliquam erat volutpat. Nam in nulla urna. Duis nulla sem, pellentesque vitae diam sit amet, consectetur rhoncus tortor.
             Donec convallis ipsum sed convallis bibendum. Praesent ut consectetur lorem. Curabitur lobortis bibendum tortor. Etiam id orci ac odio venenatis faucibus.
             Etiam convallis tincidunt erat et sodales. Vivamus in urna quis lectus varius ornare ac sit amet lacus. Curabitur id dapibus nunc, sagittis tincidunt ipsum.
             Vestibulum egestas consectetur tempor. Aliquam euismod luctus lectus sit amet vulputate. Etiam feugiat justo vel ipsum fermentum, sagittis auctor ex fermentum.
             Fusce sed justo in erat pulvinar eleifend vel sed quam.
           </p>
         </section>
 
         <section className= "Myskills">
           <h3 className="#">Mes Compétences</h3>
           Composants fonctionnel à créer = titre + progress bar avec des valeurs asynchrones!! ne pas oublier les HOOK
             <h4>html</h4>
             <progress value = "90" max = "100" />
             <h4>css</h4>
             <progress value = "80" max = "100" />
             <h4>javascript</h4>
             <progress value = "70" max = "100" />
             <h4>php</h4>
             <progress value = "60" max = "100" />
             <h4>react</h4>
             <progress value = "50" max ="100"/>
         </section> 
       </main>

       <footer className="#">
 
          <div className="Contactme">
            {/* Créer un composant à reutiliser. Chaque ligne doit être identifiable pour ajouter des icône suivant les pages */}
            <p>Jhon Doe</p>
            <p>40 rue laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>10 20 30 40 50</p>
            <p>jhon.doe@gmail.com</p>
          </div>
 
          <div className="Social-Link">
           <img src={Github} alt="GitHub" width={24}></img>
           <img src={Twitter} alt="Twitter" width={24}></img>
           <img src={Linkedin} alt="Linkedin" width={24}></img>
          </div>
 
          <div className="Usefull-Link">
             <h4 >Liens Utiles</h4>
             <ul >
               {/* <li ><Link to="/">Accueil</Link></li> */}
               {/* <li ><Link to="./pages/services" >Services</Link></li> */}
               {/* <li ><Link to="/realisations" >Portofolio</Link></li> */}
               {/* <li ><Link to="/contact" >Contact</Link></li> */}
               {/* <li ><Link to="/mentions-legales" >Mentions légales</Link></li> */}
             </ul>
          </div>
 
          <div className="Project">
              {/* Link to project 1 Link
              Link to project 2 Link
              Link to project 3 Link
              Link to project 4 Link
              Link to project 5 Link
              Link to project 6 Link */}
          </div>
        </footer>
         {/* <Routes> */}
           {/* <Route path ="/" element = {<App/>}></Route> */}
           {/* <Route path = "./pages/services.jsx" element = {<Services/>}></Route> */}
           {/* <Route path = "/realisations" element = {<Realisations/>}></Route> */}
           {/* <Route path = "/contact" element = {<Contact/>}></Route> */}
           {/* <Route path = "/mentions-legales" element = {<Mentionslegales/>}></Route> */}
           {/* <Route path = "/modale" element = {<Modale/>}></Route> */}
         {/* </Routes> */}
       </div>
 )
 
};