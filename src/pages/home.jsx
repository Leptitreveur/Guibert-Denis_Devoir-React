import { useState, useEffect } from 'react'
import React from 'react'
import { Progressbar } from "$/jsx/progressbar"
import { Herobground } from "$/jsx/images"
import { Profil } from "$/jsx/text"

import { Sectiontitle } from "$/jsx/elements"

//          Modal          ===========================================================
export function UserProfile() {
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

  const paragraphs = [
    <p key="1"><i className="bi bi-person"></i><a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.name}</a></p>,
    <p key="2"><i className="bi bi-geo-alt"></i></p>,
    <p key="3"><i className="bi bi-card-text"></i>{user.bio || 'Aucune bio disponible'}</p>,
    <p key="4"><i className="bi bi-box"></i> Repository : {user.public_repos}</p>,
    <p key="5"><i className="bi bi-people"></i> Followers : {user.followers}</p>,
    <p key="6"><i className="bi bi-people"></i> Following : {user.following}</p>
  ]

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content  d-flex flex-column align-items-start justify-content-center bg-dark">

          <div className="modal-header d-flex flex-row justify-content-between w-100">
            <h5 className="modal-title" id='staticBackdropLabel'>Mon profil GitHub</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

            <div className="modal-body custom-modal">
              <div className=''>
                <img src={user.avatar_url} alt={user.login} className="w-100" />
              </div>
              {paragraphs.map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  {index !== paragraphs.length - 1 && <hr className='w-100 m-1'/>}
                </React.Fragment>
              ))}
            </div>

        <div className='modal-footer w-100'>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close"> Fermer </button>
        </div>
        </div>

      </div>
    </div>
  );
}

//          Home page             ==========================================================================================================
export default function Homepage() {
   return(
     <div>
         <div className="d-flex flex-row justify-content-center align-items-center overflow-hidden" style={{height:'40rem'}}>
            <Herobground/>
            <div className="position-absolute text-center text-light">
              <h1 className="Title">Bonjour, je suis Jhon Doe</h1>
              <h2 className="SubTitle">Developpeur web full stack</h2>
              <button className="btn btn-danger" type="button" data-bs-toggle= "modal" data-bs-target="#staticBackdrop">
                En savoir plus
              </button>
              <div className="modal-container">
                <UserProfile/>
              </div>


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
       </div>
 )
}
