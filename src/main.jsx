import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import { ScrollToTop } from 'jsx/global-components'

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'scss/global.css';

import App from "src/App.jsx"
import Home from "pages/home.jsx"
import Services from  "pages/services.jsx"
import Realisations from "pages/realisations.jsx"
import Contact from "pages/contact.jsx"
import LegalNotice from "pages/legal-notice.jsx"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path ="services" element={<Services/>}/>
            <Route path ="realisations" element={<Realisations/>}/>
            <Route path ="contact" element={<Contact/>}/>
            <Route path ="legal-notice" element={<LegalNotice/>}/>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
)
