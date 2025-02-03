import Globe from "../src/assets/icons-svg/globe.svg"
import Github from "/src/assets/icons-svg/github.svg"
import Linkedin from "/src/assets/icons-svg/linkedin.svg"
import Twitter from "/src/assets/icons-svg/twitter.svg"


export default function Legalnotice() {
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
              <div>
                  <h1 className="Title">Mentions légales</h1>
              </div>
              <section>

                  <details>
                      <summary>
                          <h2 className="Subtilte-editor">Editeur du site</h2>
                          <p className="Contactme">
                              {/* Ajouter le composant nommer Contactme comprenant le composant imbriqué des icônes correspondantes*/}
                              {/* infos attendus sur cette page nom, prénom, adresse, téléphone, e-mail */}
                          </p>
                      </summary>
                  </details>

                  <details>
                      <summary>
                          <h2 className="Subtitle-host">Hébergeur</h2>
                          <h3 className="">alwaysdata</h3>
                          <p className="">91 rue de Faubourg Saint-Honoré, 75008 Paris</p>
                          <img src={Globe} alt="globe icon" width ={24}></img>
                      </summary>
                  </details>

                  <details>
                      <summary>
                          <h2 className="Subtitle-credits">Crédits</h2>
                          <p>Ce site a été réalisé par Jhon Doe, étudiant au <a href="{https:www.centre-europeen-formation.fr/}" target="_blank">Centre Européen de formation </a></p>
                          <p>Les images utilisées sur ce site sont libres de droit et ont été obtenues sur le site <a href="https:pixabay.com/fr/" rel="noreferrer" target="_blank">Pixabay </a></p>
                          <p>La favicon de ce site a été fournie par <a href="https:www.flaticon.com/de/kostenlose-icons/john-doe" rel="noreferrer" target="_blank">Jhon Doe icons erstellt von Freepik - Flaticon </a> 
                          et la conversion des images sur <a href="{https:favicon.io/favicon-converter/}" target="_blank"> favicon.io</a>.</p>
                          {/* Disallow target="_blank" attribute without rel="noreferrer" (react/jsx-no-target-blank) ==> à utiliser comme erreur possible si mal écrit
                          Attention à l'écriture du code pour la redirection des liens */}
                      </summary>

                   </details>
              </section>
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
                  <ul >
                    {/* <li ><Link to="/">Accueil</Link></li> */}
                    {/* <li ><Link to="/services" >Services</Link></li> */}
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
      </div>
  )
};