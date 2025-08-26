/** Tests de validation du numéro de téléphone avec libphonenumber-js
 * Fournit une validation complète
 */

import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';
import { getCountryCode } from 'src/data/countryCode';

/**Valide le format basique d'un numéro de téléphone (chiffres uniquement)
 * @param {string} phoneStr - Le numéro de téléphone à valider
 * @returns {Object} Résultat de validation avec statut et message d'erreur
 */

export const validateBasicPhoneFormat = (phoneStr) => {
  // Vérification de la présence du numéro
  if (!phoneStr) {
    return {
      isValid: false,
      error: 'Le numéro de téléphone est requis',
    };
  }

  // Vérification que c'est une chaîne de caractères
  if (typeof phoneStr !== 'string') {
    return {
      isValid: false,
      error: 'Le numéro de téléphone doit être une chaîne de caractères',
    };
  }

  // Validation basique : uniquement des chiffres
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

/**Valide un numéro de téléphone selon plusieurs critères
 * @param {string} phoneStr - Le numéro de téléphone à valider
 * @param {string} countryName - Le nom du pays (ex: 'France', 'United States')
 * @returns {Object} Résultat de validation avec statut et message d'erreur
 */
export const validatePhoneNumber = (phoneStr, countryName = 'France') => {
  // Validation basique d'abord
  const basicValidation = validateBasicPhoneFormat(phoneStr);
  if (!basicValidation.isValid) {
    return basicValidation;
  }

  // Stockage de la fonction de getCountryCode(countryName) pour améliorer la lisibilité/manipulation
  const countryCode = getCountryCode(countryName);

  // Validation avec libphonenumber-js
  try {
    // Test de validité du numéro avec le pays spécifié
    if (!isValidPhoneNumber(phoneStr, countryCode)) {
      return {
        isValid: false,
        error: `Numéro de téléphone invalide pour le pays ${countryName} (${countryCode})`,
      };
    }

    // Parsing du numéro pour vérification supplémentaire
    const phoneNumber = parsePhoneNumber(phoneStr, countryCode);

    // Vérification que le numéro est valide après parsing via methode isValid()
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
