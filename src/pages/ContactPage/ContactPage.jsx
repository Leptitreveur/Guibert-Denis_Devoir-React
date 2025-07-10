import { Head } from '@unhead/react';
import { useRef } from 'react';

// import './ContactPage.scss';

import { Presentation } from 'src/components/common/Presentation/Presentation';
import { TitleSection } from 'src/components/common/TitleSection/TitleSection';
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
      <div className="mx-3 my-4">
        <div className="container-fluid">
          <div className="row justify-content-center app-w-lg-80vw">
            <Presentation title="Contact" description="Pour me contacter en vue d'un entretien  ou d'une future collaboration, merci de remplir le formulaire de contact." />

            <div className="row row-cols-md-2 g-3 pb-3 shadow rounded">
              <section className="col">
                <TitleSection title="Formulaire de contact" />
                <form ref={formRef} className="d-flex flex-column align-items-center gap-2 needs-validation" noValidate onSubmit={handleSubmit}>
                  <div className="w-100 h-100">
                    <label htmlFor="name" className="form-label visually-hidden"></label>
                    <input id="name" className="form-control" type="text" placeholder="Votre nom" required />
                  </div>

                  <div className=" w-100 h-100">
                    <label htmlFor="email" className="form-label visually-hidden"></label>
                    <input id="email" className="form-control" type="email" placeholder="Votre adresse e-mail" required />
                  </div>

                  <div className="w-100 h-100">
                    <label htmlFor="phone" className="form-label visually-hidden"></label>
                    <input id="phone" className="form-control" type="text" placeholder="Votre numéro de téléphone" maxLength="10" required />
                  </div>

                  <div className="w-100 h-100">
                    <label htmlFor="subject" className="form-label visually-hidden"></label>
                    <input id="subject" className="form-control" type="text" placeholder="Sujet" required />
                  </div>

                  <div className="w-100 h-100">
                    <label htmlFor="text" className="form-label visually-hidden"></label>
                    <textarea id="text" className="form-control app-h-29rem" placeholder="Votre message" required />
                  </div>

                  <div className="m-2">
                    <button type="submit" className="btn btn-primary">
                      Envoyer
                    </button>
                  </div>
                </form>
              </section>

              <section>
                <TitleSection title="Mes coordonnées" />
                <>
                  <ContactCardsList selectedIds={['editor']} showIcon={true} />
                  <div className="app-h-35rem" id="map">
                    <iframe
                      title="Address"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.253931508198!2d4.796403976643224!3d45.
                          77866571240161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure
                          %20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1738229729412!5m2!1sfr!2sfr"
                      loading="lazy"
                      allowFullScreen
                      className="object-fit-cover w-100 h-100"
                    ></iframe>
                  </div>
                </>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
