import { TitleSection } from 'src/components/common/TitleSection/TitleSection';
import ProfilPicture from 'src/assets/images/john-doe-about.jpg';

/** Titre, image de profil (ratio 16/9), texte de présentation.*/

function TextProfil() {
  const text = [
    'Lorem ipsum dolor sit amet, consecte apiscing elit. Integer nec feugiat tortor. Proin ac tellus sit amet dolor fringilla elementum.Nullam pharetra imperdiet augue ullamcorper pellentesque.',
    'Vestibulum elementum malesuada dapibus. Aenean ultrices eget risus dictum faucibus. Sed vulputate, justo nec auctor pharetra, massa neque posuere turpis, a posuere lacus libero non mauris.',
    'Curabitur id dapibus nunc, sagittis tincidunt ipsum. Vestibulum egestas consectetur tempor. Aliquam euismod luctus lectus sit amet vulputate. Etiam feugiat justo vel ipsum fermentum.',
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

export function ProfilPart() {
  return (
    <div className="col-12 col-md-6">
      <TitleSection title="A propos" />
      <>
        <img src={ProfilPicture} alt="About Jhon Doe" className="mb-4 object-fit-cover w-100" style={{ aspectRatio: '16/9' }} />
        <TextProfil />
      </>
    </div>
  );
}
