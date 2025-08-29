/**Hook useScrollToTop
 * Remonte automatiquement en haut de page lors du changement de route
 * Compatible avec le système de hash scroll basé sur les refs
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  // Remonte en haut de page à chaque changement de route, sauf si un hash est présent
  // Le hash sera géré par useHashScroll dans les composants concernés
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return;
};
