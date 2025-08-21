import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Modal from 'bootstrap/js/dist/modal';

/** Modal Bootstrap affichant les informations du profil GitHub.
 * Récupère les données via l'API GitHub et gère les états de chargement/erreur.
 */
export function UserProfilModal() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const modalRef = useRef(null);

  // Récupération des données GitHub et initialisation du modal Bootstrap
  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Utilisateur introuvable');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

    if (modalRef.current) {
      new Modal(modalRef.current);
    }
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  // Configuration des éléments d'information du profil
  const paragraphItem = [
    {
      key: '1',
      iconClass: 'bi-person',
      content: (
        <Link to={user.html_url} target="_blank" rel="noopener noreferrer">
          <span>{user.name}</span>
        </Link>
      ),
    },
    {
      key: '2',
      iconClass: 'bi-geo-alt',
      content: <span>{user.location}</span>,
    },
    { key: '3', iconClass: 'bi-card-text', content: <span>{user.bio}</span> },
    {
      key: '4',
      iconClass: 'bi-box',
      content: <span>Repository : {user.public_repos}</span>,
    },
    {
      key: '5',
      iconClass: 'bi-people',
      content: <span>Followers : {user.followers}</span>,
    },
    {
      key: '6',
      iconClass: 'bi-people',
      content: <span>Following : {user.following}</span>,
    },
  ];

  return (
    <div ref={modalRef} className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-md modal-lg modal-xl container-fluid">
        <div className="modal-content bg-dark text-light container-fluid">
          <div className="modal-header border-secondary">
            <h5 className="modal-title" id="staticBackdropLabel">
              Mon profil GitHub
            </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-4 row">
            <div className="col-12 col-sm-6">
              <img src={user.avatar_url} alt={user.login} className="mx-2 img-fluid" />
            </div>

            <div className="pt-2 mb-4 px-4 col-12 col-sm-6">
              {paragraphItem.map((item, index) => (
                <React.Fragment key={item.key}>
                  <div className="">
                    <i className={`bi ${item.iconClass} me-2`}></i>
                    {item.content}
                  </div>
                  {index !== paragraphItem.length - 1 && <hr className="my-2" />}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="modal-footer border-secondary">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              {' '}
              Fermer{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
