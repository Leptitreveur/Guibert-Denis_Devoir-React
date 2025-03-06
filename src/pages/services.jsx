import { Design, Developpement, Referencement } from "../components/jsx/container";

export default function Servicespage() {
  return(
        <div>
            <h1 className="#">Mon offre de services</h1>
            <p>Voici les prestations sur lequelles je peux intervenir</p>

            <Design title="UX Design" />
            <Developpement title="Developpement Web" />
            <Referencement title="Referencement" />
        </div>
  )
}