/** Utilitaire de formatage du numéro de téléphone avec libphonenumber-js
 * Fournit un formatage international avec validation complète
 */

// Import de la bibliothèque libphonenumber-js pour le formatage international
import { validatePhoneNumber } from 'src/test/phoneNumberTest';

/** Formate un numéro de téléphone au format international
 * @param {string} phoneStr - Le numéro de téléphone à formater
 * @param {string} countryName - Le nom du pays (ex: 'France', 'United States')
 * @returns {string} Le numéro formaté ou le numéro original en cas d'erreur
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
