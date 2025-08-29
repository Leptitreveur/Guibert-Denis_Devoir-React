import { PropTypes } from 'prop-types';
import { forwardRef, useContext } from 'react';

import allNavbarLinks from 'src/data/navbarLinks';
import { FooterStyle } from 'src/contexts/FooterContext';
import { useContextualStyle } from 'src/hooks/useContextualStyle';
import { useFilteredData } from 'src/hooks/useFilteredData';

import { Navbar } from 'src/components/navbar/Navbar/Navbar';

/**
 * Liste de liens de navigation avec filtrage et adaptation selon le contexte
 *
 * Affiche une liste de liens de navigation avec possibilité de filtrage par IDs
 * et adaptation automatique selon le contexte (footer ou navbar). Utilise le
 * contexte FooterStyle pour déterminer l'apparence et les styles appropriés.
 *
 * @param {Object} props - Propriétés du composant
 * @param {string[]} [props.selectedIds] - IDs des liens à afficher (optionnel, affiche tout si non renseigné)
 * @param {React.Ref} ref - Référence pour le collapse Bootstrap (utilisée dans la navbar)
 *
 * @example
 * ```jsx
 * // Dans la navbar (avec ref pour collapse)
 * <NavbarLinksList ref={navbarRef} selectedIds={['home', 'about']} />
 *
 * // Dans le footer (sans ref)
 * <NavbarLinksList selectedIds={['contact', 'portfolio']} />
 *
 * // Tous les liens
 * <NavbarLinksList />
 * ```
 *
 * @returns {JSX.Element} Liste des liens de navigation adaptée au contexte
 */
export const InnerNavbarLinkList = ({ selectedIds = [] }, ref) => {
  const filteredCards = useFilteredData(allNavbarLinks, selectedIds, 'Navbar');
  const { getClassProps } = useContextualStyle();
  const isInFooter = useContext(FooterStyle);

  // Adaptation selon le contexte
  const footerLegend = isInFooter ? <legend {...getClassProps('legend', 'nav')}>Liens utiles</legend> : null;
  const contextualId = isInFooter ? null : 'navbarNav';

  return (
    <fieldset {...getClassProps('field', 'nav')} id={contextualId} ref={ref}>
      {footerLegend}
      <ul {...getClassProps('list', 'nav')}>
        {filteredCards.map((data) => (
          <Navbar key={data.id} navData={data} />
        ))}
      </ul>
    </fieldset>
  );
};

/**
 * Validation des propriétés du composant InnerNavbarLinkList
 */
InnerNavbarLinkList.propTypes = {
  /** IDs des liens de navigation à afficher (optionnel) */
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};

/**
 * Composant NavbarLinksList avec forwardRef pour la gestion des références
 *
 * Permet de passer une référence au composant pour gérer le collapse
 * Bootstrap dans la navbar tout en conservant la fonctionnalité de filtrage.
 */
export const NavbarLinksList = forwardRef(InnerNavbarLinkList);

NavbarLinksList.displayName = 'NavbarLinksList';
