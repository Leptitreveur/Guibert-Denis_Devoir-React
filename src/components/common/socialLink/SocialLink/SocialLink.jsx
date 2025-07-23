import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { useContextualStyle } from 'src/hooks/useContextualStyle';

export const SocialLink = ({ linkData }) => {
  const style = useContextualStyle();
  if (!linkData) {
    return null;
  }

  const socialIcon = linkData;

  const { id, link, icon } = socialIcon;

  return (
    <Link to={link} target="_blank" rel="noopener noreferrer" id={id} className={style.getSocialLink}>
      <i className={`bi ${icon}`}></i>
    </Link>
  );
};

SocialLink.propTypes = {
  linkData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};
