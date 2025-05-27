import { Head } from '@unhead/react';
import { useState, useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import { HeroBg } from "jsx/images"
import { Profil } from "jsx/text"
import { SkillsToShow } from 'jsx/skill-section';

// *        MODAL       ===========================================================

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

  const paragraphItem =[
    {key :"1",
      iconClass: "bi-person",
      content: (
        <Link to={user.html_url} target="_blank" rel="noopener noreferrer" className="app_link">
          <span className="app_link-item">{user.name}</span>
        </Link>
      )
    },
    {key: "2",
      iconClass: "bi-geo-alt",
      content: (<span>{user.location}</span>),
    },
    {key: "3",
      iconClass:"bi-card-text",
      content:  (<span>{user.bio}</span>),
    },
    {key: "4",
      iconClass: "bi-box",
      content: (<span>Repository : {user.public_repos}</span>),
    },
    {key: "5",
      iconClass: "bi-people",
      content: (<span>Followers : {user.followers}</span>),
    },
    {key: "6",
      iconClass: "bi-people",
      content: (<span>Following : {user.following}</span>),
    }
]
const commonDivClass = "app_modal-contentBox";

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl app_modalDialog">
        <div className="modal-content app_modal-content">

          <div className="modal-header app_modal-header">
            <h5 className="modal-title" id='staticBackdropLabel'>Mon profil GitHub</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body app_modal-body">
            <div className="app_imageBox">
              <img src={user.avatar_url} alt={user.login} className="app_modal-image" />
            </div>
            <div className="app_infoBox">
              {paragraphItem.map( (item, index) => (
                <React.Fragment key={item.key}>
                  <div className= {commonDivClass}>
                    <i className= {`bi ${item.iconClass}`}></i>
                    {item.content}
                  </div>
                {index !== paragraphItem.length -1 && <hr className="app_hr"/>}
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

// *        Home page             ==========================================================================================================
export default function HomePage() {
  return(
    <>
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Jhon Doe vous propose ses services en qualité de Dév Web Full Stack. Page de présentation."/>
      </Head>
      <div className="app_introductionContainer">
        <HeroBg/>
        <div className="app_introductionContainer-box">
          <h1 className="app_title-1">Bonjour, je suis Jhon Doe</h1>
          <h2 className="app_title-2">Développeur web full stack</h2>
          <button className="btn btn-danger customBtn" type="button" data-bs-toggle= "modal" data-bs-target="#staticBackdrop">
            En savoir plus
          </button>
          <div className="modal-container app_modalContainer">
            <UserProfile/>
          </div>
        </div>
      </div>

      <div className="app_aboutContainer shadow">
        <Profil/>
        <SkillsToShow/>
      </div>
    </>
  )
}
