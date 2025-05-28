import { useRef, useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Collapse from 'bootstrap/js/dist/collapse';

import { NavbarItems } from 'jsx/dynamic-navbar';
import { Footer } from 'jsx/footer-content.jsx';

export default function App() {

  const navbarCollapsibleRef = useRef(null);
  const location = useLocation();

//   useEffect(() => {
//   console.log("useEffect pour pathname:", location.pathname);
//   const collapsibleElement = navbarCollapsibleRef.current;
//   console.log("Collapsible element:", collapsibleElement);

//   if (collapsibleElement) {
//     console.log("Bootstrap object:", window.bootstrap); // Ou juste `bootstrap` si importé en module
//     const collapseInstance = window.bootstrap.Collapse.getInstance(collapsibleElement);
//     console.log("Collapse instance:", collapseInstance);

//     if (collapseInstance) {
//       console.log("Element has 'show' class:", collapsibleElement.classList.contains('show'));
//       if (collapsibleElement.classList.contains('show')) {
//         console.log("Hiding collapse...");
//         collapseInstance.hide();
//       } else {
//         console.log("Not hiding, 'show' class not present.");
//       }
//     } else {
//       console.log("No collapse instance found. Bootstrap might not be initialized on this element yet, or selector is wrong.");
//     }
//   }
// }, [location.pathname]);

// useEffect(() => {

//   const tryToCloseNavbar = () => {
//     console.log("useEffect pour pathname:", location.pathname);
//     const collapsibleElement = navbarCollapsibleRef.current;
//     console.log("Collapsible element:", collapsibleElement);

//     if (collapsibleElement) {
//       if (window.bootstrap && window.bootstrap.Collapse) { // Vérifie si bootstrap et Collapse existent
//         console.log("Bootstrap object:", window.bootstrap);
//         const collapseInstance = window.bootstrap.Collapse.getInstance(collapsibleElement);
//         console.log("Collapse instance:", collapseInstance);

//         if (collapseInstance) {
//           console.log("Element has 'show' class:", collapsibleElement.classList.contains('show'));
//           if (collapsibleElement.classList.contains('show')) {
//             console.log("Hiding collapse...");
//             collapseInstance.hide();
//           } else {
//             console.log("Not hiding, 'show' class not present.");
//           }
//         } else {
//           console.log("No collapse instance found for this element.");
//         }
//       } else {// Bootstrap n'est pas encore prêt, on pourrait réessayer après un court délai
//         console.log("Bootstrap not ready yet, will try again shortly...");
//         setTimeout(tryToCloseNavbar, 100); // Réessaie dans 100ms
//       }
//     }
//   };
//   tryToCloseNavbar(); // Premier essai
// }, [location.pathname, navbarCollapsibleRef]);

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

  return(
    <>
      <header className="headerContainer">
        <nav
        className="navbar navbar-expand-xl navbar-dark bg-dark app_navbarBox"
        data-bs-theme="dark"
        >
          <div className="container-fluid">
            <span className="nav-brand app_nav-brand"><strong>jhon doe</strong></span>

            <button type="button"
              className="navbar-toggler app_navbar-toggler"
              aria-controls="navbarNav"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon app_icon-menu"></span>
            </button>
            <NavbarItems ref={navbarCollapsibleRef}/>
          </div>
        </nav>
      </header>

      <main className="mainContainer">
        <Outlet/>
      </main>

    <Footer/>

    </>
  )
};