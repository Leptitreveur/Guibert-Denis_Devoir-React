import { createHead, UnheadProvider } from '@unhead/react/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'src/styles/main.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from 'src/App.jsx';
import HomePage from 'src/pages/HomePage/HomePage.jsx';
import ServicesPage from 'src/pages/ServicesPage/ServicesPage.jsx';
import PortfolioPage from 'src/pages/PortfolioPage/PortfolioPage.jsx';
import ContactPage from 'src/pages/ContactPage/ContactPage.jsx';
import LegalNoticePage from 'src/pages/LegalNoticePage/LegalNoticePage.jsx';

import { useScrollToTop } from 'src/hooks/useScrollToTop';

/**
 * Wrapper pour le scroll automatique en haut de page
 *
 * Composant utilitaire qui utilise le hook useScrollToTop pour
 * gérer le scroll automatique lors des changements de route.
 * Retourne null car il n'affiche aucun contenu visible.
 *
 * @returns {null} Aucun rendu visible
 */
export const ScrollToTopWrapper = () => {
  useScrollToTop();
  return null;
};

/**
 * Instance de gestion des métadonnées
 * @description Instance Unhead pour la gestion des métadonnées SEO
 */
const head = createHead();

/**
 * Point d'entrée principal de l'application React
 *
 * Configure et initialise l'application React avec :
 * - React Router pour la navigation
 * - Unhead pour la gestion des métadonnées
 * - ScrollToTopWrapper pour le scroll automatique
 * - Toutes les routes de l'application
 *
 * @description Point d'entrée principal avec configuration complète
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UnheadProvider head={head}>
      <Router>
        <ScrollToTopWrapper />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="ServicesPage" element={<ServicesPage />} />
            <Route path="PortfolioPage" element={<PortfolioPage />} />
            <Route path="ContactPage" element={<ContactPage />} />
            <Route path="LegalNoticePage" element={<LegalNoticePage />} />
          </Route>
        </Routes>
      </Router>
    </UnheadProvider>
  </StrictMode>
);
