import { Head } from '@unhead/react';

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

      <div className="app-introduction__container">
        <BgHero />

        <div className="app-introduction__box">
          <h1 className="app-title--1">Bonjour, je suis Jhon Doe</h1>
          <h2 className="app-title--2">Développeur web full stack</h2>

          <button className="btn btn-danger app-btn" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            En savoir plus
          </button>

          <div className="modal-container app-modal__container">
            <UserProfilModal />
          </div>
        </div>
      </div>

      <div className="app-about__container shadow">
        <ProfilSection />
        <SkillSection />
      </div>
    </>
  );
}
