import { Head } from '@unhead/react';

// import './LegalNoticePage.scss';

import { CreditText } from './CreditText/CreditText';
import { Presentation } from 'src/components/common/Presentation/Presentation';
import { AccordionItem } from 'src/components/common/Accordion/Accordion';
import { ContactCardsList } from 'src/components/contact/ContactCardsList/ContactCardsList';

export default function LegalNoticePage() {
  return (
    <>
      <Head>
        <title>Mentions Légales</title>
        <meta name="description" content="Page concernant les mentions légales" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <>
        <Presentation title="Mentions légales" description={false} />
        <section className="accordion-container app-w-80vw">
          <AccordionItem title="Editeur du site" text={<ContactCardsList selectedIds={['editor']} showIcon={true} />} id="editor" />

          <AccordionItem title="Hébergeur" text={<ContactCardsList selectedIds={['host']} showIcon={true} />} id="host" />

          <AccordionItem title="Crédit" text={<CreditText />} id="credit" />
        </section>
      </>
    </>
  );
}
