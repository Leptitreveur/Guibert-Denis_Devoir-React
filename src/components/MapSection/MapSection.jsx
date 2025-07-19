import { TitleSection } from 'src/components/common/TitleSection/TitleSection';
import { ContactCardsList } from 'src/components/contact/ContactCardsList/ContactCardsList';

export function MapSection() {
  return (
    <section>
      <TitleSection title="Mes coordonnées" />
      <ContactCardsList selectedIds={['editor']} showIcon={true} />
      <iframe
        id="map"
        title="Address"
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.253931508198!2d4.796403976643224!3d45.
                77866571240161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure
                %20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1738229729412!5m2!1sfr!2sfr"
        allowFullScreen
        className="object-fit-cover w-100 app-h-31rem"
      ></iframe>
    </section>
  );
}
