import { Outlet } from "react-router-dom";

import { NavbarItems } from 'jsx/dynamic-navbar';
import { Footer } from 'jsx/footer-content.jsx';

export default function App() {
  return(
    <>
      <header className="app_headerContainer">
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top app_navbarBox" >
          <div className="container-fluid">
            <p className="nav-brand app_nav-brand"><strong>jhon doe</strong></p>

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
            <NavbarItems/>
          </div>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>

    <Footer/>

    </>
  )
};