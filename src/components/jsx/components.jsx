import { PropTypes } from "prop-types";

import { useScrollToTop } from "src/hooks/useScrollToTop";
import { BgProfil } from "jsx/imageAssets.jsx";
import { TextProfil } from "jsx/textAssets";

// *  ======================================================================================================================

export const ScrollToTopWrapper = () => {
  useScrollToTop();
  return null;
};

//* Component showned to present all pages but home and app ================================================================

export function Presentation({ title, description }) {
  return (
    <div className="app-presentation__container">
      <h1 className="fw-bold">{title}</h1>
      {description && <p>{description}</p>}
      <span className="app-divider" />
    </div>
  );
}
Presentation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

//* Other components =======================================================================================================

export function SectionTitle({ title }) {
  return (
    <div className="app-section--title__container">
      <h2 className="fw-bold">{title}</h2>
      <span className="app-title--underline" />
    </div>
  );
}
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export function ProfilSection() {
  return (
    <div className="app-profil__container">
      <SectionTitle title="A propos" />
      <div className="app-profil__content">
        <BgProfil />
        <TextProfil />
      </div>
    </div>
  );
}
// =======================================================================================================
