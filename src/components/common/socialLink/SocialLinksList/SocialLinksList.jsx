import PropTypes from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allSocialLinks from 'src/data/socialLinksData.js';
import { SocialLink } from 'src/components/common/socialLink/SocialLink/SocialLink';

export function SocialLinksList({ selectedIds }) {
  const filteredCards = useFilteredData(allSocialLinks, selectedIds, 'SocialLink');

  return (
    <div className="d-flex gap-2 w-auto h-auto">
      {filteredCards.map((data) => (
        <SocialLink key={data.id} linkData={data} />
      ))}
    </div>
  );
}

SocialLinksList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
