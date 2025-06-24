import './ProfilSection.scss'

import { SectionTitle } from 'src/commponents/common/SectionTitle/SectionTitle';
import ProfilPicture from 'src/assets/images/john-doe-about.jpg';

function TextProfil() {
  const text = [
    'Lorem ipsum dolor sit amet, consecte apiscing elit. Integer nec feugiat tortor. Proin ac tellus sit amet dolor fringilla elementum.Nullam pharetra imperdiet augue ullamcorper pellentesque.',
    'Vestibulum elementum malesuada dapibus. Aenean ultrices eget risus dictum faucibus. Sed vulputate, justo nec auctor pharetra, massa neque posuere turpis, a posuere lacus libero non mauris.',
    ' Curabitur id dapibus nunc, sagittis tincidunt ipsum. Vestibulum egestas consectetur tempor. Aliquam euismod luctus lectus sit amet vulputate. Etiam feugiat justo vel ipsum fermentum.',
  ];

  return (
    <div className="app-profil__box--text">
      {text.map((msg, index) => (
        <p key={index} className="app-profil__item">
          {msg}
        </p>
      ))}
    </div>
  );
}

export function ProfilSection() {
  return (
    <div className="app-profil__container">
      <SectionTitle title="A propos" />
      <div className="app-profil__content">
        <img src={ProfilPicture} alt="About Jhon Doe" className="app-image__profil" />
        <TextProfil />
      </div>
    </div>
  );
}
