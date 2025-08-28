export const validateIdFormat = (id) => {
  const errors = [];
  // Validation du type d'ID
  if (!id || typeof id !== 'string') {
    errors.push(`L'ID est manquant ou n'est pas une chaîne de caractères.`);
    return { 
      isValid: false,
      errors
    };
  }

  // Validation du format de l'ID (minuscules, pas de caractères spéciaux)
  if (!/^[a-z0-9]+$/.test(id)) {
    errors.push(`L'ID doit être en minuscules et sans caractères spéciaux (snake_case ou kebab-case non autorisés ici pour simplifier).`);
    return {
      isValid: false,
      errors,
    };
  }

  // Validation de la longueur mininmum d'ID
  if (id.length < 2) {
    errors.push(`L'ID doit contenir au moins 2 caractères.'`);
    return {
      isValid: false,
      errors,
    };
  }

  return { isValid: true };
}