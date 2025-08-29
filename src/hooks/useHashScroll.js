import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

/**Hook useHashScroll
 * Gère le scroll automatique vers les éléments via hash en utilisant les refs React
 * Remplace document.getElementById() par une approche React-native
 * Inclut une logique de délai et de retry pour palier aux problèmes de timing
 */
export const useHashScroll = () => {
  const { hash } = useLocation();
  const elementRefs = useRef(new Map());
  const retryTimeoutRef = useRef(null);

  // Constantes pour la gestion des délais et retry
  const maxRetries = 5; // Nombre maximum de tentatives
  const retryDelay = 100; // Délai entre chaque tentative (plus long que useScrollToTop)

  // Fonction pour enregistrer une ref d'élément
  const registerElement = useCallback((id, ref) => {
    if (ref) {
      elementRefs.current.set(id, ref);
    } else {
      elementRefs.current.delete(id);
    }
  }, []);

  // Fonction pour scroller vers un élément avec retry
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

  // Effet pour gérer le scroll automatique via hash
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
