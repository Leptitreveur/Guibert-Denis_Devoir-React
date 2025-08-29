/**
 * Hook useContextualStyle - Gestion des styles contextuels selon l'emplacement du composant
 *
 * Fournit des classes CSS adaptées au contexte d'utilisation (footer ou page normale).
 * Permet d'adapter dynamiquement l'apparence des composants selon leur contexte.
 */

import { useContext } from 'react';
import { FooterStyle } from 'src/contexts/FooterContext';

/**
 * Styles communs par type (footer vs default)
 * @description Configuration des styles de base selon le contexte
 */
const commonStyles = {
  field: { footer: 'app-footer__field', default: null },
  legend: { footer: 'text-white fw-bold mb-1', default: 'fw-bold m-0' },
  list: { footer: 'list-unstyled', default: 'navbar-nav ms-auto list-unstyled py-1' },
  lign: { footer: 'nav-item', default: 'nav-item' },
  link: { footer: 'nav-link text-custom-gray-400 p-0', default: 'nav-link text-decoration-none p-0' },
  box: { footer: 'd-flex gap-2 w-auto h-auto', default: null },
  icon: { footer: 'bi ', default: null },
};

/**
 * Styles spécifiques par sous-type et contexte
 * @description Configuration des styles spécifiques selon le type de composant
 */
const specificStyles = {
  field: {
    card: { footer: null, default: null },
    nav: { footer: null, default: 'collapse navbar-collapse' },
    portfolio: { footer: null, default: null },
  },
  legend: {
    card: { footer: null, default: null },
    nav: { footer: null, default: null },
    portfolio: { footer: null, default: null },
  },
  list: {
    card: { footer: null, default: null },
    nav: { footer: null, default: 'gap-3' },
    portfolio: { footer: null, default: null },
  },
  lign: {
    card: { footer: null, default: null },
    nav: { footer: null, default: null },
    portfolio: { footer: null, default: null },
  },
  link: {
    card: { footer: 'app-footer__link', default: null },
    nav: { footer: 'app-footer__link', default: 'app-navbar__link--hover' },
    portfolio: { footer: 'app-footer__link', default: null },
    social: { footer: 'text-custom-gray-700 fs-2 app-footer__icon', default: null },
  },
  box: {
    social: { footer: null, default: null },
  },
  icon: {
    social: { footer: null, default: null },
  },
};

/**
 * Hook pour gérer les styles contextuels selon l'emplacement du composant
 *
 * Ce hook utilise le contexte FooterStyle pour déterminer si le composant
 * se trouve dans le footer ou dans une page normale, et retourne les
 * classes CSS appropriées.
 *
 * @returns {Object} Objet contenant la fonction getClassProps
 * @returns {Function} returns.getClassProps - Fonction pour générer les propriétés de classe
 */
export const useContextualStyle = () => {
  const isInFooter = useContext(FooterStyle);

  /**
   * Génère les propriétés de classe selon le contexte et le type
   *
   * Combine les styles communs et spécifiques selon le contexte (footer ou default)
   * et retourne un objet avec la propriété className si des classes sont définies.
   *
   * @param {string} section - Section (field, legend, list, lign, link, box, icon)
   * @param {string} key - Clé spécifique (card, nav, portfolio, social)
   * @returns {Object|undefined} Propriétés avec className ou undefined si aucune classe
   */
  const getClassProps = (section, key) => {
    // Récupère les styles communs selon le contexte
    const common = isInFooter ? commonStyles[section].footer : commonStyles[section].default;
    // Récupère les styles spécifiques selon le contexte
    const specific = isInFooter ? specificStyles[section][key].footer : specificStyles[section][key].default;

    // Combine et filtre les classes
    const classes = [common, specific].filter(Boolean).join(' ');
    return classes ? { className: classes } : undefined;
  };

  return { getClassProps };
};
