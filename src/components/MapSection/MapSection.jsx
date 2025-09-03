import { TitleSection } from 'src/components/common/TitleSection/TitleSection';
import { ContactCardsList } from 'src/components/contact/ContactCardsList/ContactCardsList';

/**
 * Section contact avec coordonnées et carte Google Maps intégrée
 *
 * @returns {JSX.Element} Section contact avec carte Maps
 */
export function MapSection() {
  return (
    <section>
      <TitleSection title="Mes coordonnées" />
      <ContactCardsList selectedIds={['editor']} />
      <iframe
        id="map"
        title="Carte Google Maps - Adresse de contact"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4797.138679528067!2d4.796523113185224!3d45.778599070960325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xf8c32f5825c3af27!2s40%20Rue%20Laure%20Diebold%2040%2C%2069009%20Lyon!5e1!3m2!1sfr!2sfr!4v1756889552711!5m2!1sfr!2sfr"
        allowFullScreen=""
        loading="lazy"
        className="object-fit-cover w-100 app-h-31rem"
      ></iframe>
    </section>
  );
}
