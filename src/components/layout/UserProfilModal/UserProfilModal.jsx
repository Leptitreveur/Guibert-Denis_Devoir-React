import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Modal from 'bootstrap/js/dist/modal';

import './UserProfilModal.scss'

export function UserProfilModal() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const modalRef = useRef(null);

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

  const paragraphItem = [
    {
      key: '1',
      iconClass: 'bi-person',
      content: (
        <Link to={user.html_url} target="_blank" rel="noopener noreferrer" className="app-link">
          <span className="app-link__item">{user.name}</span>
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

  const commonDivClass = 'app-modal__info-content';

  return (
    <div ref={modalRef} className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl app-modal__dialog">
        <div className="modal-content app-modal__content">
          <div className="modal-header app-modal__header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Mon profil GitHub
            </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body app-modal__body">
            <div className="app-modal__box--image">
              <img src={user.avatar_url} alt={user.login} className="app-modal__image" />
            </div>

            <div className="app-modal__box--info">
              {paragraphItem.map((item, index) => (
                <React.Fragment key={item.key}>
                  <div className={commonDivClass}>
                    <i className={`bi ${item.iconClass}`}></i>
                    {item.content}
                  </div>
                  {index !== paragraphItem.length - 1 && <hr className="app-hr" />}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="modal-footer app-modal__footer">
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
