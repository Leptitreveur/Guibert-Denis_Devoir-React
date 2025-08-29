/**
 * Utilitaire de formatage du numéro de téléphone avec libphonenumber-js
 *
 * Fournit un formatage international avec validation complète.
 * Utilise la bibliothèque libphonenumber-js pour un formatage robuste
 * et une validation selon les standards internationaux.
 */

// Import de la bibliothèque libphonenumber-js pour le formatage international
import { validatePhoneNumber } from 'src/utils/validation/phoneNumberValidator';

/**
 * Formate un numéro de téléphone au format international
 *
 * Valide d'abord le numéro selon le pays spécifié, puis le formate
 * selon les standards internationaux. En cas d'échec de validation,
 * retourne le numéro original avec un avertissement.
 *
 * @param {string} phoneStr - Le numéro de téléphone à formater
 * @param {string} countryName - Le nom du pays (ex: 'France', 'United States')
 * @returns {string} Le numéro formaté ou le numéro original en cas d'erreur
 *
 * @example
 * ```jsx
 * // Numéro français valide
 * const formatted = formatPhoneNumber('0123456789', 'France');
 * console.log(formatted); // "+33 1 23 45 67 89"
 *
 * // Numéro américain valide
 * const formatted = formatPhoneNumber('5551234567', 'United States');
 * console.log(formatted); // "+1 555 123 4567"
 *
 * // Numéro invalide - retourne l'original
 * const formatted = formatPhoneNumber('invalid', 'France');
 * console.log(formatted); // "invalid" (avec avertissement)
 *
 * // Numéro français sans indicatif
 * const formatted = formatPhoneNumber('123456789', 'France');
 * console.log(formatted); // "+33 1 23 45 67 89"
 * ```
 */
export const formatPhoneNumber = (phoneStr, countryName = 'France') => {
  try {
    // Stockage de la fonction de validatePhoneNumber(phoneStr, countryName) pour améliorer la lisibilité/manipulation
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
