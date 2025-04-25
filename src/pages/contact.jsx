import { Presentation, SectionTitle} from "jsx/components"
import { ContactList } from 'jsx/contact-card'

export default function ContactPage(){
  return(
      <div className="app_contactContainer">

              <Presentation title = "Contact" description = "Pour me contacte en vue d'un entretien  ou d'une future collaboration, merci de remplir le formulaire de contact."/>
              <div className = "w-100 p-4 shadow rounded">
                <section>

                  <SectionTitle title = "Formulaire de contact"/>

                    <form action="" className = "app_formContainer" >
                        <input className = "form-control" type="text" placeholder="Votre nom"/>
                        <input className = "form-control" type="email" placeholder="Votre adresse e-mail"/>
                        <input className = "form-control" type="text" placeholder="Votre numéro de téléphone"/>
                        <input className = "form-control" type="text" placeholder="Sujet"/>
                        <textarea className = "form-control"
                            id="id"
                            name="name"
                            placeholder="Votre message"
                        />
                        <button className="btn btn-primary" type="submit">Envoyer</button>
                    </form>
                </section>

                <section className="mt-3">
                  <SectionTitle title = "Mes coordonnées"/>

                    <ContactList selectedIds={["editor"]} showicon={true} />

                    <div className="d-flex w-100 mt-3" id="map">

                      <iframe
                        title="Adress"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.253931508198!2d4.796403976643224!3d45.
                        77866571240161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure
                        %20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1738229729412!5m2!1sfr!2sfr"
                        // width="600"
                        // height="450"
                        loading="lazy"
                        allowFullScreen
                        >
                      </iframe>

                    </div>
                </section>
              </div>
      </div>
  );
}