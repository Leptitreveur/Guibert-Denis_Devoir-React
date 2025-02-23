import Globe from "../assets/icons-svg/globe.svg"

export default function Legalnoticepage() {
  return(
      <div>
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

      </div>
  )
};