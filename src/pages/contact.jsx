import Mapnavigation from "../assets/icons-svg/map-navigation.svg"
import Email from "../assets/icons-svg/email.svg"
import Localisation from "../assets/icons-svg/localisation.svg"
import Smartphone from "../assets/icons-svg/smartphone.svg"

export default function Contactpage(){
  return(
      <div className="Contact">
              <div>
              <h2 className="Titlte">Contact</h2>
              <p> Pour me contacter en d un entretien ou d une future collaboration, merci de remplir le formulaire de contact.</p>
              </div>
              <section className="Contact-Form">
                <h2>Formulaire de contact</h2>
                  <form action="">
                      <input type="text" placeholder="Votre nom"/>
                      <input type="text" placeholder="Votre adresse e-mail"/>
                      <input type="text" placeholder="Votre numéro de téléphone"/>
                      <input type="text" placeholder="Sujet"/>
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
                   width="600" height="450"  loading="lazy" >
                      {/* style="border:0; "allowfullScreen=""" propriété problématique dans react*/}
                  </iframe>
                  </div>
              </section>
             
      </div>
  );
}