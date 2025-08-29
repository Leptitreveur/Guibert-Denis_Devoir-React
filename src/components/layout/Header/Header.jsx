import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Collapse from 'bootstrap/js/dist/collapse';

import { FooterStyle } from 'src/contexts/FooterContext';
import { NavbarLinksList } from 'src/components/navbar/NavbarLinksList/NavbarLinksList';

/**
 * Barre de navigation avec fermeture automatique du menu mobile
 *
 * Composant d'en-tête contenant la barre de navigation principale avec
 * fermeture automatique du menu mobile lors des changements de route.
 * Utilise Bootstrap pour la gestion du collapse et le contexte FooterStyle.
 *
 * @returns {JSX.Element} Barre de navigation avec menu mobile
 */
export default function Header() {
  /**
   * Référence sur la zone collapsible du menu mobile
   * @description Référence DOM pour contrôler le collapse Bootstrap
   */
  const navbarCollapsibleRef = useRef(null);

  /**
   * Localisation actuelle pour détecter les changements de route
   * @description Hook React Router pour surveiller les changements de route
   */
  const location = useLocation();

  /**
   * Effet pour fermer le menu mobile lors des changements de route
   * @description Récupère et ferme l'instance Bootstrap Collapse si ouverte
   * @dependencies [location.pathname] - Se déclenche quand le pathname change
   * @returns {void} Aucune valeur de retour
   */
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
