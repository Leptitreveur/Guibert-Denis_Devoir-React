import { useEffect } from 'react';
import { Head } from '@unhead/react';
import { useLocation } from 'react-router-dom';

import { BgBanner } from 'src/components/common/BackgroundImage/BackgroundImage';
import { Presentation } from 'src/components/common/Presentation/Presentation';
import { PortfolioCardsList } from 'src/components/portfolio/PortfolioCardsList/PortfolioCardsList';

// //*Scroll vers la realisation sélectionnéee ================================================
export default function PortfolioPage() {
  const { hash } = useLocation();

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

      <BgBanner />
      <div className="my-3 my-md-4">
        <div className="container-fluid">
          <div className="row justify-content-center app-w-sm-80vw">
            {/* <div className="container-fluid mb-5 app-w-sm-80vw app-w-xl-70vw text-center"> */}
            <Presentation title="Portfolio" description="Voici quelques unes de mes réalisations." />
            <PortfolioCardsList />
          </div>
        </div>
      </div>
    </>
  );
}
