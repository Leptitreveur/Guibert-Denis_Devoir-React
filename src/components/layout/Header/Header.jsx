import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Collapse from 'bootstrap/js/dist/collapse';

import { FooterStyle } from 'src/contexts/FooterContext';
import { NavbarLinksList } from 'src/components/navbar/NavbarLinksList/NavbarLinksList';

/**Barre de navigation; ferme le menu mobile au changement de route.*/
export default function Header() {
  // Ref sur la zone collapsible
  const navbarCollapsibleRef = useRef(null);
  const location = useLocation();

  // useEffect: récupère/ferme l'instance Bootstrap Collapse si ouverte
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
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark text-white text-uppercase">
        <div className="container-fluid px-3">
          <span className="nav-brand fs-5">
            <strong>jhon doe</strong>
          </span>

          <button
            type="button"
            className="navbar-toggler border-secondary app-navbar__toggler shadow-none"
            aria-controls="navbarNav"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <FooterStyle.Provider value={false}>
            <NavbarLinksList ref={navbarCollapsibleRef} />
          </FooterStyle.Provider>
        </div>
      </nav>
    </header>
  );
}
