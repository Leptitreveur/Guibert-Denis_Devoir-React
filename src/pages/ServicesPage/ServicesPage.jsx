import { Head } from '@unhead/react';

import { PageLayout } from 'src/components/Layout/PageLayout/PageLayout';
import { BgBanner } from 'src/components/common/BackgroundImage/BackgroundImage';
import { TitleLayout } from 'src/components/common/TitleLayout/TitleLayout';
import { ServiceCardsList } from 'src/components/services/ServiceCardsList/ServiceCardsList';

/**
 * Page des services proposés avec bannière et liste des prestations
 *
 * Page des services affichant une bannière d'en-tête et la liste
 * complète des services proposés. Inclut les métadonnées SEO appropriées
 * et utilise une mise en page responsive avec grille Bootstrap.
 *
 * @returns {JSX.Element} Page des services avec liste des prestations
 */
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
