import { Link } from "react-router-dom"

import UserProfile from '../components/jsx/user-profile';
import Close from "../assets/icons-svg/close.svg"

function Modale()
{
  return(
      <div className="#">
          <h1>Mon profil GitHub</h1>

          <div>
            <Link to = "/">
              <img className="#" src={Close} alt="Close modal" width={24}></img>
            </Link>
            <UserProfile/>
          </div>

          <div>
            <Link to="/">
              <button className="#" type="button">Fermé</button>
            </Link>
          </div>
      </div>
  )
}
export default  Modale