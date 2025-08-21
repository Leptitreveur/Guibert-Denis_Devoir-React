import { Head } from '@unhead/react';

import { PageLayout } from 'src/components/Layout/PageLayout/PageLayout';
import { BgBanner } from 'src/components/common/BackgroundImage/BackgroundImage';
import { TitleLayout } from 'src/components/common/TitleLayout/TitleLayout';
import { ServiceCardsList } from 'src/components/services/ServiceCardsList/ServiceCardsList';

/**Services proposés avec bannière et liste des prestations.*/

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Page regroupant les services proposés" />
      </Head>
      <PageLayout beforeContent={<BgBanner />}>
        <TitleLayout title="Mon offre de services" description="Voici les prestations sur lesquelles je peux intervenir" />
        <ServiceCardsList />
      </PageLayout>
    </>
  );
}
