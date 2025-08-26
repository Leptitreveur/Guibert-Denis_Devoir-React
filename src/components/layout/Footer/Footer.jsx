import { PropTypes } from 'prop-types';

import { FooterStyle } from 'src/contexts/FooterContext';
import { ContactCardsList } from 'src/components/contact/ContactCardsList/ContactCardsList';
import { NavbarLinksList } from 'src/components/navbar/NavbarLinksList/navbarLinksList';
import { PortfolioLinksList } from 'src/FooterItems/FooterPortfolioLinks';

/**Pied de page: contacts, navigation, liens de portfolio.
 * Utilise FooterStyle.Provider pour styles contextuels.
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
Footer.propTypes = {
  style: PropTypes.bool,
};
