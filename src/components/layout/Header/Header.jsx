import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Collapse from 'bootstrap/js/dist/collapse';

// import './Header.scss';

import { NavbarLinksList } from 'src/components/navbar/NavbarLinksList/NavbarLinksList';

export default function Header() {
  const navbarCollapsibleRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const collapsibleElement = navbarCollapsibleRef.current;

    if (collapsibleElement && Collapse) {
      let collapseInstance = Collapse.getInstance(collapsibleElement);

      if (collapseInstance) {
        if (collapsibleElement.classList.contains('show')) {
          collapseInstance.hide();
        }
      }
    }
  }, [location.pathname]);

  return (
    <header className="px-3 bg-dark">
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark text-white  text-uppercase app-navbar__box">
        <div className="container-fluid">
          <span className="nav-brandcolor-white fs-5">
            <strong>jhon doe</strong>
          </span>

          <button type="button" className="navbar-toggler border-secondary app-navbar__toggler shadow-none" aria-controls="navbarNav" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon app-navbar__menu-icon"></span>
          </button>
          <NavbarLinksList ref={navbarCollapsibleRef} />
        </div>
      </nav>
    </header>
  );
}
