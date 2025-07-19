import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { useFooterStyle } from 'src/hooks/useFooterStyle';
import PortfolioCards from 'src/data/portfolioData.js';
import { FooterStyle } from 'src/contexts/FooterContext';
import { NavbarLinksList } from 'src/components/navbar/NavbarLinksList/NavbarLinksList';
import { ContactCardsList } from 'src/components/contact/ContactCardsList/ContactCardsList';

export function PortfolioLinksList() {
  const style = useFooterStyle();

  return (
    <fieldset className={style.getField()}>
      <legend className={style.getLegend()}>Mes dernières réalisations</legend>
      <ul className={style.getNavList()}>
        {PortfolioCards.map((data) => (
          <li key={data.id} className={style.getNavLign()}>
            <Link to={data.link} target="_blank" rel="noopenner noreferrer" className={style.getNavLink()}>
              <strong>{data.title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

// ==============================================================================
export default function Footer() {
  return (
    <footer className="container-fluid bg-dark text-light">
      <div className="row row-cols-md-3">
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
