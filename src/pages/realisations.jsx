import Github from "/src/assets/icons-svg/github.svg"
import Linkedin from "/src/assets/icons-svg/linkedin.svg"
import Twitter from "/src/assets/icons-svg/twitter.svg"

export default function Project() {
  return(
      <div>
          <header>
              <img src="../src/assets/images/banner.jpg" alt="Bannière"></img>
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
              <h1>Portofolio</h1>
              <p>Voici quelques unes de mes réalisations</p>
              {/* Composant à créer */}
              {/* Card du projet 1 Fresh Food => site de vente de produits frais en ligne*/}
              {/* Card du projet 2 Restaurant Akira => Site de produits frais en ligne*/}
              {/* Card du projet 3 Espace de bien être => site de vente de produits frais en ligne*/}
              {/* Card du projet 4 Seo => Amélioration de référencement d'un site e-commerce*/}
              {/* Card du projet 5 Création d'une API => création d'une API RESTFULL publique*/}
              {/* Card du projet 6 Maquette d'un site web => Création du prototype d'un site*/}
          </main>
           <footer className="#">
  
           <div className="Contactme">
             {/* Créer un composant à reutiliser. Chaque ligne doit être identifiable pour ajouter des icône suivant les pages*/}
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
               {/* <Link to="/" >Home</Link> */}
               {/* <Link to="/services.jsx" >Services</Link> */}
               {/* <Link to="/realisations.jsx" >Portofolio</Link> */}
               {/* <Link to="/contact.jsx" >Contact</Link> */}
               {/* <Link to="/mentions-legales.jsx" >Mentions légales</Link> */}
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