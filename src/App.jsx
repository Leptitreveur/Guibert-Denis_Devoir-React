import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"



import Github from "./assets/icons-svg/github.svg"
import Linkedin from "./assets/icons-svg/linkedin.svg"
import Twitter from "./assets/icons-svg/twitter.svg"
import Menu from "./assets/icons-svg/menu-burger.svg"

export default function App() {
   return(
     <div className="#">

      <header className="header-container">

        <div className="header-container__mobile">
          <h1 className="logo-container">jhon doe</h1>

          <img src={Menu} alt="menu" className="menu-burger" />
        </div>

        <nav className="nav-container">
          <ul >
            <li ><Link className="link" to="/">Accueil</Link></li>
            <li ><Link className="link" to="/services" >Services</Link></li>
            <li ><Link className="link" to="/realisations" >Portofolio</Link></li>
            <li ><Link className="link" to="/contact" >Contact</Link></li>
            <li ><Link className="link" to="/mentions-legales" >Mentions légales</Link></li>
          </ul>

        </nav>

      </header>

      <main>
        <Outlet/>
      </main>

      <footer className ="footer-components">

        <div className = "footer-component">
          <div>
            {/* Créer un composant à reutiliser. Chaque ligne doit être identifiable pour ajouter des icône suivant les pages */}
            <p>Jhon Doe</p>
            <p>40 rue laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>10 20 30 40 50</p>
            <p>jhon.doe@gmail.com</p>
          </div>

          <div>
              <a>
            <img src={Github} alt="GitHub" width={24}></img>
              </a>
            <img src={Twitter} alt="Twitter" width={24}></img>
            <img src={Linkedin} alt="Linkedin" width={24}></img>
          </div>
        </div>

        <div className = "footer-component">
          <h4 >Liens Utiles</h4>
          <ul >
            <li ><Link to="/">Accueil</Link></li>
            <li ><Link to="services" >Services</Link></li>
            <li ><Link to="realisations" >Portofolio</Link></li>
            <li ><Link to="contact" >Contact</Link></li>
            <li ><Link to="mentions-legales" >Mentions légales</Link></li>
          </ul>
        </div>

        <div className = "footer-component">
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