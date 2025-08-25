/**
 * Utilitaire de formatage du numéro de téléphone
 * @param {string} phoneStr - Le numéro de téléphone à formater
 * @returns {string} Le numéro formaté au format international ou le numéro original si invalide
 */

export const formatPhoneNumber = (phoneStr) => {
  try {
    if (!phoneStr || typeof phoneStr !== 'string') {
      return phoneStr;
    }

    // Supprimer tous les caractères non numériques
    const cleanNumber = phoneStr.replace(/\D/g, '');

    // Vérifier si c'est un numéro français valide (10 chiffres)
    if (cleanNumber.length === 10 && cleanNumber.startsWith('0')) {
      // Format français : +33 X XX XX XX XX
      const countryCode = '+33';
      const nationalNumber = cleanNumber.substring(1); // Enlever le 0
      return `${countryCode} ${nationalNumber.replace(/(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')}`;
    }

    // Si ce n'est pas un numéro français valide, retourner le numéro original
    return phoneStr;
  } catch (error) {
    console.warn('Phone formatting error: ', error);
    return phoneStr;
  }
};
