import { PropTypes } from "prop-types";

import { FooterStyle } from "jsx/footerContext.jsx";
import { ContactCardList } from "jsx/contactCard";
import { PortfolioLinkList } from "jsx/portfolioCard";
import { NavbarLinkList } from "jsx/navBar";

export function Footer({style=true}) {
    return(
        <footer className ="app-footer__container">
            <FooterStyle.Provider value={style}>
                <ContactCardList selectedIds={["editor"]}/>
                <NavbarLinkList />
                <PortfolioLinkList />
            </FooterStyle.Provider>
        </footer>
    )
};
Footer.propTypes ={
    style : PropTypes.bool
}