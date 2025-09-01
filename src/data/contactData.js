import { validateBasicPhoneFormat } from 'src/utils/validation/phoneNumberValidator';
import { validateEmailFormat } from 'src/utils/validation/emailValidator';
import { validateUrlFormat } from 'src/utils/validation/urlValidator';

const contactCards = [];

const requiredFields = ['id', 'name'];

/**
 * Ajoute un contact avec validation des données
 *
 * @param {Object} data - Données du contact à ajouter
 * @param {string} data.id - Identifiant unique du contact
 * @param {string} data.name - Nom du contact
 * @param {Object} [data.address] - Adresse du contact
 * @param {string} [data.phoneStr] - Numéro de téléphone (format brut)
 * @param {string} [data.email] - Adresse email
 * @param {string} [data.website] - URL du site web
 */
const addContact = (data) => {
  for (const field of requiredFields) {
    if (!data[field]) {
      console.warn(`Champ requis "${field}" manquant pour le contact "${data.id}"`);
      return;
    }
  }

  if (data.phoneStr) {
    const phoneValidation = validateBasicPhoneFormat(data.phoneStr);
    if (!phoneValidation.isValid) {
      console.warn(`Contact "${data.id}": ${phoneValidation.error}`);
      return;
    }
  }

  if (data.email) {
    const { isValid, error } = validateEmailFormat(data.email);
    if (!isValid) {
      console.warn(`"${error}" pour le contact ID "${data.id}". Reçu: ${data.email}`);
      return;
    }
  }

  if (data.website) {
    const urlValidation = validateUrlFormat(data.website);
    if (!urlValidation.isValid) {
      console.warn(`Format de l'Url invalide pour le contact "${data.id}". Url reçu : "${data.website}".`);
      return;
    }
  }

  contactCards.push(data);
};

addContact({
  id: 'editor',
  name: 'Jhon Doe',
  address: {
    street: '40 rue Laure Diebold',
    postalCode: '69009',
    city: 'Lyon',
    country: 'France',
  },
  phoneStr: '0102030405',
  email: 'jhon.doe@gmail.com',
});

addContact({
  id: 'host',
  name: 'alwaysdata',
  address: {
    street: '91 rue du Faubourg Saint-Honoré',
    postalCode: '75008',
    city: 'Paris',
    country: 'France',
  },
  website: 'https://www.alwaysdata.com/fr/',
});

/**
 * Récupère un contact par son ID
 *
 * @param {string} id - ID du contact à récupérer
 * @returns {Object|null} Le contact trouvé ou null si non trouvé
 */
export const getContacts = (id) => contactCards.find((contact) => contact.id === id);

export default contactCards;
