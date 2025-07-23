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
  const { getClassProps } = useContextualStyle();
  const isInFooter = useContext(FooterStyle);
  const isNotInFooter = !useContext(FooterStyle);

  if (!contactData || !contactData.id) {
    return null;
  }

  const { id, name, address = {}, phoneStr, email, website } = contactData;
  const { street, postalCode, city, country } = address;

  const formattedPhone = formatPhoneNumber(phoneStr);

  const mapLink = street && postalCode && city && toMap ? `https://www.google.com/maps?q=${encodeURIComponent(street + '' + postalCode + '' + city)}` : '/ContactPage#map';

  const toMapAttributes = toMap ? { target: '_blank', rel: 'norefferer nooppenner' } : {};

  return (
    <fieldset id={id.replace(/\s+/g, '-').toLowerCase()} {...getClassProps('field', 'card')}>
      <legend {...getClassProps('legend', 'card')}>{name}</legend>
      <ul {...getClassProps('list', 'card')}>
        {address && (
          <>
            <li {...getClassProps('lign', 'card')}>
              <Link to={mapLink} {...toMapAttributes} {...getClassProps('link', 'card')}>
                {isNotInFooter && <i className="bi bi-map pe-2"></i>}
                {street}
              </Link>
            </li>
            <li {...getClassProps('lign', 'card')}>
              <Link to={mapLink} {...toMapAttributes} {...getClassProps('link', 'card')}>
                {isNotInFooter && <i className="bi bi-geo-alt pe-2"></i>}
                {postalCode} {city}
                {country ? `, ${country}` : ''}
              </Link>
            </li>
          </>
        )}

        {phoneStr && (
          <li {...getClassProps('lign', 'card')}>
            <Link to={`tel:{formatPhoneNumber(phoneStr)}`} {...getClassProps('link', 'card')}>
              {isNotInFooter && <i className="bi bi-phone pe-2"></i>}
              {formattedPhone}
            </Link>
          </li>
        )}

        {email && (
          <li {...getClassProps('lign', 'card')}>
            <Link to={`mailto:{email}`} {...getClassProps('link', 'card')}>
              {isNotInFooter && <i className="bi bi-envelope-at pe-2"></i>}
              {email}
            </Link>
          </li>
        )}

        {website && (
          <li {...getClassProps('lign', 'card')}>
            <Link to={website} {...getClassProps('link', 'card')}>
              {isNotInFooter && <i className="bi bi-globe2 pe-2"></i>}
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
