// import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { NavbarItems } from 'jsx/dynamic-navbar'
import { ContactList } from "jsx/contact-card"
import { RealistaionItemsList } from "jsx/realisation-card"

export default function App() {
  return(
    <div>
      <header className="app_headerContainer">
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top app_navbarBox" >
          <div className="container-fluid">
            <p className="nav-brand"><strong>jhon doe</strong></p>

            <button type="button"
              className="navbar-toggler app_navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon app_icon-menu"></span>
            </button>

            <div className="collapse navbar-collapse app_collapse" id="navbarNav">
              <NavbarItems/>
            </div>

          </div>
        </nav>
      </header>


      <main className="app_mianContainer">
        <Outlet/>
      </main>

      <footer className ="app_footerContainer">
        <ContactList selectedIds={["editor"]} showicon={false} />
        <div className="app_socialContainer">
          <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer"><i className="bi bi-github app_icon-social"></i></a>
          <a href="https://x.com/?lang=fr" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter app_icon-social"></i></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin app_icon-social"></i></a>
        </div>
        <NavbarItems header={false}/>

        <RealistaionItemsList/>
      </footer>
    </div>
  )
};