import Github from "/src/assets/icons-svg/github.svg"
import Linkedin from "/src/assets/icons-svg/linkedin.svg"
import Twitter from "/src/assets/icons-svg/twitter.svg"

import Mapnavigation from "../src/assets/icons-svg/map-navigation.svg"
import Email from "../src/assets/icons-svg/email.svg"
import Localisation from "../src/assets/icons-svg/localisation.svg"
import Smartphone from "../src/assets/icons-svg/smartphone.svg"

export default function Contact(){
  return(
      <div className="Contact">
          <header>
            <nav className="Nav">
              <ul >
                {/* <li ><Link to="/">Accueil</Link></li> */}
                {/* <li ><Link to="/services" >Services</Link></li> */}
                {/* <li ><Link to="/realisations" >Portofolio</Link></li>
                <li ><Link to="/contact" >Contact</Link></li>
                <li ><Link to="/mentions-legales" >Mentions légales</Link></li> */}
              </ul>
            </nav>
          </header>

          <main>
              <div>
              <h2 className="Titlte">Contact</h2>
              <p> Pour me contacter en d un entretien ou d une future collaboration, merci de remplir le formulaire de contact.</p>
              </div>
              <section className="Contact-Form">
                <h2>Formulaire de contact</h2>
                  <form action="">
                      <input type="text" name="" id="" value="" className="" placeholder="Votre nom"/>
                      <input type="text" name="" id="" value="" className="" placeholder="Votre adresse e-mail"/>
                      <input type="text" name="" id="" value="" className="" placeholder="Votre numéro de téléphone"/>
                      <input type="text" name="" id="" value="" className="" placeholder="Sujet"/>
                      <textarea
                          id="id"
                          name="name"
                          placeholder="Votre message"
                          className=""
                      />
                  </form>
              </section>

              <section className="Coordonate">
                <h2>Mes coordonées</h2>
                  <div className ="Contactme">
                      {/* Pensez à mettre l'ajout des icôn en tant que composant*/}
                      <h3>Jhon Doe</h3>
                      <img src={Mapnavigation} alt="Adress" width={16}></img>
                      <p>40 rue laure Diebold</p>
                      <img src={Localisation} alt="Localisation" width={16}></img>
                      <p>69009 Lyon, France</p>
                      <img src={Smartphone} alt="Smartphone" width={16}></img>
                      <p>10 20 30 40 50</p>
                      <img src={Email} alt="E-mail" width={16}></img>
                      <p>jhon.doe@gmail.com</p>
                  </div>
                  <div className="">
                  <iframe title="Adress" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.253931508198!2d4.796403976643224!3d45.
                   77866571240161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure
                   %20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1738229729412!5m2!1sfr!2sfr"
                   width="600" height="450"  allowfullscreen="" loading="lazy" >
                      {/* style="border:0; "" propriété problématique dans react*/}
                  </iframe>
                  </div>
              </section>
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
          </main>
      </div>
  );
}