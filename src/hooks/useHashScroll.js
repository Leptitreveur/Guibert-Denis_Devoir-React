import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

/**Hook useHashScroll
 * Gère le scroll automatique vers les éléments via hash en utilisant les refs React
 * Remplace document.getElementById() par une approche React-native
 */
export const useHashScroll = () => {
  const { hash } = useLocation();
  const elementRefs = useRef(new Map());

  // Fonction pour enregistrer une ref d'élément
  const registerElement = useCallback((id, ref) => {
    if (ref) {
      elementRefs.current.set(id, ref);
    } else {
      elementRefs.current.delete(id);
    }
  }, []);

  // Fonction pour scroller vers un élément
  const scrollToElement = useCallback((elementId) => {
    const element = elementRefs.current.get(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return true;
    }
    return false;
  }, []);

  // Effet pour gérer le scroll automatique via hash
  useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '');
      const success = scrollToElement(elementId);

      if (!success) {
        console.warn(`Élément avec l'ID "${elementId}" non trouvé pour le hash : ${hash}`);
      }
    }
  }, [hash, scrollToElement]);

  return {
    registerElement,
    scrollToElement,
    currentHash: hash ? hash.replace('#', '') : null,
  };
};
