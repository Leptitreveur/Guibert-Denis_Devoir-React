import { createHead, UnheadProvider } from "@unhead/react/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "styles/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from "src/App.jsx";
import HomePage from "pages/HomePage/HomePage.jsx";
import ServicesPage from "pages/ServicesPage/ServicesPage.jsx";
import PortfolioPage from "pages/PortfolioPage/PortfolioPage.jsx";
import ContactPage from "pages/ContactPage/ContactPage.jsx";
import LegalNoticePage from "pages/LegalNoticePage/LegalNoticePage.jsx";

import { useScrollToTop } from "src/hooks/useScrollToTop";

export const ScrollToTopWrapper = () => {
  useScrollToTop();
  return null;
};

const head = createHead();

createRoot(document.getElementById("root")).render(
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