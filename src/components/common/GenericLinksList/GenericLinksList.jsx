import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import portfolioCards from 'src/data/portfolioData';
import contactCards from 'src/data/contactData';
import navbarLinks from 'src/data/navBarLinks';

export const GenericLinksList = ({ dataType, selectedIds = [], title, className = '' }) => {
  let items = [];

  // Sélection des données selon le type
  switch (dataType) {
    case 'portfolio':
      items = selectedIds.length > 0 ? portfolioCards.filter((card) => selectedIds.includes(card.id)) : portfolioCards;
      break;
    case 'contact':
      items = selectedIds.length > 0 ? contactCards.filter((contact) => selectedIds.includes(contact.id)) : contactCards;
      break;
    case 'navbar':
      items = selectedIds.length > 0 ? navbarLinks.filter((link) => selectedIds.includes(link.id)) : navbarLinks;
      break;
    default:
      items = [];
  }

  return (
    <>
      {items.map((item) => (
        <fieldset key={item.id} className={className}>
          <legend className="pb-2 fw-bold">{title}</legend>
          <ul>
            <li className="position-relative app-footer__box-link">
              <Link to={getLink(item, dataType)} target={getTarget(item, dataType)} rel={getRel(item, dataType)} className="app-footer__link text-custom-gray-300">
                <strong>{getText(item, dataType)}</strong>
              </Link>
            </li>
          </ul>
        </fieldset>
      ))}
    </>
  );
};

// Fonctions utilitaires pour adapter les données selon le type
const getText = (item, dataType) => {
  switch (dataType) {
    case 'portfolio':
      return item.title;
    case 'contact':
      return item.name;
    case 'navbar':
      return item.name;
    default:
      return '';
  }
};

const getLink = (item, dataType) => {
  switch (dataType) {
    case 'portfolio':
      return item.link;
    case 'contact':
      return item.website || `mailto:${item.email}` || '#';
    case 'navbar':
      return item.path;
    default:
      return '#';
  }
};

const getTarget = (item, dataType) => {
  switch (dataType) {
    case 'portfolio':
      return '_blank';
    case 'contact':
      return item.website ? '_blank' : undefined;
    case 'navbar':
      return undefined;
    default:
      return undefined;
  }
};

const getRel = (item, dataType) => {
  switch (dataType) {
    case 'portfolio':
      return 'noopenner noreferrer';
    case 'contact':
      return item.website ? 'noopenner noreferrer' : undefined;
    case 'navbar':
      return undefined;
    default:
      return undefined;
  }
};

GenericLinksList.propTypes = {
  dataType: PropTypes.oneOf(['portfolio', 'contact', 'navbar']).isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};
