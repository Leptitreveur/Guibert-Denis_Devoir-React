import { Presentation } from "jsx/components"
import { DetailsAccordion } from 'jsx/accordion';
import { CreditText } from "jsx/text"
import { ContactList } from "jsx/contact-card"

export default function LegalNoticePage() {
  return(
    <div className = "app_mainContainer">
        <Presentation
            title = "Mentions légales"
            description = {false}
        />
        <section className="accordion-container">
            <DetailsAccordion
                title = "Editeur du site"
                text = {<ContactList selectedIds={["editor"]} showIcon={true} />}
                id = "editor"
            />

            <DetailsAccordion
                title = "Hébergeur"
                text = {<ContactList selectedIds={["host"]} showIcon={true}/>}
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
 