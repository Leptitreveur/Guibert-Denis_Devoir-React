import { Head } from '@unhead/react';

import { Presentation } from "jsx/components";
import { DetailsAccordion } from 'jsx/accordion';
import { CreditText } from "jsx/text";
import { ContactList } from "jsx/contact-card";

export default function LegalNoticePage() {

    return(
        <>
            <Head>
                <title>Mentions Légales</title>
                <meta name="description" content="Page concernant les mentions légales"/>
                <meta name="robots" content="noindex, nofollow"/>
            </Head>
            
            <div className = "app_mainContainer">
                <Presentation
                    title = "Mentions légales"
                    description = {false}
                />
                <section className="accordion-container app_accordionContainer">
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
        </>
    )
}