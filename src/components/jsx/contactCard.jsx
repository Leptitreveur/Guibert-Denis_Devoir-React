import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { FooterStyle } from 'jsx/footer-context';
import { SocialLinks } from 'jsx/social-link';

let contacts = [];

const requiredFields = ["id", "name", "address1", "address2", "country", "phone", "email", "website"];

const addContactDynamic = (contact, ignoreEmptyFields = false) => {
    const formattedContact = {};
    requiredFields.forEach(field=>{
        if (ignoreEmptyFields && !contact[field]){
            return;
        }
        if (field === "phone" && contact[field]){
            if (!/^\d+$/.test(contact[field]) || contact[field.lentgh < 9] || contact[field.lentgh > 9]) {
                console.log("Erreur : format de numéro de téléphone invalide.");
                formattedContact[field] = "Numéro invalide";
                return;
            }
            formattedContact[field] = String(contact[field]);
        } else {
            formattedContact[field] = contact[field] || "";
        }
    })
    contacts.push(formattedContact);
};

//* AJOUT DYNAMIQUE DE CONTACT ##################################################################################################

addContactDynamic({
    id : "editor",
    name : "Jhon Doe",
    address1 : "40 rue Laure Diebold",
    address2 : "69009 Lyon",
    country : "France",
    phone : 1020304050,
    email : "jhon.doe@gmail.com",
}, true);

addContactDynamic({
    id : "host",
    name : "alwaysdata",
    address1 : "91 rue du Faubourg Saint-Honoré",
    address2 : "75008 Paris",
    country : "France",
    website : "https://www.alwaysdata.com/fr/",
}, true);
// *FIN D'AJOUT DYNAMIQUE #######################################################################################################

const getContactById = (id) => contacts.find(contact => contact.id === id) || { id : ""};


// ! attention a réécrire la props tomap en toMap ainsi que la proptypes
const BoxCard = ({cardid, showIcon=false, tomap=false}) => {
    const { id, name, address1, address2, country, phone, email, website } = getContactById(cardid);

    const enabledicon = id && id !== "";
        if (!enabledicon){
            console.log("BoxCard message : Contact card's id value is : ", id);
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

    const linkToMap = tomap ? `https://www.google.com/maps?q=${encodeURIComponent(address1+""+address2)}` : '/contact#map';

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
    const isFooterField = `${style ? "footerBox footerBox-contact" : "app_contactCardContainer"}`;
    const isFooterLegend = `${style ? "footerList-legend" : "cardList-legend"}`
    const isFooterList = style ? "footerList" : null;
    const isFooterListItem = `${style ? "footerList-item" : "list-item"}`;
    const isFooterLink = `${style ? "isFooterLink" : "app_link"}`;
// * Fin de gestion de context =======================================================================

    return (
        <fieldset id={`${enabledicon && id ? id.replace(/\s+/g, '-').toLowerCase() : "id-non-trouvee"}`} className={isFooterField}>
            <legend className ={isFooterLegend}>{name}</legend>
            <ul className={isFooterList}>
                {address1 && (
                    <li className={isFooterListItem}>
                        <Link
                            to={linkToMap}
                            target={tomap ? '_blank' : undefined}
                            rel={tomap ? 'noreferrer noopenner' : undefined}
                            className = {isFooterLink}
                        >
                            {showIcon && <i className="bi bi-map"></i>}{address1}
                        </Link>
                    </li>
                )}
                {address2 && country && (
                    <li className={isFooterListItem}>
                        <Link
                            to={linkToMap}
                            target={tomap ? '_blank' : undefined}
                            rel={tomap?'noreferrer noopenner' : undefined}
                            className = {isFooterLink}
                        >
                            {showIcon && <i className="bi bi-geo-alt"></i>}
                            {address2 ? `${address2}, ` : ''} {country}
                        </Link>
                    </li>
                )}
                {phone && (
                    <li className={isFooterListItem}>
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
                    <li className={isFooterListItem}>
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
                    <li className={isFooterListItem}>
                        <Link
                            to={website}
                            className = {isFooterLink}
                        >
                            {showIcon && <i className="bi bi-globe2 app_bi-globe2"></i>}
                            {extractDomain(website)}
                        </Link>
                    </li>
                )}
            </ul>
            <>{style && <SocialLinks/>}</>
        </fieldset>
        )
}
BoxCard.propTypes = {
    cardid : PropTypes.string.isRequired,
    showIcon : PropTypes.bool,
    tomap : PropTypes.bool,
    socialLink : PropTypes.bool,
}

export const ContactList = ({ selectedIds, showIcon=false}) => {
    selectedIds.forEach(id => {
        if (!id.trim()) { // Si l'ID est vide ou uniquement des espaces
            console.log(`Value of <ContactList selectedIds = {["${id}"]} showIcon : {${showIcon}}/>`);
        }
        else if (!contacts.some(contact => contact.id === id)) {
            console.log(`Value of <ContactList selectedIds={["${id}"]} showIcon={${showIcon}} /> does not match any existing ID in the contacts list.`);
        }
    });

    return (
        <>
            {contacts
                .filter(contact => !selectedIds || selectedIds.includes(contact.id))
                .map(contact => (
                    <BoxCard key={contact.id} cardid={contact.id} showIcon={showIcon}  tomap={contact.id === "host"}/>
                ))}
        </>
    );
};
ContactList.propTypes = {
    selectedIds: PropTypes.arrayOf(PropTypes.string),
    showIcon: PropTypes.bool,
};