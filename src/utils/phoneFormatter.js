import { validatePhoneNumber } from 'src/utils/validation/phoneNumberValidator';

/**
 * Formate un numéro de téléphone au format international
 *
 * @param {string} phoneStr - Le numéro de téléphone à formater
 * @param {string} countryName - Le nom du pays (ex: 'France', 'United States')
 * @returns {string} Le numéro formaté ou le numéro original en cas d'erreur
 */
export const formatPhoneNumber = (phoneStr, countryName = 'France') => {
  try {
    const validation = validatePhoneNumber(phoneStr, countryName);

    if (!validation.isValid) {
      console.warn(`Formatage téléphone échoué: ${validation.error}. Numéro original conservé: ${phoneStr}`);
      return phoneStr;
    }

    const phoneNumber = validation.phoneNumber;

    return phoneNumber.formatInternational();
  } catch (error) {
    console.error('Erreur lors du formatage du numéro de téléphone:', error);
    console.warn(`Numéro original conservé: ${phoneStr}`);
    return phoneStr;
  }
};
