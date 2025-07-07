// import './ProfilSection.scss'

import { SectionTitle } from 'src/components/common/SectionTitle/SectionTitle';
import ProfilPicture from 'src/assets/images/john-doe-about.jpg';

function TextProfil() {
  const text = [
    'Lorem ipsum dolor sit amet, consecte apiscing elit. Integer nec feugiat tortor. Proin ac tellus sit amet dolor fringilla elementum.Nullam pharetra imperdiet augue ullamcorper pellentesque.',
    'Vestibulum elementum malesuada dapibus. Aenean ultrices eget risus dictum faucibus. Sed vulputate, justo nec auctor pharetra, massa neque posuere turpis, a posuere lacus libero non mauris.',
    ' Curabitur id dapibus nunc, sagittis tincidunt ipsum. Vestibulum egestas consectetur tempor. Aliquam euismod luctus lectus sit amet vulputate. Etiam feugiat justo vel ipsum fermentum.',
  ];

  return (
    <div className="text-start text-justify pe-2">
      {text.map((msg, index) => (
        <p key={index} className="">
          {msg}
        </p>
      ))}
    </div>
  );
}

export function ProfilSection() {
  return (
    <div className="col-12 col-md-6">
      <SectionTitle title="A propos" />
      <div className="">{/*appprofilcontent*/}
        <img src={ProfilPicture} alt="About Jhon Doe" className="mb-4 object-fit-cover w-100" style={{ aspectRatio: '16/9',}}  />{/*app-image__profil*/}
        <TextProfil />
      </div>
    </div>
  );
}
