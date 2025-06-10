import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { FooterStyle } from 'jsx/footerContext';
import { SocialIconList } from 'jsx/socialIcons';

let contactCards = [];

const requiredFields = ["id", "name", "address1", "address2", "country", "phone", "email", "website"];

const addContact = (data, ignoreEmptyFields = false) => {
    const formattedData = {};
    requiredFields.forEach(field=>{
        if (ignoreEmptyFields && !data[field]){
            return;
        }
        if (field === "phone" && data[field]){
            if (!/^\d+$/.test(data[field]) || data[field.lentgh < 9] || data[field.lentgh > 9]) {
                console.log("Erreur : format de numéro de téléphone invalide.");
                formattedData[field] = "Numéro invalide";
                return;
            }
            formattedData[field] = String(data[field]);
        } else {
            formattedData[field] = data[field] || "";
        }
    })
    contactCards.push(formattedData);
};

//* AJOUT DYNAMIQUE DE CONTACT ##################################################################################################

addContact({
    id : "editor",
    name : "Jhon Doe",
    address1 : "40 rue Laure Diebold",
    address2 : "69009 Lyon",
    country : "France",
    phone : 1020304050,
    email : "jhon.doe@gmail.com",
}, true);

addContact({
    id : "host",
    name : "alwaysdata",
    address1 : "91 rue du Faubourg Saint-Honoré",
    address2 : "75008 Paris",
    country : "France",
    website : "https://www.alwaysdata.com/fr/",
}, true);
// *FIN D'AJOUT DYNAMIQUE #######################################################################################################

const getContacts = (id) => contactCards.find(contact => contact.id === id) || { id : ""};


const ContactCardBox = ({dataId, showIcon=false, toMap=false}) => {
    const { id, name, address1, address2, country, phone, email, website } = getContacts(dataId);

    const enabledIcon = id && id !== "";
        if (!enabledIcon){
            console.log("ContactBox message : Contact card's id value is : ", id);
        }

    const formatPhoneNumber = (phone) => {
        if (!phone) return "";
        // Si le numéro commence par "33", ajouter le préfixe "+33"
        if (phone.startsWith("33")) {
            return `+${phone.slice(0, 2)} ${phone.slice(2, 3)} ${phone.slice(3, 5)} ${phone.slice(5, 7)} ${phone.slice(7, 9)} ${phone.slice(9)}`;
        }
        // Format par défaut : regrouper par paires
        return phone.match(/.{1,2}/g).join(" ");
    };

    const mapLink = toMap ? `https://www.google.com/maps?q=${encodeURIComponent(address1+""+address2)}` : '/contact#map';

    const extractDomain = (url) => {
        try {
            const parsedUrl = new URL(url);
            return parsedUrl.hostname;
        }
        catch (error){
            console.error("Erreur de parsing d'Url :", error);
            return url;
        }
    }

// * gestion du context à la condition "est dans le footer" composant dans le footer ==================================================

    const style = useContext(FooterStyle);

    const isFooterField = `${style ? "app-footer__box app-footer__Box--contact" : "app-card--contact__container"}`;
    const isFooterLegend = `${style ? "app-footer__nav-legend" : "app-card--contact__nav-legend"}`
    const isFooterNav = style ? "app-footer__nav" : null;
    const isFooterNavItem = `${style ? "app-footer__nav--item" : "app-nav__item"}`;
    const isFooterLink = `${style ? "app-link--footer" : "app-link"}`;

// * Fin de gestion de context ========================================================================================================

    return (
        <fieldset id={`${enabledIcon && id ? id.replace(/\s+/g, '-').toLowerCase() : "id-non-trouvee"}`} className={isFooterField}>
            <legend className ={isFooterLegend}>{name}</legend>
            <ul className={isFooterNav}>
                {address1 && (
                    <li className={isFooterNavItem}>
                        <Link
                            to={mapLink}
                            target={toMap ? '_blank' : undefined}
                            rel={toMap ? 'noreferrer noopenner' : undefined}
                            className = {isFooterLink}
                        >
                            {showIcon && <i className="bi bi-map"></i>}{address1}
                        </Link>
                    </li>
                )}
                {address2 && country && (
                    <li className={isFooterNavItem}>
                        <Link
                            to={mapLink}
                            target={toMap ? '_blank' : undefined}
                            rel={toMap?'noreferrer noopenner' : undefined}
                            className = {isFooterLink}
                        >
                            {showIcon && <i className="bi bi-geo-alt"></i>}
                            {address2 ? `${address2}, ` : ''} {country}
                        </Link>
                    </li>
                )}
                {phone && (
                    <li className={isFooterNavItem}>
                        <Link
                            to={`tel:{formatPhoneNumber(phone)}`}
                            className = {isFooterLink}
                        >
                            {showIcon && <i className="bi bi-phone"></i>}
                            {formatPhoneNumber(phone)}
                        </Link>
                    </li>
                )}
                {email && (
                    <li className={isFooterNavItem}>
                        <Link
                            to={`mailto:{email}`}
                            className = {isFooterLink}
                        >
                            {showIcon && <i className="bi bi-envelope-at"></i>}
                            {email}
                        </Link>
                    </li>
                )}
                {website && (
                    <li className={isFooterNavItem}>
                        <Link
                            to={website}
                            className = {isFooterLink}
                        >
                            {showIcon && <i className="bi bi-globe2 app-icon--bi-globe2"></i>}
                            {extractDomain(website)}
                        </Link>
                    </li>
                )}
            </ul>
            <>{style && <SocialIconList/>}</>
        </fieldset>
        )
}
ContactCardBox.propTypes = {
    dataId : PropTypes.string.isRequired,
    showIcon : PropTypes.bool,
    toMap : PropTypes.bool,
    socialLink : PropTypes.bool,
}

export const ContactCardList = ({ selectedIds, showIcon=false}) => {
    selectedIds.forEach(id => {
        if (!id.trim()) { // Si l'ID est vide ou uniquement des espaces
            console.log(`Value of <ContactCardList selectedIds = {["${id}"]} showIcon : {${showIcon}}/>`);
        }
        else if (!contactCards.some(data => data.id === id)) {
            console.log(`Value of <ContactCardList selectedIds={["${id}"]} showIcon={${showIcon}} /> does not match any existing ID in the contacts list.`);
        }
    });

    return (
        <>
            {contactCards
                .filter(data => !selectedIds || selectedIds.includes(data.id))
                .map(data => (
                    <ContactCardBox key={data.id} dataId={data.id} showIcon={showIcon}  toMap={data.id === "host"}/>
                ))}
        </>
    );
};
ContactCardList.propTypes = {
    selectedIds: PropTypes.arrayOf(PropTypes.string),
    showIcon: PropTypes.bool,
};