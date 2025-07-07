import { Head } from '@unhead/react';

import { BgBanner } from 'src/components/common/BackgroundImage/BackgroundImage';
import { Presentation } from 'src/components/common/Presentation/Presentation';
import { ServiceCardsList } from 'src/components/services/ServiceCardsList/ServiceCardsList';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Page regroupant les services proposés" />
      </Head>

      <BgBanner />
      <Presentation title="Mon offre de services" description="Voici les prestations sur lesquelles je peux intervenir" />
      <ServiceCardsList selectedIds={['uxdesign', 'dev', 'ref']} />
    </>
  );
}
