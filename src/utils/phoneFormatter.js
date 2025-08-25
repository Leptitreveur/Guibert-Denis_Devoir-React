/** Utilitaire de formatage du numéro de téléphone avec libphonenumber-js
 * Fournit un formatage international avec validation complète
 */

// Import de la bibliothèque libphonenumber-js pour le formatage international
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';

/**
 * Valide le format basique d'un numéro de téléphone (chiffres uniquement)
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

/**
 * Valide un numéro de téléphone selon plusieurs critères
 * @param {string} phoneStr - Le numéro de téléphone à valider
 * @param {string} countryName - Le nom du pays (ex: 'France', 'United States')
 * @returns {Object} Résultat de validation avec statut et message d'erreur
 */
const validatePhoneNumber = (phoneStr, countryName = 'France') => {
  // Validation basique d'abord
  const basicValidation = validateBasicPhoneFormat(phoneStr);
  if (!basicValidation.isValid) {
    return basicValidation;
  }

  // Conversion du nom du pays en code pays ISO
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

    // Vérification que le numéro est valide après parsing
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

/**
 * Formate un numéro de téléphone au format international
 * @param {string} phoneStr - Le numéro de téléphone à formater
 * @param {string} countryName - Le nom du pays (ex: 'France', 'United States')
 * @returns {string} Le numéro formaté ou le numéro original en cas d'erreur
 */
export const formatPhoneNumber = (phoneStr, countryName = 'France') => {
  try {
    // Validation du numéro de téléphone
    const validation = validatePhoneNumber(phoneStr, countryName);

    // Si la validation échoue, retourner le numéro original avec un avertissement
    if (!validation.isValid) {
      console.warn(`Formatage téléphone échoué: ${validation.error}. Numéro original conservé: ${phoneStr}`);
      return phoneStr;
    }

    // Récupération de l'objet numéro validé
    const phoneNumber = validation.phoneNumber;

    // Utiliser le formatage international standard fourni par la bibliothèque
    return phoneNumber.formatInternational();
  } catch (error) {
    // Gestion des erreurs inattendues
    console.error('Erreur lors du formatage du numéro de téléphone:', error);
    console.warn(`Numéro original conservé: ${phoneStr}`);
    return phoneStr;
  }
};

/**
 * Fonction utilitaire pour obtenir le code pays à partir du nom du pays
 * @param {string} countryName - Nom du pays (ex: 'France', 'United States')
 * @returns {string} Code pays ISO (ex: 'FR', 'US')
 */
export const getCountryCode = (countryName) => {
  // Mapping des noms de pays vers les codes ISO
  const countryMapping = {
    France: 'FR',
    'United States': 'US',
    Canada: 'CA',
    'United Kingdom': 'GB',
    Germany: 'DE',
    Spain: 'ES',
    Italy: 'IT',
    Belgium: 'BE',
    Switzerland: 'CH',
    Luxembourg: 'LU',
  };

  return countryMapping[countryName] || 'FR'; // Retourne 'FR' par défaut
};
