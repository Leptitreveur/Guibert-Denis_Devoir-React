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
      <div className="my-3 my-md-4">
        <div className="container-fluid">
          <div className="col align-items-center mx-3 app-w-sm-80vw">
            <Presentation title="Mon offre de services" description="Voici les prestations sur lesquelles je peux intervenir" />
            <ServiceCardsList />
          </div>
        </div>
      </div>
    </>
  );
}
