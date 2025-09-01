/**
 * Composant des crédits et attributions
 *
 * @returns {JSX.Element} Section des crédits avec liens d'attribution
 */
export function CreditText() {
  const text = [
    <>
      Ce site a été réalisé par Jhon Doe, étudiant au{' '}
      <a href="https:www.centre-europeen-formation.fr/" target="_blank">
        {' '}
        Centre Européen de formation
      </a>
    </>,
    <>
      Les images utilisées sur ce site sont libres de droit et ont été obtenues sur le site{' '}
      <a href="https:pixabay.com/fr/" rel="noreferrer noopenner" target="_blank">
        Pixabay
      </a>
    </>,
    <>
      La favicon de ce site a été fournie par{' '}
      <a href="https:www.flaticon.com/de/kostenlose-icons/john-doe" rel="noreferrer noopenner" target="_blank">
        Jhon Doe icons erstellt von Freepik - Flaticon{' '}
      </a>
      et la conversion des images sur{' '}
      <a href="https:favicon.io/favicon-converter/" rel="noreferrer noopenner" target="_blank">
        {' '}
        favicon.io
      </a>
      .
    </>,
  ];

  return (
    <div>
      <h3 className="fw-bold fs-4">Crédits</h3>
      {text.map((msg, index) => (
        <div key={index}>
          <p>{msg}</p>
        </div>
      ))}
    </div>
  );
}
