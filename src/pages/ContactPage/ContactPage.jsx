import { Head } from '@unhead/react';
import { useRef } from 'react';

import './ContactPage.scss';

import { Presentation } from 'src/components/common/Presentation/Presentation';
import { SectionTitle } from 'src/components/common/SectionTitle/SectionTitle';
import { ContactCardsList } from 'src/components/contact/ContactCardsList/ContactCardsList';

export default function ContactPage() {
  const formRef = useRef(null);

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
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Acces au formulaire de contact ainsi qu'à l'adresse professionnelle via la minimap" />
      </Head>

      <Presentation title="Contact" description="Pour me contacter en vue d'un entretien  ou d'une future collaboration, merci de remplir le formulaire de contact." />

      <div className="shadow rounded app-contact__container">
        <section className="app-contact__section--form">
          <SectionTitle title="Formulaire de contact" />
          <div className="app-form__container">
            <form ref={formRef} className="app-form__content needs-validation" noValidate onSubmit={handleSubmit}>
              <div className="app-form__box--input">
                <label htmlFor="name" className="form-label visually-hidden"></label>
                <input id="name" className="form-control" type="text" placeholder="Votre nom" required />
              </div>

              <div className="app-form__box--input">
                <label htmlFor="email" className="form-label visually-hidden"></label>
                <input id="email" className="form-control" type="email" placeholder="Votre adresse e-mail" required />
              </div>

              <div className="app-form__box--input">
                <label htmlFor="phone" className="form-label visually-hidden"></label>
                <input id="phone" className="form-control" type="text" placeholder="Votre numéro de téléphone" required />
              </div>

              <div className="app-form__box--input">
                <label htmlFor="subject" className="form-label visually-hidden"></label>
                <input id="subject" className="form-control" type="text" placeholder="Sujet" required />
              </div>

              <div className="app-form__box--textarea">
                <label htmlFor="text" className="form-label visually-hidden"></label>
                <textarea id="text" className="form-control" placeholder="Votre message" required />
              </div>

              <div className="app-box--btn">
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="app-contact__section--map">
          <SectionTitle title="Mes coordonnées" />

          <div className="app-section--map__content">
            <ContactCardsList selectedIds={['editor']} showIcon={true} />

            <div className="app-map__box" id="map">
              <iframe
                title="Address"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.253931508198!2d4.796403976643224!3d45.
                    77866571240161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure
                    %20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1738229729412!5m2!1sfr!2sfr"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
