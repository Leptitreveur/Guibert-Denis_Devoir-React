/**Hook useScrollToTop
 * Remonte automatiquement en haut de page lors du changement de route
 * Compatible avec le système de hash scroll basé sur les refs
 * Inclut un délai pour éviter les conflits avec useHashScroll
 */

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const scrollTimeoutRef = useRef(null);

  // Constantes pour la gestion des délais
  const scrollToTopDelay = 50; // Délai plus court que useHashScroll (100ms)

  // Remonte en haut de page à chaque changement de route, sauf si un hash est présent
  // Le hash sera géré par useHashScroll dans les composants concernés
  // Délai pour éviter les conflits de timing
  useEffect(() => {
    if (!hash) {
      // Délai pour laisser le temps aux composants de se rendre
      scrollTimeoutRef.current = setTimeout(() => {
        window.scrollTo(0, 0);
      }, scrollToTopDelay);
    }

    // Cleanup des timeouts
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [pathname, hash]);

  return;
};
