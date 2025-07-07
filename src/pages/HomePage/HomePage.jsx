import { Head } from '@unhead/react';

// import './HomePage.scss';

import { UserProfilModal } from 'src/components/layout/UserProfilModal/UserProfilModal';
import { BgHero } from 'src/components/common/BackgroundImage/BackgroundImage';
import { ProfilSection } from './components/ProfilSection/ProfilSection';
import { SkillSection } from './components/SkillsSection/SkillsSection';

// *        HomePage            ==========================================================================================================

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Jhon Doe vous propose ses services en qualité de Dév Web Full Stack. Page de présentation." />
      </Head>

      <div className="app-introduction__container w-100 d-flex flex-row align-items-center justify-content-center position-relative mb-5 overflow-hidden" style={{ height: '40rem' }}>
        <BgHero />

        <div className="app-introduction__box d-flex flex-column align-items-center justify-content-center position-absolute gap-4 top-25">
          <h1 className="text-light fw-bold text-center px-4 fs-1">Bonjour, je suis Jhon Doe</h1>
          <h2 className="text-light fw-bold text-center px-4 fs-2">Développeur web full stack</h2>

          <button className="btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            En savoir plus
          </button>

          <div className="modal-container">
            <UserProfilModal />
          </div>
        </div>
      </div>
      <div className="mx-3">
        <div className="container-fluid rounded shadow"> {/*appaboutconainer */}
          <div className="row p-3 pb-md-5 px-lg-4 ">
            <ProfilSection />
            <SkillSection />
          </div>
        </div>
      </div>
    </>
  );
}
