import { Design, Developpement, Referencement } from "$/jsx/container";
import { Bannerbg } from "$/jsx/images"
import { Presentation } from "$/jsx/elements"

export default function Servicespage() {
  return(
        <div className="main-container">

            <Bannerbg />

            <div className="d-flex flex-column justify-content-center align-items-center p-3 mb-4">

              <Presentation title = "Mon offre de services" description = "Voici les prestations sur lequelles je peux intervenir" />

              <div className="card d-flex flex-column justify-content-center align-items-center gap-3 border-0">

                <Design title="UX Design" />
                <Developpement title="Developpement Web" />
                <Referencement title="Referencement" />

              </div>

            </div>
        </div>
  )
}