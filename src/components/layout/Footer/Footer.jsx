import { PropTypes } from 'prop-types';

import { FooterStyle } from 'src/contexts/FooterContext';
import { ContactCardsList } from 'src/components/contact/ContactCardsList/ContactCardsList';
import { NavbarLinksList } from 'src/components/navbar/NavbarLinksList/navbarLinksList';
import { PortfolioLinksList } from 'src/FooterItems/FooterPortfolioLinks';

/**
 * Pied de page avec contacts, navigation et liens de portfolio
 *
 * Composant de pied de page affichant les informations de contact,
 * la navigation et les liens vers le portfolio. Utilise FooterStyle.Provider
 * pour appliquer les styles contextuels appropriés au footer.
 *
 * @returns {JSX.Element} Pied de page avec contenu structuré
 */
export default function Footer() {
  return (
    <footer className="container-fluid p-5 bg-dark text-light">
      <div className="row row-cols-md-4  row-gap-2 column-gap-5 justify-content-center">
        <FooterStyle.Provider value={true}>
          <ContactCardsList selectedIds={['editor']} />
          <NavbarLinksList />
          <PortfolioLinksList />
        </FooterStyle.Provider>
      </div>
    </footer>
  );
}

/**
 * Validation des propriétés du composant Footer
 */
Footer.propTypes = {
  /** Style du footer (non utilisé actuellement) */
  style: PropTypes.bool,
};
