import { useState, useEffect } from 'react';
import User from "../src/assets/icons-svg/user.svg"
import Description from "../src/assets/icons-svg/description.svg"
import Cube from "../src/assets/icons-svg/cube.svg"
import Localisation from "../src/assets/icons-svg/localisation.svg"

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then(response => {
        if (!response.ok) {
          throw new Error('Utilisateur introuvable');
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width="100" />
      <p><img src={User} alt="User" width={16}></img><a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.name}</a></p>
      <p><img src = {Localisation} alt ="Localisation" width={16}></img></p>
      <p><img src={Description} alt="Description" width={16}></img>{user.bio || 'Aucune bio disponible'}</p>
      <p><img src ={Cube} alt = "Cube" width={16}></img>{user.public_repos}</p>
      <p>Followers : {user.followers}</p>
      <p>Following : {user.following}</p>
    </div>
  );
}

export default UserProfile;