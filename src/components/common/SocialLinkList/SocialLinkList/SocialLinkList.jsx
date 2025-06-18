
import PropTypes from "prop-types";
import { useFilteredData } from "hooks/useFilteredData";

import allSocialLinks from "data/socialLinksData.js";
import { SocialLink } from 'common/SocialLink/socialLink.jsx'

export function SocialLinksList({ selectedIds }) {

  const filteredCards = useFilteredData(allSocialLinks, selectedIds, 'SocialLink')

  return (
    <div className="app-footer__box--icon">
      {filteredCards.map((data) => (
        <SocialLink key={data.id} linkData={data} />
      ))}
    </div>
  );
}

SocialLinksList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
