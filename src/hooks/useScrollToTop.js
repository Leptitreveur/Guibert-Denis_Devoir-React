/**Hook useScrollToTop
 * Remonte automatiquement en haut de page lors du changement de route
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  // Remonte en haut de page à chaque changement de route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return;
};
