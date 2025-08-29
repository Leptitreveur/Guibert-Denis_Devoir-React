/**
 * Gestion des données de contact avec validation
 *
 * Permet d'ajouter des contacts avec validation des champs requis et formats.
 * Fournit un système de validation complet pour assurer la cohérence
 * des données de contact (téléphone, email, URL).
 */

// Import de la validation basique du téléphone
import { validateBasicPhoneFormat } from 'src/utils/validation/phoneNumberValidator';
import { validateEmailFormat } from 'src/utils/validation/emailValidator';
import { validateUrlFormat } from 'src/utils/validation/urlValidator';

const contactCards = [];

/**
 * Champs requis pour un contact
 * @description Liste des champs obligatoires pour la validation
 */
const requiredFields = ['id', 'name'];

/**
 * Ajoute un contact avec validation des données
 *
 * Valide les champs requis, le format du téléphone, de l'email et de l'URL
 * avant d'ajouter le contact au tableau.
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
  // *Début de la validation ============================================================================================
  for (const field of requiredFields) {
    if (!data[field]) {
      console.warn(`Champ requis "${field}" manquant pour le contact "${data.id}"`);
      return;
    }
  }

  // Validation basique du format du numéro de téléphone (chiffres uniquement)
  if (data.phoneStr) {
    const phoneValidation = validateBasicPhoneFormat(data.phoneStr);
    if (!phoneValidation.isValid) {
      console.warn(`Contact "${data.id}": ${phoneValidation.error}`);
      return;
    }
  }

  // Validation du format de l'email
  if (data.email) {
    const { isValid, error } = validateEmailFormat(data.email);
    if (!isValid) {
      console.warn(`"${error}" pour le contact ID "${data.id}". Reçu: ${data.email}`);
      return;
    }
  }

  // Validation du format de l'URL du site web
  if (data.website) {
    const urlValidation = validateUrlFormat(data.website);
    if (!urlValidation.isValid) {
      console.warn(`Format de l'Url invalide pour le contact "${data.id}". Url reçu : "${data.website}".`);
      return;
    }
  }

  // * Fin de la validation ===========================================================================================

  contactCards.push(data);
};

//* AJOUT DYNAMIQUE DE CONTACT ========================================================================================

// Contact de l'éditeur du site
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

// Contact de l'hébergeur
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

// *FIN D'AJOUT DYNAMIQUE ============================================================================================

/**
 * Récupère un contact par son ID
 *
 * @param {string} id - ID du contact à récupérer
 * @returns {Object|null} Le contact trouvé ou null si non trouvé
 */
export const getContacts = (id) => contactCards.find((contact) => contact.id === id);

export default contactCards;
