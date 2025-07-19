import { UserProfilModal } from 'src/components/layout/UserProfilModal/UserProfilModal';
import { BgHero } from 'src/components/common/BackgroundImage/BackgroundImage';

export function Presentation () {
  return(
    <div className="position-relative app-w-100vw app-h-40rem app-h-md-45rem d-flex flex-row align-items-center justify-content-center mb-3 mb-md-4 overflow-hidden">
    <BgHero />

    <div className="position-absolute d-flex flex-column align-items-center justify-content-center gap-4 top-25">
      <h1 className="app-presentation-title fs-1">Bonjour, je suis Jhon Doe</h1>
      <h2 className="app-presentation-title fs-2">Développeur web full stack</h2>

      <button className="btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        En savoir plus
      </button>

      <div className="modal-container">
        <UserProfilModal />
      </div>
    </div>
  </div>
  )
}