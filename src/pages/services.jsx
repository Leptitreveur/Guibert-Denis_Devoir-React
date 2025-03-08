import { Design, Developpement, Referencement } from "../components/jsx/container";
import { Bannerbg } from "../components/jsx/images"

export default function Servicespage() {
  return(
        <div className="main-container">
            <Bannerbg />
            <div className="d-flex flex-column justify-content-center align-items-center p-3 mb-4">
              <div className="d-felx flex-column justify-content-center align-items-center w-100 m-5 subcontainer">
                <h1 className="fw-bold">Mon offre de services</h1>
                <p>Voici les prestations sur lequelles je peux intervenir</p>
                <div className="line-container">
                  <hr className="line"/>
                </div>
              </div>

              <div className="card d-flex flex-column justify-content-center align-items-center gap-3 border-0">
                <Design title="UX Design" />
                <Developpement title="Developpement Web" />
                <Referencement title="Referencement" />
              </div>
            </div>
        </div>
  )
}