import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { FooterStyle } from 'src/contexts/FooterContext';
import { useContextualStyle } from 'src/hooks/useContextualStyle';

import { formatPhoneNumber } from 'src/utils/phoneFormatter';
import { extractDomain } from 'src/utils/domainExtractor';
import { SocialLinksList } from 'src/components/common/socialLink/SocialLinksList/SocialLinksList';

export const ContactCard = ({ contactData, toMap = false }) => {
  // toMap is a boolean that...
  // icon is a boolean that is here to select wither or not dev wants to sow icons before object
  const style = useContextualStyle();
  const isInFooter = useContext(FooterStyle);

  if (!contactData || !contactData.id) {
    return null;
  }

  const { id, name, address = {}, phoneStr, email, website } = contactData;
  const { street, postalCode, city, country } = address;

  const formattedPhone = formatPhoneNumber(phoneStr);

  const mapLink = street && postalCode && city && toMap ? `https://www.google.com/maps?q=${encodeURIComponent(street + '' + postalCode + '' + city)}` : '/ContactPage#map';

  const toMapAttributes = toMap ? { target: '_blank', rel: 'norefferer nooppenner' } : {};

  return (
    <fieldset id={id.replace(/\s+/g, '-').toLowerCase()} className={style.getCardField()}>
      <legend className={style.getCardLegend()}>{name}</legend>
      <ul className={style.getCardList()}>
        {address && (
          <>
            <li className={style.getCardLign()}>
              <Link to={mapLink} {...toMapAttributes} className={style.getCardLink()}>
                {isInFooter && <i className="bi bi-map pe-2"></i>}
                {street}
              </Link>
            </li>
            <li className={style.getCardLign()}>
              <Link to={mapLink} {...toMapAttributes} className={style.getCardLink()}>
                {isInFooter && <i className="bi bi-geo-alt pe-2"></i>}
                {postalCode} {city}
                {country ? `, ${country}` : ''}
              </Link>
            </li>
          </>
        )}

        {phoneStr && (
          <li className={style.getCardLign()}>
            <Link to={`tel:{formatPhoneNumber(phoneStr)}`} className={style.getCardLink()}>
              {isInFooter && <i className="bi bi-phone pe-2"></i>}
              {formattedPhone}
            </Link>
          </li>
        )}

        {email && (
          <li className={style.getCardLign()}>
            <Link to={`mailto:{email}`} className={style.getCardLink()}>
              {isInFooter && <i className="bi bi-envelope-at pe-2"></i>}
              {email}
            </Link>
          </li>
        )}

        {website && (
          <li className={style.getCardLign()}>
            <Link to={website} className={style.getCardLink()}>
              {isInFooter && <i className="bi bi-globe2 pe-2"></i>}
              {extractDomain(website)}
            </Link>
          </li>
        )}
      </ul>
      <>{isInFooter && <SocialLinksList />}</>
    </fieldset>
  );
};

ContactCard.propTypes = {
  contactData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string,
      postalCode: PropTypes.string,
      city: PropTypes.string,
      country: PropTypes.string,
    }),
    phoneStr: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
  toMap: PropTypes.bool,
};
