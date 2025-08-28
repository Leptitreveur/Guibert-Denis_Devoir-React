export const validateField = (data) => {
  const requiredFields = [ 'id', 'alt', 'title', 'description', 'tools'];

  // Validation des champs requis
  for (const field of requiredFields) {
    if (data[field] === undefined || 
        data[field] === null ||
        (typeof data[field] === 'string' && data[field].trim() === '')) {
      return {
        isValid : false,
        field
      };
    }
  }

  return { isValid :true}
}
