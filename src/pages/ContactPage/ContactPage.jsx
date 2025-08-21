import { Head } from '@unhead/react';

import { PageLayout } from 'src/components/Layout/PageLayout/PageLayout';
import { TitleLayout } from 'src/components/common/TitleLayout/TitleLayout';
import { MapSection } from 'src/components/MapSection/MapSection';
import { FormSection } from 'src/components/FormSection/FormSection';

/** Page de contact avec formulaire et carte Google Maps.*/

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Acces au formulaire de contact ainsi qu'à l'adresse professionnelle via la minimap" />
      </Head>

      <PageLayout>
        <TitleLayout title="Contact" description="Pour me contacter en vue d'un entretien  ou d'une future collaboration, merci de remplir le formulaire de contact." />
        <div className="row row-cols-md-2 g-3 pb-3 border-0 rounded shadow">
          <FormSection />
          <MapSection />
        </div>
      </PageLayout>
    </>
  );
}
