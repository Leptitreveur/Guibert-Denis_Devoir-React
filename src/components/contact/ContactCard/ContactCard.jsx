import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { useFooterStyle } from 'src/hooks/useFooterStyle';
import { SocialLinksList } from 'src/components/common/socialLink/SocialLinksList/SocialLinksList';

export const ContactCard = ({ contactData, showIcon = false, toMap = false }) => {
  const style = useFooterStyle();

  if (!contactData || !contactData.id) {
    return null;
  }

  const { id, name, address1, address2, country, phone, email, website } = contactData;

  const formatPhoneNumber = (phoneStr) => {
    if (!phoneStr) return '';

    //* Return a formatted character chain of the phone number if it start with +33 
    if (phoneStr.startsWith('33')) {
      return `+${phoneStr.slice(0, 2)}
                    ${phoneStr.slice(2, 3)}
                    ${phoneStr.slice(3, 5)}
                    ${phoneStr.slice(5, 7)}
                    ${phoneStr.slice(7, 9)}
                    ${phoneStr.slice(9)}`;
    }

    //* Format par défaut : regrouper par paires.
    //* En prevention: '?.' chaînage optionnel permettant de gérer le cas où la valeur de phoneStr.match() serait null ou undefined pour join. Evite un crash
    return phoneStr.match(/.{1,2}/g)?.join(' ') || '';
  };

  // * Redirection vers le points gps dans google map correspondant
  const extractDomain = (url) => {
    if (!url) return '';
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.hostname;
    } catch (error) {
      console.error("Erreur de parsing d'Url :", error);
      return url;
    }
  };

  const mapLink = address1 && address2 && toMap ? `https://www.google.com/maps?q=${encodeURIComponent(address1 + '' + address2)}` : '/ContactPage#map';


  return (
    <fieldset id={id.replace(/\s+/g, '-').toLowerCase()} className={style.getField()} >
      <legend className={style.getLegend()}>{name}</legend>
      <ul className={style.getNavList()}>
        {address1 && (
          <li className={style.getNavLign()}>
            <Link to={mapLink} target={toMap ? '_blank' : undefined} rel={toMap ? 'noreferrer noopenner' : undefined} className={style.getNavLink()}>
              {showIcon && <i className="bi bi-map pe-2"></i>}
              {address1}
            </Link>
          </li>
        )}

        {address2 && country && (
          <li className={style.getNavLign()}>
            <Link to={mapLink} target={toMap ? '_blank' : undefined} rel={toMap ? 'noreferrer noopenner' : undefined} className={style.getNavLink()}>
              {showIcon && <i className="bi bi-geo-alt pe-2"></i>}
              {address2 ? `${address2}, ` : ''} {country}
            </Link>
          </li>
        )}

        {phone && (
          <li className={style.getNavLign()}>
            <Link to={`tel:{formatPhoneNumber(phone)}`} className={style.getNavLink()}>
              {showIcon && <i className="bi bi-phone pe-2"></i>}
              {formatPhoneNumber(phone)}
            </Link>
          </li>
        )}

        {email && (
          <li className={style.getNavLign()}>
            <Link to={`mailto:{email}`} className={style.getNavLink()}>
              {showIcon && <i className="bi bi-envelope-at pe-2"></i>}
              {email}
            </Link>
          </li>
        )}

        {website && (
          <li className={style.getNavLign()}>
            <Link to={website} className={style.getNavLink()}>
              {showIcon && <i className="bi bi-globe2 pe-2"></i>}
              {extractDomain(website)}
            </Link>
          </li>
        )}
      </ul>
      <>{style && <SocialLinksList />}</>
    </fieldset>
  );
};

ContactCard.propTypes = {
  contactData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address1: PropTypes.string,
    address2: PropTypes.string,
    country: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
  showIcon: PropTypes.bool,
  toMap: PropTypes.bool,
};
