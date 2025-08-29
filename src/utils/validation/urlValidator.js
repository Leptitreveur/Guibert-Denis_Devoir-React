/**Test de validation de l'URL du site web
 * @param {string} site web à valider
 * @return {boolean} résultat de validation  
 */

export const validateUrlFormat = (website) => {
  if (typeof website !== 'string' || website.trim() === '') return {isValid : false};
  try {
    new URL(website);
    return {isValid : true};
  } catch {
    return {isValid : false};
  }
}