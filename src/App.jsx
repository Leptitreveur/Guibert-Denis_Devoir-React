import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"



import Github from "./assets/icons-svg/github.svg"
import Linkedin from "./assets/icons-svg/linkedin.svg"
import Twitter from "./assets/icons-svg/twitter.svg"

export default function App() {
   return(
     <div>
      <header>
        <nav>
          <ul >
            <li ><Link to="/">Accueil</Link></li>
            <li ><Link to="/services" >Services</Link></li>
            <li ><Link to="/realisations" >Portofolio</Link></li>
            <li ><Link to="/contact" >Contact</Link></li>
            <li ><Link to="/mentions-legales" >Mentions légales</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>

        <div className="Contactme">
          {/* Créer un composant à reutiliser. Chaque ligne doit être identifiable pour ajouter des icône suivant les pages */}
          <p>Jhon Doe</p>
          <p>40 rue laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>10 20 30 40 50</p>
          <p>jhon.doe@gmail.com</p>
        </div>

        <div className="Social-Link">
          <a>
        <img src={Github} alt="GitHub" width={24}></img>
          </a>
        <img src={Twitter} alt="Twitter" width={24}></img>
        <img src={Linkedin} alt="Linkedin" width={24}></img>
        </div>

        <div className="Usefull-Link">
          <h4 >Liens Utiles</h4>
          <ul >
            <li ><Link to="/">Accueil</Link></li>
            <li ><Link to="/services" >Services</Link></li>
            <li ><Link to="/realisations" >Portofolio</Link></li>
            <li ><Link to="/contact" >Contact</Link></li>
            <li ><Link to="/mentions-legales" >Mentions légales</Link></li>
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
    </div>
  )
};