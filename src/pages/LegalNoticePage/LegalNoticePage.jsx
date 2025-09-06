import { Head } from '@unhead/react';

import { PageLayout } from 'src/components/Layout/PageLayout/PageLayout';
import { CreditText } from './CreditText/CreditText';
import { TitleLayout } from 'src/components/common/TitleLayout/TitleLayout';
import { AccordionItem } from 'src/components/common/Accordion/Accordion';
import { ContactCardsList } from 'src/components/contact/ContactCardsList/ContactCardsList';

/**
 * Page des mentions légales avec sections en accordéon
 *
 * @returns {JSX.Element} Page des mentions légales avec accordéon
 */
export default function LegalNoticePage() {
  return (
    <>
      <Head>
        <title>Mentions Légales</title>
        <meta name="description" content="Page concernant les mentions légales" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <PageLayout>
        <TitleLayout title="Mentions légales" description={false} />
        <section className="accordion-container">
          <AccordionItem title="Editeur du site" text={<ContactCardsList selectedIds={['editor']} />} id="editor" />

          <AccordionItem title="Hébergeur" text={<ContactCardsList selectedIds={['host']} />} id="host" />

          <AccordionItem title="Crédit" text={<CreditText />} id="credit" />
        </section>
      </PageLayout>
    </>
  );
}
