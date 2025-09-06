import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { FooterStyle } from 'src/contexts/FooterContext';
import { useContextualStyle } from 'src/hooks/useContextualStyle';

import { formatPhoneNumber } from 'src/utils/phoneFormatter';
import { usablePhoneLink } from 'src/utils/usablePhoneLink';
import { extractDomain } from 'src/utils/domainExtractor';
import { SocialLinksList } from 'src/components/common/socialLink/SocialLinksList/SocialLinksList';

/**
 * Carte de contact avec informations complètes et adaptation contextuelle
 *
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.contactData - Données du contact à afficher
 * @param {string} props.contactData.id - Identifiant unique du contact
 * @param {string} props.contactData.name - Nom du contact
 * @param {Object} [props.contactData.address] - Adresse du contact
 * @param {string} [props.contactData.address.street] - Rue de l'adresse
 * @param {string} [props.contactData.address.postalCode] - Code postal
 * @param {string} [props.contactData.address.city] - Ville
 * @param {string} [props.contactData.address.country] - Pays
 * @param {string} [props.contactData.phoneStr] - Numéro de téléphone (format brut)
 * @param {string} [props.contactData.email] - Adresse email
 * @param {string} [props.contactData.website] - URL du site web
 * @param {boolean} [props.toMap] - Active l'ouverture Maps pour l'adresse
 * @returns {JSX.Element|null} Carte de contact ou null si données invalides
 */
export const ContactCard = ({ contactData, toMap = false }) => {
  const { getClassProps } = useContextualStyle();

  const isInFooter = useContext(FooterStyle);
  const isNotInFooter = !useContext(FooterStyle);

  if (!contactData || !contactData.id) {
    return null;
  }

  const { id, name, address = {}, phoneStr, email, website } = contactData;
  const { street, postalCode, city, country } = address;

  const formattedPhone = phoneStr ? formatPhoneNumber(phoneStr, country) : null;

  const mapLink = street && postalCode && city && toMap ? `https://www.google.com/maps?q=${encodeURIComponent(street + ' ' + postalCode + ' ' + city)}` : '/ContactPage#map';

  const toMapAttributes = toMap ? { target: '_blank', rel: 'noreferrer noopener' } : {};

  return (
    <fieldset data-id={id.replace(/\s+/g, '-').toLowerCase()} {...getClassProps('field', 'card')}>
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

        {formattedPhone && (
          <li {...getClassProps('lign', 'card')}>
            <Link to={`tel:${usablePhoneLink(formattedPhone)}`} {...getClassProps('link', 'card')}>
              {isNotInFooter && <i className="bi bi-phone pe-2"></i>}
              {formattedPhone}
            </Link>
          </li>
        )}

        {email && (
          <li {...getClassProps('lign', 'card')}>
            <Link to={`mailto:${email}`} {...getClassProps('link', 'card')}>
              {isNotInFooter && <i className="bi bi-envelope-at pe-2"></i>}
              {email}
            </Link>
          </li>
        )}

        {website && (
          <li {...getClassProps('lign', 'card')}>
            <a href={website} target="_blank" rel="noreferrer noopener" {...getClassProps('link', 'card')}>
              {isNotInFooter && <i className="bi bi-globe2 pe-2"></i>}
              {extractDomain(website)}
            </a>
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
