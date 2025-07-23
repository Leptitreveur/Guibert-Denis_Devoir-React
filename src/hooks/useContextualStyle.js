import { useContext } from 'react';
import { FooterStyle } from 'src/contexts/FooterContext';

// Styles communs par type
const commonStyles = {
  field: { footer: null, default: null },
  legend: { footer: 'fw-bold', default: null },
  list: { footer: 'list-unstyled', default: 'navbar-nav list-unstyled py-1' },
  lign: { footer: 'nav-item', default: 'nav-item' },
  link: { footer: 'nav-link p-0', default: 'nav-link text-decoration-none p-0' },
  box: { footer: 'd-flex gap-2 w-auto h-auto', default: null },
  icon: { footer: 'bi ', default: null },
};

// Styles spécifiques par sous-type
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
    nav: { footer: null, default: 'nav-underline' },
    portfolio: { footer: null, default: null },
  },
  lign: {
    card: { footer: null, default: null },
    nav: { footer: null, default: null },
    portfolio: { footer: null, default: null },
  },
  link: {
    card: { footer: null, default: null },
    nav: { footer: null, default: null },
    portfolio: { footer: null, default: null },
    social: { footer: 'text-custom-gray-700 fs-3 app-footer__socialLink-effect', default: null },
  },
  box: {
    social: { footer: null, default: null },
  },
  icon: {
    social: { footer: null, default: null },
  },
};

export const useContextualStyle = () => {
  const isInFooter = useContext(FooterStyle);

  const getClassProps = (section, key) => {
    const common = isInFooter ? commonStyles[section].footer : commonStyles[section].default;
    const specific = isInFooter ? specificStyles[section][key].footer : specificStyles[section][key].default;

    const classes = [common, specific].filter(Boolean).join(' ');
    return classes ? { className: classes } : undefined;
  };

  return { getClassProps };
};
