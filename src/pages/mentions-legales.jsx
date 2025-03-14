import { Presentation, Detailsaccordion, Coordonate, Coordonatehost } from "$/jsx/elements"
import { Credittext } from "$/jsx/text"

export default function Legalnoticepage() {
  return(
    <div className = "m-4">
        <Presentation
            title = "Mentions légales"
            description = {false}
        />
        <section className="accordion-container">
            <Detailsaccordion
                title = "Editeur du site"
                text = {<Coordonate showicon = {true} />}
                id = "editor"
            />

            <Detailsaccordion
                title = "Hébergeur"
                text = {<Coordonatehost showicon = {true} />}
                id = "host"
            />

            <Detailsaccordion
                title = "Crédit"
                text = {<Credittext />}
                id = "credit"
            />
        </section>
    </div>
  )
};
// dynamiser le rendu des border radius sur le 1er et le dernier element de l'accordéon et dynamiser l'ouverture et la faermeture des accordéons via les hooks