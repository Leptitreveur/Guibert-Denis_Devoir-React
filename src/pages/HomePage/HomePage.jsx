import { Head } from '@unhead/react';

import { Presentation } from 'src/components/common/Presentation/Presentation';
import { PageLayout } from 'src/components/Layout/PageLayout/PageLayout';
import { ProfilPart } from './components/ProfilPart/ProfilPart';
import { SkillPart } from './components/SkillsPart/SkillsPart';

/**
 * Page d'accueil avec présentation, profil et compétences et métadonnées
 *
 * @returns {JSX.Element} Page d'accueil avec sections structurées
 */
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Jhon Doe vous propose ses services en qualité de Dév Web Full Stack. Page de présentation." />
      </Head>

      <PageLayout beforeContent={<Presentation />} tagName={'section'} classNameLv1={'mx-2 border-0 rounded shadow'} classNameLv2={'py-4 px-lg-4'}>
        <ProfilPart />
        <SkillPart />
      </PageLayout>
    </>
  );
}
