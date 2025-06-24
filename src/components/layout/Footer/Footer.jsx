import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

import PortfolioCards from 'src/data/portfolioData.js';
import { FooterStyle } from 'src/contexts/FooterContext';
import { NavbarLinksList } from 'src/components/navbar/NavbarLinksList/NavbarLinksList';
// import { ContactCardsList } from 'src/components/contact/ContactCardsLsit/ContactCardsList';

export function PortfolioLinksList() {
  const style = useContext(FooterStyle);
  const isFooter = style ? 'app-footer__box app-footer__box--portfolio' : null;

  return (
    <fieldset className={isFooter}>
      <legend className="app-footer__nav-legend">Mes dernières réalisations</legend>
      <ul className="app-footer__nav">
        {PortfolioCards.map((data) => (
          <li key={data.id} className="app-footer__nav-item">
            <Link to={data.link} target="_blank" rel="noopenner noreferrer" className="app-footer__link">
              <strong>{data.title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export default function Footer({ style = true }) {
  return (
    <footer className="app-footer__container">
      <FooterStyle.Provider value={style}>
        {/* <ContactCardsList selectedIds={['editor']} /> */}
        <NavbarLinksList />
        <PortfolioLinksList />
      </FooterStyle.Provider>
    </footer>
  );
}
Footer.propTypes = {
  style: PropTypes.bool,
};
