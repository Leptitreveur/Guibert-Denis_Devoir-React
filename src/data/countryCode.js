/** Fonction utilitaire pour obtenir le code pays à partir du nom du pays
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
