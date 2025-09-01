import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook useHashScroll - Gestion du scroll automatique vers les éléments via hash
 *
 * @returns {Object} Objet contenant les fonctions et données du hook
 */
export const useHashScroll = () => {
  const { hash } = useLocation();
  const elementRefs = useRef(new Map());
  const retryTimeoutRef = useRef(null);
  const maxRetries = 5;
  const retryDelay = 100;

  /**
   * Enregistre une ref d'élément pour le scroll automatique
   * @param {string} id - Identifiant unique de l'élément
   * @param {HTMLElement|null} ref - Référence DOM de l'élément
   */
  const registerElement = useCallback((id, ref) => {
    if (ref) {
      elementRefs.current.set(id, ref);
    } else {
      elementRefs.current.delete(id);
    }
  }, []);

  /**
   * Scrolle vers un élément avec système de retry
   * @param {string} elementId - ID de l'élément vers lequel scroller
   * @param {number} retryCount - Nombre de tentatives déjà effectuées
   * @returns {boolean} true si l'élément a été trouvé et scrollé, false sinon
   */
  const scrollToElement = useCallback((elementId, retryCount = 0) => {
    const element = elementRefs.current.get(elementId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return true;
    } else if (retryCount < maxRetries) {
      retryTimeoutRef.current = setTimeout(() => {
        scrollToElement(elementId, retryCount + 1);
      }, retryDelay);
      return false;
    } else {
      console.warn(`Élément avec l'ID "${elementId}" non trouvé après ${maxRetries} tentatives`);
      return false;
    }
  }, []);

  /**
   * Effet pour gérer le scroll automatique via hash
   */
  useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '');

      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }

      scrollToElement(elementId);
    }

    return () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
    };
  }, [hash, scrollToElement]);

  return {
    registerElement,
    scrollToElement,
    currentHash: hash ? hash.replace('#', '') : null,
  };
};
