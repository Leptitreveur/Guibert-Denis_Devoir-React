import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './components/scss/main.css';

import App from "./App.jsx"
import Home from "./pages/home.jsx"
import Services from  "./pages/services.jsx"
import Realisations from "./pages/realisations.jsx"
import Contact from "./pages/contact.jsx"
import Mentionslegales from "./pages/mentions-legales.jsx"
import Modale from "./pages/modale.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path ="services" element={<Services/>}/>
            <Route path ="realisations" element={<Realisations/>}/>
            <Route path ="contact" element={<Contact/>}/>
            <Route path ="mentions-legales" element={<Mentionslegales/>}/>
            <Route path ="modale" element={<Modale/>}/>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
)
