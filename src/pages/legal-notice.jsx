import { Presentation, DetailsAccordion } from "jsx/components"
import { CreditText } from "jsx/text"
import { ContactList } from "jsx/contact-card"

export default function LegalNoticePage() {
  return(
    <div className = "m-4">
        <Presentation
            title = "Mentions légales"
            description = {false}
        />
        <section className="accordion-container">
            <DetailsAccordion
                title = "Editeur du site"
                text = {<ContactList selectedIds={["editor"]} showicon={true} />}
                id = "editor"
            />

            <DetailsAccordion
                title = "Hébergeur"
                text = {<ContactList selectedIds={["host"]} showicon={true}/>}
                id = "host"
            />

            <DetailsAccordion
                title = "Crédit"
                text = {<CreditText />}
                id = "credit"
            />
        </section>
    </div>
  )
}
// dynamiser le rendu des border radius sur le 1er et le dernier element de l'accordéon et dynamiser l'ouverture et la faermeture des accordéons via les hooks