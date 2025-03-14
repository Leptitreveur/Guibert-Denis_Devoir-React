import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { Realisation01, Realisation02, Realisation03, Realisation04, Realisation05, Realisation06} from "$/jsx/text"
import { Coordonate } from "$/jsx/elements"

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

          <img src={Menu} alt="menu" className="menu-burger iconsetting"/>
        </div>

        <nav className="nav-container">
          <ul className="listsetting">
            <li ><Link className="link" to="/">Accueil</Link></li>
            <li ><Link className="link" to="/services" >Services</Link></li>
            <li ><Link className="link" to="/realisations" >Portfolio</Link></li>
            <li ><Link className="link" to="/contact" >Contact</Link></li>
            <li ><Link className="link" to="/mentions-legales" >Mentions légales</Link></li>
          </ul>
        </nav>

      </header>

      <main>
        <Outlet/>
      </main>

      <footer className ="footer-container">

        <div className = "id-container">
          <Coordonate showicon={false} />

          <div className="sociallink-container">
            <img src={Github} alt="GitHub" className="iconsetting"></img>
            <img src={Twitter} alt="Twitter" className="iconsetting"></img>
            <img src={Linkedin} alt="Linkedin" className="iconsetting"></img>
          </div>
        </div>

        <div className = "usefulllink-container">
          <h4 className="strong" >Liens utiles</h4>
          <ul className="listsetting">
            <li ><Link className="link" to="/">Accueil</Link></li>
            <li ><Link className="link" to="services" >Services</Link></li>
            <li ><Link className="link" to="realisations" >Portfolio</Link></li>
            <li ><Link className="link" to="contact" >Contact</Link></li>
            <li ><Link className="link" to="mentions-legales" >Mentions légales</Link></li>
          </ul>
        </div>

        <div className = "realisation-container">
          <h4 className="strong">Mes dernières réalisations</h4>
          <ul className="listsetting">
            <li ><Link className="link" to="#" ><Realisation01/></Link></li>
            <li ><Link className="link" to="#" ><Realisation02/></Link></li>
            <li ><Link className="link" to="#" ><Realisation03/></Link></li>
            <li ><Link className="link" to="#" ><Realisation04/></Link></li>
            <li ><Link className="link" to="#" ><Realisation05/></Link></li>
            <li ><Link className="link" to="#" ><Realisation06/></Link></li>
          </ul>
        </div>
      </footer>
    </div>
  )
};