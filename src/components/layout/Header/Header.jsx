import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Collapse from 'bootstrap/js/dist/collapse';

import { NavbarLinkList } from 'navbar/NavabrLinkList/NavbarLinkList';

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
        <header className="app-header__container">
            <nav
                className="navbar navbar-expand-xl navbar-dark bg-dark app-navbar__box"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <span className="nav-brand app-navbar__brand"><strong>jhon doe</strong></span>

                    <button type="button"
                        className="navbar-toggler app-navbar__toggler"
                        aria-controls="navbarNav"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon app-navbar__menu-icon"></span>
                    </button>
                    <NavbarLinkList ref={navbarCollapsibleRef} />
                </div>
            </nav>
        </header>
    )
};