import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// import './ContactCard.scss';

import { FooterStyle } from 'src/contexts/FooterContext';
import { SocialLinksList } from 'src/components/common/socialLink/SocialLinksList/SocialLinksList';

export const ContactCard = ({ contactData, showIcon = false, toMap = false }) => {
  const style = useContext(FooterStyle);

  if (!contactData || !contactData.id) {
    return null;
  }

  const { id, name, address1, address2, country, phone, email, website } = contactData;

  const formatPhoneNumber = (phoneStr) => {
    if (!phoneStr) return '';

    //* Si le numéro commence par "33", ajouter le préfixe "+33" et formattage
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

  // * gestion du context à la condition "est dans le footer" composant dans le footer ==================================================
  const isFooterField = `${style ? 'app-footer__box app-footer__box--contact' : 'app-card--contact__container'}`;
  const isFooterLegend = `${style ? 'app-footer__nav-legend' : 'app-card--contact__nav-legend'}`;
  const isFooterNav = style ? 'app-footer__nav' : null;
  const isFooterNavItem = `${style ? 'app-footer__nav--item' : 'app-nav__item'}`;
  const isFooterLink = `${style ? 'app-link--footer' : 'app-link'}`;

  // * Fin de gestion de context ========================================================================================================

  return (
    <fieldset id={id.replace(/\s+/g, '-').toLowerCase()} className={isFooterField}>
      <legend className={isFooterLegend}>{name}</legend>
      <ul className={isFooterNav}>
        {address1 && (
          <li className={isFooterNavItem}>
            <Link to={mapLink} target={toMap ? '_blank' : undefined} rel={toMap ? 'noreferrer noopenner' : undefined} className={isFooterLink}>
              {showIcon && <i className="bi bi-map"></i>}
              {address1}
            </Link>
          </li>
        )}

        {address2 && country && (
          <li className={isFooterNavItem}>
            <Link to={mapLink} target={toMap ? '_blank' : undefined} rel={toMap ? 'noreferrer noopenner' : undefined} className={isFooterLink}>
              {showIcon && <i className="bi bi-geo-alt"></i>}
              {address2 ? `${address2}, ` : ''} {country}
            </Link>
          </li>
        )}

        {phone && (
          <li className={isFooterNavItem}>
            <Link to={`tel:{formatPhoneNumber(phone)}`} className={isFooterLink}>
              {showIcon && <i className="bi bi-phone"></i>}
              {formatPhoneNumber(phone)}
            </Link>
          </li>
        )}

        {email && (
          <li className={isFooterNavItem}>
            <Link to={`mailto:{email}`} className={isFooterLink}>
              {showIcon && <i className="bi bi-envelope-at"></i>}
              {email}
            </Link>
          </li>
        )}

        {website && (
          <li className={isFooterNavItem}>
            <Link to={website} className={isFooterLink}>
              {showIcon && <i className="bi bi-globe2 app-icon--bi-globe2"></i>}
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
