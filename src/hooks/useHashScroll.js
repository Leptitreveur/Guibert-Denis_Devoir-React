import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook useHashScroll - Gestion du scroll automatique vers les éléments via hash
 *
 * Remplace document.getElementById() par une approche React-native utilisant les refs.
 * Inclut une logique de délai et de retry pour palier aux problèmes de timing
 * lors du rendu des composants.
 *
 * @returns {Object} Objet contenant les fonctions et données du hook
 * @returns {Function} returns.registerElement - Fonction pour enregistrer une ref d'élément
 * @returns {Function} returns.scrollToElement - Fonction pour scroller vers un élément avec retry
 * @returns {string|null} returns.currentHash - Hash actuel sans le caractère '#'
 */
export const useHashScroll = () => {
  const { hash } = useLocation();
  const elementRefs = useRef(new Map());
  const retryTimeoutRef = useRef(null);

  /**
   * Constantes pour la gestion des délais et retry
   * @description Configuration des paramètres de retry pour le scroll automatique
   */
  const maxRetries = 5; // Nombre maximum de tentatives
  const retryDelay = 100; // Délai entre chaque tentative (plus long que useScrollToTop)

  /**
   * Enregistre une ref d'élément pour le scroll automatique
   * @param {string} id - Identifiant unique de l'élément
   * @param {HTMLElement|null} ref - Référence DOM de l'élément
   * @returns {void} Aucune valeur de retour
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
      // Élément trouvé, scroll immédiat
      element.scrollIntoView({ behavior: 'smooth' });
      return true;
    } else if (retryCount < maxRetries) {
      // Élément pas encore disponible, retry après délai
      retryTimeoutRef.current = setTimeout(() => {
        scrollToElement(elementId, retryCount + 1);
      }, retryDelay);
      return false;
    } else {
      // Nombre max de tentatives atteint
      console.warn(`Élément avec l'ID "${elementId}" non trouvé après ${maxRetries} tentatives`);
      return false;
    }
  }, []);

  /**
   * Effet pour gérer le scroll automatique via hash
   * @description Surveille les changements de hash dans l'URL et déclenche le scroll automatique
   * @dependencies [hash, scrollToElement] - Se déclenche quand le hash ou la fonction scrollToElement change
   * @returns {void} Aucune valeur de retour
   */
  useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '');

      // Nettoyer les timeouts précédents
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }

      // Tentative de scroll avec retry
      scrollToElement(elementId);
    }

    // Cleanup des timeouts à la destruction du composant
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
