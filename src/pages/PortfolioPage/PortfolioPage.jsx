import { Head } from '@unhead/react';

import { PageLayout } from 'src/components/Layout/PageLayout/PageLayout';
import { BgBanner } from 'src/components/common/BackgroundImage/BackgroundImage';
import { TitleLayout } from 'src/components/common/TitleLayout/TitleLayout';
import { PortfolioCardsList } from 'src/components/portfolio/PortfolioCardsList/PortfolioCardsList';
import { useHashScroll } from 'src/hooks/useHashScroll';

/**
 * Page Portfolio avec scroll automatique vers un élément via hash
 *
 * Page principale du portfolio qui affiche toutes les réalisations
 * avec possibilité de scroll automatique vers une réalisation spécifique
 * via le hash dans l'URL. Utilise le hook useHashScroll pour gérer
 * le scroll automatique vers les éléments.
 *
 * @returns {JSX.Element} Page de portfolio avec grille de réalisations
 */
export default function PortfolioPage() {
  const { registerElement } = useHashScroll();

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Page regroupant les différentes réalisations" />
      </Head>

      <PageLayout beforeContent={<BgBanner />}>
        <TitleLayout title="Portfolio" description="Voici quelques unes de mes réalisations." />
        <PortfolioCardsList registerElement={registerElement} />
      </PageLayout>
    </>
  );
}
