import { PropTypes } from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";

import PortfolioCards from "data/portfolioData.js";
import { FooterStyle } from "contexts/FooterContext"
import { NavbarLinkList } from "navbar/NavbarLinkList/NavbarLinkList";
import { ContactCardList } from "contact/ContactCardLsit/ContactCardList";

export function PortfolioLinkList() {
    const style = useContext(FooterStyle);
    const isFooter = style ? "app-footer__box app-footer__box--portfolio" : null;

    return (
        <fieldset className={isFooter}>
            <legend className="app-footer__nav-legend">
                Mes dernières réalisations
            </legend>
            <ul className="app-footer__nav">
                {PortfolioCards.map((data) => (
                    <li key={data.id} className="app-footer__nav-item">
                        <Link
                            to={data.link}
                            target="_blank"
                            rel="noopenner noreferrer"
                            className="app-footer__link"
                        >
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
                <ContactCardList selectedIds={["editor"]} />
                <NavbarLinkList />
                <PortfolioLinkList />
            </FooterStyle.Provider>
        </footer>
    )
};
Footer.propTypes = {
    style: PropTypes.bool
}