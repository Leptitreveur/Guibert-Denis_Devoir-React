import { PropTypes } from 'prop-types';

import { FooterStyle } from 'src/contexts/FooterContext';
import { ContactCardsList } from 'src/components/contact/ContactCardsList/ContactCardsList';
import { NavbarLinksList } from 'src/components/navbar/NavbarLinksList/navbarLinksList';
import {PortfolioLinksList } from 'src/FooterItems/FooterPortfolioLinks'


export default function Footer() {
  return (
    <footer className="container-fluid bg-dark text-light">
      <div className="row row-cols-md-3">
        <FooterStyle.Provider value={true}>
          <ContactCardsList selectedIds={['editor']}/>
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
