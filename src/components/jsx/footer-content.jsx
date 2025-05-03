import { PropTypes } from 'prop-types'
import { FooterStyle } from 'jsx/footer-context.jsx'

import { NavbarItems } from 'jsx/dynamic-navbar'
import { ContactList } from "jsx/contact-card"
import { RealistaionsList } from "jsx/realisation-card"

export function Footer({style=true}) {
    return(
        <footer className ="app_footerContainer">
            <FooterStyle.Provider value={style}>
                <ContactList selectedIds={["editor"]}/>
                <NavbarItems footer={true}/>
                <RealistaionsList/>
            </FooterStyle.Provider>
        </footer>
    )
}
Footer.propTypes ={
    style : PropTypes.bool
}