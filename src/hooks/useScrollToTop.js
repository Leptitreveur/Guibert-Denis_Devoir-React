import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook pour remonter automatiquement en haut de page lors des changements de route
 */
export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const scrollTimeoutRef = useRef(null);

  const scrollToTopDelay = 50;

  /**
   * Effet pour remonter en haut de page lors des changements de route
   */
  useEffect(() => {
    if (!hash) {
      scrollTimeoutRef.current = setTimeout(() => {
        window.scrollTo(0, 0);
      }, scrollToTopDelay);
    }

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [pathname, hash]);

  return;
};
