import UserProfile from './user-profile';

export default function Modale(){
  return(
      <div className="Modale">
              <h1>Mon profil GitHub</h1>
          <div>
            <UserProfile/>
          </div>
          <div>
            <button type="button">Fermé</button>
          </div>
      </div>
  )
}