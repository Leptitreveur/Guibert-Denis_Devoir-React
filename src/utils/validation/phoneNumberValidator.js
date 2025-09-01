import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';
import { getCountryCode } from 'src/data/countryCode';

/**
 * Valide le format basique d'un numéro de téléphone (chiffres uniquement)
 *
 * @param {string} phoneStr - Le numéro de téléphone à valider
 * @returns {Object} Objet contenant isValid (boolean) et error (string) si applicable
 */
export const validateBasicPhoneFormat = (phoneStr) => {
  if (!phoneStr) {
    return {
      isValid: false,
      error: 'Le numéro de téléphone est requis',
    };
  }

  if (typeof phoneStr !== 'string') {
    return {
      isValid: false,
      error: 'Le numéro de téléphone doit être une chaîne de caractères',
    };
  }

  const phoneRegex = /^\d+$/;
  if (!phoneRegex.test(phoneStr)) {
    return {
      isValid: false,
      error: `Format de numéro de téléphone invalide: "${phoneStr}". Seuls les chiffres sont autorisés.`,
    };
  }

  return {
    isValid: true,
  };
};

/**
 * Validateur de numéro de téléphone avec libphonenumber-js - standards internationaux.
 *
 * @param {string} phoneStr - Le numéro de téléphone à valider
 * @param {string} countryName - Le nom du pays (ex: 'France', 'United States')
 * @returns {Object} Objet contenant isValid (boolean), error (string) si applicable, et phoneNumber (Object) si valide
 */
export const validatePhoneNumber = (phoneStr, countryName = 'France') => {
  const basicValidation = validateBasicPhoneFormat(phoneStr);
  if (!basicValidation.isValid) {
    return basicValidation;
  }

  const countryCode = getCountryCode(countryName);

  try {
    if (!isValidPhoneNumber(phoneStr, countryCode)) {
      return {
        isValid: false,
        error: `Numéro de téléphone invalide pour le pays ${countryName} (${countryCode})`,
      };
    }

    const phoneNumber = parsePhoneNumber(phoneStr, countryCode);

    if (!phoneNumber.isValid()) {
      return {
        isValid: false,
        error: 'Format de numéro de téléphone invalide',
      };
    }

    return {
      isValid: true,
      phoneNumber: phoneNumber,
    };
  } catch (error) {
    return {
      isValid: false,
      error: `Erreur lors de la validation: ${error.message}`,
    };
  }
};
