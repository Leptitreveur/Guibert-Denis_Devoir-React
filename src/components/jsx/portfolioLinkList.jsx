import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { FooterStyle } from 'jsx/footerContext.jsx';
import PortfolioCards from 'jsx/portfolioCardData.jsx'

export function PortfolioLinkList() {
    const style = useContext(FooterStyle);
    const isFooter = style ? "app-footer__box app-footer__box--portfolio" : null;

    return(
    <fieldset className={isFooter}>
        <legend className="app-footer__nav-legend">Mes dernières réalisations</legend>
        <ul className="app-footer__nav">
                {PortfolioCards
                    .map(data => (
                    <li key={data.id} className="app-footer__nav-item">
                        <Link to={data.link} target="_blank" rel="noopenner noreferrer" className="app-footer__link">
                            <strong>{data.title}</strong>
                        </Link>
                    </li>
                ))}
        </ul>
    </fieldset>)
}