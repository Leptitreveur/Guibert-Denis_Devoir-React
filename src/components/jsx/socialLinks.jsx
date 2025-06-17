
import PropTypes from "prop-types";
import { useFilteredData } from "hooks/useFilteredData";

import allSocialLinks from "jsx/socialLinksData.jsx";
import { SocialLinkBox } from 'jsx/socialLinkBox.jsx'

export function SocialLinksList({ selectedIds }) {

  const filteredCards = useFilteredData(allSocialLinks, selectedIds, 'SocialLink')

  return (
    <div className="app-footer__box--icon">
      {filteredCards.map((data) => (
        <SocialLinkBox key={data.id} linkData={data} />
      ))}
    </div>
  );
}

SocialLinksList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
