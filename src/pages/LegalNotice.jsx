import { Head } from '@unhead/react';

import { Presentation } from "jsx/components";
import { AccordionItem } from 'jsx/accordion';
import { CreditText } from "jsx/text";
import { ContactCardList } from "jsx/contact-card";

export default function LegalNoticePage() {

    return(
        <>
            <Head>
                <title>Mentions Légales</title>
                <meta name="description" content="Page concernant les mentions légales"/>
                <meta name="robots" content="noindex, nofollow"/>
            </Head>

            <div className = "app-main__container">
                <Presentation
                    title = "Mentions légales"
                    description = {false}
                />
                <section className="accordion-container app-accordion__container">
                    <AccordionItem
                        title = "Editeur du site"
                        text = {<ContactCardList selectedIds={["editor"]} showIcon={true} />}
                        id = "editor"
                    />

                    <AccordionItem
                        title = "Hébergeur"
                        text = {<ContactCardList selectedIds={["host"]} showIcon={true}/>}
                        id = "host"
                    />

                    <AccordionItem
                        title = "Crédit"
                        text = {<CreditText />}
                        id = "credit"
                    />
                </section>
            </div>
        </>
    )
}