import { Head } from '@unhead/react';

import { PageLayout } from 'src/components/Layout/PageLayout/PageLayout';
import { BgBanner } from 'src/components/common/BackgroundImage/BackgroundImage';
import { TitleLayout } from 'src/components/common/TitleLayout/TitleLayout';
import { PortfolioCardsList } from 'src/components/portfolio/PortfolioCardsList/PortfolioCardsList';
import { useHashScroll } from 'src/hooks/useHashScroll';

/** Portfolio avec scroll auto vers un élément via hash utilisant les refs React.*/

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
