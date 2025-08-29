import { useRef } from 'react';
import { TitleSection } from 'src/components/common/TitleSection/TitleSection';

/**
 * Formulaire de contact avec validation Bootstrap et réinitialisation
 *
 * Composant de formulaire de contact utilisant la validation native HTML5
 * et Bootstrap pour la gestion des erreurs et la réinitialisation automatique.
 * Inclut des champs pour nom, email, téléphone, sujet et message.
 *
 * @returns {JSX.Element} Formulaire de contact avec validation
 */
export function FormSection() {
  /**
   * Référence au formulaire pour la validation
   * @description Référence DOM pour accéder aux méthodes de validation du formulaire
   */
  const formRef = useRef(null);

  /**
   * Gestionnaire de soumission du formulaire
   * @description Empêche l'envoi, ajoute la classe was-validated, réinitialise si valide
   * @param {Event} event - Événement de soumission du formulaire
   * @returns {void} Aucune valeur de retour
   */
  const handleSubmit = (event) => {
    const form = formRef.current;
    event.preventDefault();
    event.stopPropagation();
    form.classList.add('was-validated');

    if (!form.checkValidity()) {
      // error message filled with bootstrap's class was-validated
    } else {
      form.reset();
      form.classList.remove('was-validated');
    }
  };

  return (
    <section>
      <TitleSection title="Formulaire de contact" />
      <form ref={formRef} className="d-flex flex-column gap-2 text-center needs-validation" noValidate onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label visually-hidden"></label>
        <input id="name" className="form-control" type="text" placeholder="Votre nom" required />

        <label htmlFor="email" className="form-label visually-hidden"></label>
        <input id="email" className="form-control" type="email" placeholder="Votre adresse e-mail" required />

        <label htmlFor="phone" className="form-label visually-hidden"></label>
        <input id="phone" className="form-control" type="tel" placeholder="Votre numéro de téléphone" pattern="[0-9]{10}" maxLength="10" required />

        <label htmlFor="subject" className="form-label visually-hidden"></label>
        <input id="subject" className="form-control" type="text" placeholder="Sujet" required />

        <label htmlFor="text" className="form-label visually-hidden"></label>
        <textarea id="text" className="form-control app-h-25rem" type="text" placeholder="Votre message" required />

        <div className="m-2">
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
}
