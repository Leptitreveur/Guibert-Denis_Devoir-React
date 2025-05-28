import { createHead, UnheadProvider } from "@unhead/react/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "scss/global.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';

import { ScrollToTop } from "jsx/global-components";

import App from "src/App.jsx";
import Home from "pages/home.jsx";
import Services from "pages/services.jsx";
import Realisations from "pages/realisations.jsx";
import Contact from "pages/contact.jsx";
import LegalNotice from "pages/legal-notice.jsx";

const head = createHead();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UnheadProvider head={head}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="realisations" element={<Realisations />} />
            <Route path="contact" element={<Contact />} />
            <Route path="legal-notice" element={<LegalNotice />} />
          </Route>
        </Routes>
      </Router>
    </UnheadProvider>
  </StrictMode>
);
