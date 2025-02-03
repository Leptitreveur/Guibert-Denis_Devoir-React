import Github from "/src/assets/icons-svg/github.svg"
import Linkedin from "/src/assets/icons-svg/linkedin.svg"
import Twitter from "/src/assets/icons-svg/twitter.svg"
import Brush from "/src/assets/icons-svg/brush.svg"
import Code from "/src/assets/icons-svg/code.svg"
import Research from "/src/assets/icons-svg/Research.svg"

export default function Services() {
    return(
        <div>
            <header>
          <nav className="Nav">
            <ul >
              <li ><a href="/">Home</a></li>
              <li ><a href="/services" >Services</a></li>
              <li ><a href="/realisations" >Portofolio</a></li>
              <li ><a href="/contact" >Contact</a></li>
              <li ><a href="/mentions-légales" >Mentions légales</a></li>
            </ul>
          </nav>
        </header>
        <main>

            <h1 className="Title">Mon offre de services</h1>
            <p>Voici les prestations sur lequelles je peux intervenir</p>
            {/* Composant à créer */}
            <div>
                <img src={Brush} alt="Pinceau" width={24}></img>
                <h2 className="Service-type">UX Design</h2>
                <p>L UX Design est une discipline qui consiste à concevoir des produite (site web, applications mobiles, logiciels, objets connectés, etc.) 
                    en plaçant l utilisatuer au centre des préoccupations. L objetif est de rendre l expérience utilisateur la plus fluide et la plus agréable possible.</p>
            </div>
            <div>
                <img src={Code} alt="Code" width={24}></img>
                <h2 className="Service-type">Développement web</h2>
                <p>Le développement de site web consiste à créer des sites internet en utilisant des languages de prokgrammations (HTML, CSS, JavaScript, PHP, etc.)
                    et des frameworks (Bootstrap, React, Angular,etc.).</p>
            </div>
            <div>
                <img src={Research} alt="Recherche" width={24}></img>
                <h2 className="Service-type">Référencement</h2>
                <p>Le référencement naturel (SEO) est une technnique qui consiste à optimiser un site web pour le faire remonter dans les mmoteurs de recherche (Google, Bing, Yahoo, etc.).
                    L objectif est d attirer un mawimum de visiteurs qulaifiés sur le site.</p>
            </div>
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
                       <a href="/" >Home</a>
                       <a href="/services.jsx" >Services</a>
                       <a href="/realisations.jsx" >Portofolio</a>
                       <a href="/contact.jsx" >Contact</a>
                       <a href="/mentions-legales.jsx" >Mentions légales</a>
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

        </div>
    )
}