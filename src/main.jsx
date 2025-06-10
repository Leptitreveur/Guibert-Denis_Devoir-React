import { createHead, UnheadProvider } from "@unhead/react/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "scss/global.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';

import { ScrollToTop } from "jsx/globalComponents";

import App from "src/App.jsx";
import Home from "pages/Home.jsx";
import Services from "pages/Services.jsx";
import Portfolio from "pages/Portfolio.jsx";
import ContactForm from "pages/ContactForm.jsx";
import LegalNotice from "pages/LegalNotice.jsx";

const head = createHead();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UnheadProvider head={head}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="Services" element={<Services />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route path="ContactForm" element={<ContactForm />} />
            <Route path="LegalNotice" element={<LegalNotice />} />
          </Route>
        </Routes>
      </Router>
    </UnheadProvider>
  </StrictMode>
);
