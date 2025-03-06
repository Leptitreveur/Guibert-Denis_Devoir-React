import Brush from "../assets/icons-svg/brush.svg"
import Code from "../assets/icons-svg/code.svg"
import Research from "../assets/icons-svg/research.svg"

export default function Servicespage() {
  return(
        <div>
            <h1 className="Title">Mon offre de services</h1>
            <p>Voici les prestations sur lequelles je peux intervenir</p>
            {/* Composant à créer */}

            <div>
            <img src={Brush} alt="Pinceau" width={24}></img>
            <h2 className="Service-type">UX Design</h2>
            <p>L UX Design est une discipline qui consiste à concevoir des produite (site web, applications mobiles, logiciels, objets connectés, etc.) 
                en plaçant l utilisatuer au centre des préoccupations. L objetif est de rendre l expérience utilisateur la plus fluide et la plus agréable possible.</p>
            </div>

            <div>
            <img src={Code} alt="Code" width={24}></img>
            <h2 className="Service-type">Développement web</h2>
            <p>Le développement de site web consiste à créer des sites internet en utilisant des languages de prokgrammations (HTML, CSS, JavaScript, PHP, etc.)
                et des frameworks (Bootstrap, React, Angular,etc.).</p>
            </div>

            <div>
            <img src={Research} alt="Recherche" width={24}></img>
            <h2 className="Service-type">Référencement</h2>
            <p>Le référencement naturel (SEO) est une technnique qui consiste à optimiser un site web pour le faire remonter dans les mmoteurs de recherche (Google, Bing, Yahoo, etc.).
                L objectif est d attirer un mawimum de visiteurs qulaifiés sur le site.</p>
            </div>
            
        </div>
  )
}