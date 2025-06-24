import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export const SocialLink = ({ linkData }) => {
  if (!linkData) {
    return null;
  }

  const socialIcon = linkData;

  const { id, link, icon } = socialIcon;

  return (
    <Link to={link} target="_blank" rel="noopener noreferrer" id={id} className="app-footer__link">
      <i className={`bi ${icon} app-footer__icon`}></i>
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
