import { PropTypes } from 'prop-types';
import { forwardRef, useContext } from 'react';

import allNavbarLinks from 'src/data/navbarLinks';
import { useFilteredData } from 'src/hooks/useFilteredData';
import { useContextualStyle } from 'src/hooks/useContextualStyle';
import { FooterStyle } from 'src/contexts/FooterContext';

import { Navbar } from 'src/components/navbar/Navbar/Navbar';

export const InnerNavbarLinkList = ({ selectedIds }, ref) => {
  const filteredCards = useFilteredData(allNavbarLinks, selectedIds, 'Navbar');
  const style = useContextualStyle();
  const isInFooter = useContext(FooterStyle);

  const footerLegend = isInFooter ? <legend className={style.getNavLegend()}>Liens utiles</legend> : null;

  return (
    <fieldset className={style.getNavField()} id="navbarNav" ref={ref}>
      {footerLegend}
      <ul className={style.getNavList()}>
        {filteredCards.map((data) => (
          <Navbar key={data.id} navData={data} />
        ))}
      </ul>
    </fieldset>
  );
};

InnerNavbarLinkList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};

export const NavbarLinksList = forwardRef(InnerNavbarLinkList);

NavbarLinksList.displayName = 'NavbarLinksList';
