// * Redirection vers le points gps dans google map correspondant
export const extractDomain = (url) => {
  if (!url) return '';
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
  } catch (error) {
    console.error("Erreur de parsing d'Url :", error);
    return url;
  }
};
