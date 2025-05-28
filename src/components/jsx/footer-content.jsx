import { PropTypes } from "prop-types";

import { FooterStyle } from "jsx/footer-context.jsx";
import { ContactList } from "jsx/contact-card";
import { ReaFooterList } from "jsx/realisation-card";
import { NavbarItems } from "jsx/dynamic-navbar";

export function Footer({style=true}) {
    return(
        <footer className ="footerContainer">
            <FooterStyle.Provider value={style}>
                <ContactList selectedIds={["editor"]}/>
                <NavbarItems/>
                <ReaFooterList/>
            </FooterStyle.Provider>
        </footer>
    )
};
Footer.propTypes ={
    style : PropTypes.bool
}