import { useState, useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import { HeroBg } from "jsx/images"
import { Profil } from "jsx/text"
import { SkillsToShow } from 'jsx/skill-section';

// import { SectionTitle } from "jsx/components"

// !         Modal          ===========================================================
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
    <div key="1">
      <i className="bi bi-person"></i>
      <Link to={user.html_url} target="_blank" rel="noopener noreferrer" className="app_link">
        <p>{user.name}</p>
      </Link>
    </div>,
    <div key="2">
      <i className="bi bi-geo-alt"></i>
      </div>,
    <div key="3">
      <i className="bi bi-card-text"></i>
      <p>{user.bio || 'Aucune bio disponible'}</p>
    </div>,
    <div key="4">
      <i className="bi bi-box"></i>
      <p>Repository : {user.public_repos}</p>
    </div>,
    <div key="5">
      <i className="bi bi-people"></i>
      <p>Followers : {user.followers}</p>
    </div>,
    <div key="6">
      <i className="bi bi-people"></i>
      <p>Following : {user.following}</p>
    </div>
  ]

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content app_modal-content">

          <div className="modal-header app_modal-header">
            <h5 className="modal-title" id='staticBackdropLabel'>Mon profil GitHub</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body app_modal-body">
            <div className="app_imageBox">
              <img src={user.avatar_url} alt={user.login} className="w-100" />
            </div>
            <div className="app_infoBox">
              {paragraphs.map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  {index !== paragraphs.length - 1 && <hr className='w-100'/>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className='modal-footer app_modal-footer'>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close"> Fermer </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// !        Home page             ==========================================================================================================
export default function HomePage() {
   return(
     <div>
         <div className="app_introductionContainer">
            <HeroBg/>
            <div className="app_introductionContainer-box">
              <h1 className="app_title-1">Bonjour, je suis Jhon Doe</h1>
              <h2 className="app_title-2">Développeur web full stack</h2>
              <button className="btn btn-danger" type="button" data-bs-toggle= "modal" data-bs-target="#staticBackdrop">
                En savoir plus
              </button>
              <div className="modal-container">
                <UserProfile/>
              </div>


            </div>
         </div>

        <div className="app_aboutContainer shadow">
          <section>
            <Profil/>
          </section>

          <SkillsToShow/>
          {/* <section>
            <SectionTitle title = "Mes compétences"/>

            <ProgressBar title="html5" percentage={90} color="bg-danger"/>
            <ProgressBar title="css3" percentage={80} color="bg-info"/>
            <ProgressBar title="javascript" percentage={70} color="bg-warning"/>
            <ProgressBar title="php" percentage={60} color="bg-success"/>
            <ProgressBar title="react" percentage={50} color="bg-primary"/>

          </section> */}
        </div>
       </div>
 )
}
