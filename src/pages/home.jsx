import {Routes, Route, Link} from "react-router-dom"
import Modale from "../pages/modale"

import {Progressbar} from "../components/jsx/progressbar"
import {Herobground} from "../components/jsx/images"
import {Profil} from "../components/jsx/text"

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
            {/* <Jdabout className="about__image"/> */}
            <Profil className="about__profil" />
          </section>

          <div >
            <h3>Mes compétences</h3>
              <Progressbar title="html5" percentage={90} color="bg-danger"/>
              <Progressbar title="css3" percentage={80} color="bg-warning"/>
              <Progressbar title="javascript" percentage={70} color="bg-success"/>
              <Progressbar title="react" percentage={60} color="bg-primary"/>
              <Progressbar title="php" percentage={50} color="bg-info"/>
          </div>
        </div>

       <Routes>
          <Route path="/modale" element={<Modale/>}></Route>
       </Routes>
       </div>
 )
};