import { Head } from '@unhead/react';

import { UserProfilModal } from 'src/components/layout/UserProfilModal/UserProfilModal';
import { BgHero } from 'src/components/common/BackgroundImage/BackgroundImage';
import { ProfilSection } from './components/ProfilSection/ProfilSection';
import { SkillSection } from './components/SkillsSection/SkillsSection';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Jhon Doe vous propose ses services en qualité de Dév Web Full Stack. Page de présentation." />
      </Head>

      <div className="position-relative app-w-100vw app-h-40.0rem d-flex flex-row align-items-center justify-content-center mb-3 mb-md-4 overflow-hidden">
        <BgHero />

        <div className="position-absolute d-flex flex-column align-items-center justify-content-center gap-4 top-25">
          <h1 className="text-light fw-bold text-center px-4 app-fs-md-3.0rem app-fs-lg-4.0rem">Bonjour, je suis Jhon Doe</h1>
          <h2 className="text-light fw-bold text-center px-4 app-fs-md-2.0rem app-fs-lg-3.0rem">Développeur web full stack</h2>

          <button className="btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            En savoir plus
          </button>

          <div className="modal-container">
            <UserProfilModal />
          </div>
        </div>
      </div>

      <div className="mx-3 my-4">
        <div className="container-fluid rounded shadow">
          <div className="row justify-content-center app-w-lg-80vw px-lg-4 gy-2">
            <ProfilSection />
            <SkillSection />
          </div>
        </div>
      </div>
    </>
  );
}
