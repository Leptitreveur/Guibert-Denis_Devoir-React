import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// import './Footer.scss';

import PortfolioCards from 'src/data/portfolioData.js';
import { FooterStyle } from 'src/contexts/FooterContext';
import { NavbarLinksList } from 'src/components/navbar/NavbarLinksList/NavbarLinksList';
import { ContactCardsList } from 'src/components/contact/ContactCardsList/ContactCardsList';

export function PortfolioLinksList() {
  const style = useContext(FooterStyle);
  const isFooter = style ? 'app-footer__box' : null;

  return (
    <fieldset className={isFooter}>
      <legend className="mb-1 fw-bold">Mes dernières réalisations</legend>
      <ul>
        {PortfolioCards.map((data) => (
          <li key={data.id} className="app-footer__box-link ">
            <Link to={data.link} target="_blank" rel="noopenner noreferrer">
              <strong>{data.title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

// ==============================================================================
export default function Footer({ style = true }) {
  return (
    <footer className="container-fluid p-5 text-white justify-content-centered bg-dark app-footer__container">
      <div className="row justify-content-start gap-2 justify-content-md-around gap-md-0 flex-md-nowrap">
        <FooterStyle.Provider value={style}>
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
