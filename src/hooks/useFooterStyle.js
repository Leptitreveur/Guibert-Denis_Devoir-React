import { useContext } from 'react';
import { FooterStyle } from 'src/contexts/FooterContext';

// centralisation des styles généraux et conditionnels du context
export const useFooterStyle = () => {
  const isInFooter = useContext(FooterStyle);

  // Ajouter un test afin de retourner une erreur si le contexte pose un problème
  const getClass = (baseClass, addGlobalClass = '') => {
    const classes = [baseClass, addGlobalClass].filter(Boolean);
    return classes.join(' ');
  };

  return {
    getNavId: isInFooter ? null : 'navbarNav',

    getField: (addGlobalClass = '') => getClass(isInFooter ? '' : '', addGlobalClass),

    getLegend: (addGlobalClass = '') => getClass(isInFooter ? 'mb-1 fw-bold' : '', addGlobalClass),

    getNavList: (addGlobalClass = '') => getClass(isInFooter ? 'nav-underline list-unstyled' : 'nav-underline navbar-nav list-unstyled', addGlobalClass),

    getNavLign: (addGlobalClass = '') => getClass(isInFooter ? 'nav-item' : 'nav-item', addGlobalClass),

    getNavLink: (addGlobalClass = '') => getClass(isInFooter ? 'nav-link' : 'nav-link text-decoration-none ', addGlobalClass),

    // Booléens avec vérification explicite
    showLegend: Boolean(isInFooter),
    showSocialLinks: Boolean(isInFooter),
  };
};