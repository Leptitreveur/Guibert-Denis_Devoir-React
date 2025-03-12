import { Routes, Route, Link } from "react-router-dom"
import Modale from "../pages/modale"

import { Progressbar } from "$/jsx/progressbar"
import { Herobground } from "$/jsx/images"
import { Profil } from "$/jsx/text"

import { Sectiontitle } from "$/jsx/elements"
export default function Homepage() {
   return(
     <div>
         <div className="presentation-container">
            <Herobground/>
            <div className="presentation">
              <h1 className="Title">Bonjour, je suis Jhon Doe</h1>
              <h2 className="SubTitle">Developpeur web full stack</h2>
              <Link to="/modale" className="link btn bg-danger">
                      En savoir plus
              </Link>
            </div>
         </div>

        <div className="about-container shadow">
          <section className="about">
            <Profil className="about__profil" />
          </section>

          <section>
            <Sectiontitle title = "Mes competences"/>

            <Progressbar title="html5" percentage={90} color="bg-danger"/>
            <Progressbar title="css3" percentage={80} color="bg-warning"/>
            <Progressbar title="javascript" percentage={70} color="bg-success"/>
            <Progressbar title="react" percentage={60} color="bg-primary"/>
            <Progressbar title="php" percentage={50} color="bg-info"/>

          </section>
        </div>

       <Routes>
          <Route path="/modale" element={<Modale/>}></Route>
       </Routes>
       </div>
 )
};