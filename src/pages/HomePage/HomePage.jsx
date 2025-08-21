import { Head } from '@unhead/react';

import { Presentation } from 'src/components/common/Presentation/Presentation';
import { PageLayout } from 'src/components/Layout/PageLayout/PageLayout';
import { ProfilSection } from './components/ProfilSection/ProfilSection';
import { SkillSection } from './components/SkillsSection/SkillsSection';

/** Présentation: bannière, profil, compétences. Métadonnées SEO.*/
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Jhon Doe vous propose ses services en qualité de Dév Web Full Stack. Page de présentation." />
      </Head>

      <PageLayout beforeContent={<Presentation />} classNameLv1={'mx-2 border-0 rounded shadow'} classNameLv2={'py-4 px-lg-4'}>
        <ProfilSection />
        <SkillSection />
      </PageLayout>
    </>
  );
}
