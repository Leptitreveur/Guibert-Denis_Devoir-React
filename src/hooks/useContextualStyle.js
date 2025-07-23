import { useContext } from 'react';
import { FooterStyle } from 'src/contexts/FooterContext';

// centralisation des styles généraux et conditionnels du context
export const useContextualStyle = () => {
  const isInFooter = useContext(FooterStyle);

  // Ajouter un test afin de retourner une erreur si le contexte pose un problème
  const getClass = (baseClass, addGlobalClass = '') => {
    const classes = [baseClass, addGlobalClass].filter(Boolean);
    return classes.join(' ');
  };

  return {
    getCardField: (addGlobalClass = '') => getClass(isInFooter ? '' : '', addGlobalClass),
    getNavField: (addGlobalClass = '') => getClass(isInFooter ? '' : 'collapse navbar-collapse', addGlobalClass),
    getPortfolioField: (addGlobalClass = '') => getClass(isInFooter ? '' : '', addGlobalClass),

    getCardLegend: (addGlobalClass = '') => getClass(isInFooter ? 'mb-1 fw-bold' : '', addGlobalClass),
    getNavLegend: (addGlobalClass = '') => getClass(isInFooter ? 'mb-1 fw-bold' : '', addGlobalClass),
    getPortfolioLegend: (addGlobalClass = '') => getClass(isInFooter ? 'mb-1 fw-bold' : '', addGlobalClass),

    getCardList: (addGlobalClass = '') => getClass(isInFooter ? 'nav-underline list-unstyled' : 'navbar-nav list-unstyled', addGlobalClass),
    getNavList: (addGlobalClass = '') => getClass(isInFooter ? 'nav-underline list-unstyled' : 'navbar-nav list-unstyled', addGlobalClass),
    getPortfolioList: (addGlobalClass = '') => getClass(isInFooter ? 'nav-underline list-unstyled' : 'navbar-nav list-unstyled', addGlobalClass),

    getCardLign: (addGlobalClass = '') => getClass(isInFooter ? 'nav-item' : 'nav-item', addGlobalClass),
    getNavLign: (addGlobalClass = '') => getClass(isInFooter ? 'nav-item' : 'nav-item', addGlobalClass),
    getPortfolioLign: (addGlobalClass = '') => getClass(isInFooter ? 'nav-item' : 'nav-item', addGlobalClass),

    getCardLink: (addGlobalClass = '') => getClass(isInFooter ? 'nav-link' : 'nav-link text-decoration-none ', addGlobalClass),
    getNavLink: (addGlobalClass = '') => getClass(isInFooter ? 'nav-link' : 'nav-link text-decoration-none ', addGlobalClass),
    getPortfolioLink: (addGlobalClass = '') => getClass(isInFooter ? 'nav-link' : 'nav-link text-decoration-none ', addGlobalClass),

    getSocialBox: (addGlobalClass = '') => getClass(isInFooter ? 'd-flex gap-2 w-auto h-auto' : '', addGlobalClass),
    getSocialLink: (addGlobalClass = '') => getClass(isInFooter ? 'app_footer__link-icon text-custom-gray-700 fs-3' : '', addGlobalClass),
  };
};
