/**
 * Hook useScrollToTop - Remonte automatiquement en haut de page lors du changement de route
 *
 * Compatible avec le système de hash scroll basé sur les refs.
 * Inclut un délai pour éviter les conflits avec useHashScroll.
 * Ne s'exécute que si aucun hash n'est présent dans l'URL.
 */

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook pour remonter automatiquement en haut de page lors des changements de route
 *
 * Ce hook surveille les changements de pathname et hash dans l'URL.
 * Il remonte en haut de page uniquement si aucun hash n'est présent,
 * laissant useHashScroll gérer les scrolls vers des éléments spécifiques.
 *
 * @returns {void} Aucune valeur de retour
 */
export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const scrollTimeoutRef = useRef(null);

  /**
   * Constantes pour la gestion des délais
   * @description Configuration du délai pour éviter les conflits avec useHashScroll
   */
  const scrollToTopDelay = 50; // Délai plus court que useHashScroll (100ms)

  /**
   * Effet pour remonter en haut de page lors des changements de route
   * @description Surveille les changements de pathname et hash, remonte en haut de page si pas de hash
   * @dependencies [pathname, hash] - Se déclenche quand le pathname ou le hash change
   * @returns {void} Aucune valeur de retour
   */
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
