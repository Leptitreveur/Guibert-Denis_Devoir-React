import {Routes, Route, Link} from "react-router-dom"
import Modale from "../pages/modale"

export default function Homepage() {
   return(
     <div>
         <div>
           <h1 className="Title">Bonjour, je suis Jhon Doe</h1>
           <h2 className="SubTitle">Developpeur web full stack</h2>
           <Link to="/modale">
                    En savoir plus
           </Link>
         </div>

         <section className="About">
           <h3>A propos</h3>
           <img src="/assets/images/john-doe-about.jpg" alt="Jhon Doe working"></img>
           <p className="About-text">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec feugiat tortor. Proin ac tellus sit amet dolor fringilla elementum.
             Nullam pharetra imperdiet augue ullamcorper pellentesque. Phasellus convallis, lorem at dictum ultricies, neque tortor posuere mauris, ac dignissim odio risus et nisl.
             Curabitur molestie tempor tortor, faucibus efficitur massa dictum non. Donec eu tellus in nunc dapibus commodo. Sed ut quam mi. Curabitur suscipit at lorem a dapibus.
             Nullam sed dapibus justo.
 
             Phasellus eu sapien in sapien aliquam interdum vel vel tellus. Vestibulum elementum malesuada dapibus. Aenean ultrices eget risus dictum faucibus.
             Sed vulputate, justo nec auctor pharetra, massa neque posuere turpis, a posuere lacus libero non mauris. Curabitur ac odio consequat, porta risus non, rutrum odio.
             Nulla facilisi. Ut tincidunt purus tellus, ac aliquet neque lobortis id. Nullam urna augue, efficitur vel massa in, aliquet sollicitudin augue.
             Nam libero massa, blandit eget ex ut, pharetra fermentum est. Donec aliquam, tellus non volutpat vehicula, metus libero finibus tortor, at porta ligula felis vitae justo.
             Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam tincidunt, dolor quis vehicula volutpat, est nisl interdum orci, ac auctor libero tortor sed urna.
             Donec ut viverra mi, et efficitur nisi.
 
             Ut ac velit luctus, iaculis eros volutpat, suscipit quam. Aliquam erat volutpat. Nam in nulla urna. Duis nulla sem, pellentesque vitae diam sit amet, consectetur rhoncus tortor.
             Donec convallis ipsum sed convallis bibendum. Praesent ut consectetur lorem. Curabitur lobortis bibendum tortor. Etiam id orci ac odio venenatis faucibus.
             Etiam convallis tincidunt erat et sodales. Vivamus in urna quis lectus varius ornare ac sit amet lacus. Curabitur id dapibus nunc, sagittis tincidunt ipsum.
             Vestibulum egestas consectetur tempor. Aliquam euismod luctus lectus sit amet vulputate. Etiam feugiat justo vel ipsum fermentum, sagittis auctor ex fermentum.
             Fusce sed justo in erat pulvinar eleifend vel sed quam.
           </p>
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