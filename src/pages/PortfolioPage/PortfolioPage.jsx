import { useEffect } from 'react';
import { Head } from '@unhead/react';
import { useLocation } from 'react-router-dom';

import { PageLayout } from 'src/components/Layout/PageLayout/PageLayout';
import { BgBanner } from 'src/components/common/BackgroundImage/BackgroundImage';
import { TitleLayout } from 'src/components/common/TitleLayout/TitleLayout';
import { PortfolioCardsList } from 'src/components/portfolio/PortfolioCardsList/PortfolioCardsList';

/** Portfolio avec scroll auto vers un élément via hash.*/

export default function PortfolioPage() {
  // useLocation: extraire hash
  const { hash } = useLocation();

  // useEffect: scrollIntoView si hash présent
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace(`#`, ``));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('Element non trouvé pour le hash : ', hash);
      }
    }
  }, [hash]);

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Page regroupant les différentes réalisations" />
      </Head>

      <PageLayout beforeContent={<BgBanner />}>
        <TitleLayout title="Portfolio" description="Voici quelques unes de mes réalisations." />
        <PortfolioCardsList />
      </PageLayout>
    </>
  );
}
