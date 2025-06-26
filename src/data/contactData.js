const contactCards = [];

const requiredFields = ['id', 'name'];

const addContact = (data) => {
  // *Début de la validation ============================================================================================
  for (const field of requiredFields) {
    if (!data[field]) {
      console.warn(`Champ requis "${field}" manquant pour le contact "${data.id}`);
      return;
    }

    if (data.phone) {
      const phoneRegex = /^\d{10}$/;

      if (!phoneRegex.test(data.phone)) {
        console.log(`Format de numéro de téléphone invalide: "${data.phone}"`);
        return;
      }
    }

    if (data.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        console.warn(`Format d'email invalide pour le contact ID "${data.id}". Reçu: ${data.email}`);
        return;
      }
    }

    if (data.website) {
      try {
        new URL(data.website);
        //! la ligne de commentaire qui suit demande au linter d'ignoer l'avertissement concernant le paramètre reçu par catch.
        // ! catch(_) convention de nommage pour signaler que je n'ai pas besoin de détail sur cette erreur
        // eslint-disable-next-line no-unused-vars
      } catch (_) {
        console.warn(`Format de l'Url invalide pour le contact "${data.id}". Url reçu : "${data.website}".`);
        return;
      }
    }
  }
  // * Fin de la validation ===========================================================================================

  contactCards.push(data);
};

//* AJOUT DYNAMIQUE DE CONTACT ========================================================================================

addContact({
  id: 'editor',
  name: 'Jhon Doe',
  address1: '40 rue Laure Diebold',
  address2: '69009 Lyon',
  country: 'France',
  phone: '1020304050',
  email: 'jhon.doe@gmail.com',
});

addContact({
  id: 'host',
  name: 'alwaysdata',
  address1: '91 rue du Faubourg Saint-Honoré',
  address2: '75008 Paris',
  country: 'France',
  website: 'https://www.alwaysdata.com/fr/',
});

// *FIN D'AJOUT DYNAMIQUE ============================================================================================

export const getContacts = (id) => contactCards.find((contact) => contact.id === id);

export default contactCards;
