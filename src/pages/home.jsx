import {Routes, Route, Link} from "react-router-dom"
import Modale from "../pages/modale"

import {About} from "../components/jsx/images"
import {Profil} from "../components/jsx/text"

export default function Homepage() {
   return(
     <div>
         <div className="presentation">
           <h1 className="Title">Bonjour, je suis Jhon Doe</h1>
           <h2 className="SubTitle">Developpeur web full stack</h2>
           <Link to="/modale" className="link">
                    En savoir plus
           </Link>
         </div>

         <section className="About">
           <h3>A propos</h3>
           <About/>
           <Profil/>
         </section>

         <section className= "#">
           <h3 className="#">Mes Compétences</h3>
           {/* Composants fonctionnel à créer = titre + progress bar avec des valeurs asynchrones!! ne pas oublier les HOOK */}
             <h4>html</h4>
             <progress value = "90" max = "100" />
             <h4>css</h4>
             <progress value = "80" max = "100" />
             <h4>javascript</h4>
             <progress value = "70" max = "100" />
             <h4>php</h4>
             <progress value = "60" max = "100" />
             <h4>react</h4>
             <progress value = "50" max ="100"/>
         </section>

       <Routes>
          <Route path="/modale" element={<Modale/>}></Route>
       </Routes>
       </div>
 )
};