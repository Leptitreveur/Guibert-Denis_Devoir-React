import { Link } from 'react-router-dom'

export function CreditText() {
  const text = [
    <>
      Ce site a été réalisé par Jhon Doe, étudiant au{" "}
      <Link to="https:www.centre-europeen-formation.fr/" target="_blank">
        {" "}
        Centre Européen de formation
      </Link>
    </>,
    <>
      Les images utilisées sur ce site sont libres de droit et ont été obtenues
      sur le site{" "}
      <Link to="https:pixabay.com/fr/" rel="noreferrer" target="_blank">
        Pixabay
      </Link>
    </>,
    <>
      La favicon de ce site Link été fournie par{" "}
      <Link
        to="https:www.flaticon.com/de/kostenlose-icons/john-doe"
        rel="noreferrer"
        target="_blank"
      >
        Jhon Doe icons erstellt von Freepik - Flaticon{" "}
      </Link>
      et la conversion des images sur{" "}
      <Link
        to="{https:favicon.io/favicon-converter/}"
        rel="noreferrer"
        target="_blank"
      >
        {" "}
        favicon.io
      </Link>
      .
    </>,
  ];
  return (
    <div className="app-credit">
      {text.map((msg, index) => (
        <div key={index}>
          <p>{msg}</p>
        </div>
      ))}
    </div>
  );
}
