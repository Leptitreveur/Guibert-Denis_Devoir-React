import { getCountryCallingCode } from "libphonenumber-js";

const appel = '1020304050';

function formatAppel(val){
let phone = [];
let x = 0, y = 2;
  
  while (y<=val.length){
    phone.push(val.slice(x , y));
    x+=2;
    y+=2;
  };
  return phone.join(' ');
}
formatAppel(appel);

const addContact = {
  id: 'editor',
  name: 'Jhon Doe',
  address1: '40 rue Laure Diebold',
  address2: '69009 Lyon',
  country: 'France',
  phone: '1020304050',
  email: 'jhon.doe@gmail.com',
};

function Phonix(contact, format){
  
  if(contact.country && contact.phone){
    
    function getCountryCode(countryName) {
      const countryMap = {
        'France': 'FR',
        'Spain': 'ES',
        'Germany': 'DE',
        'Italy': 'IT',
        'United Kingdom': 'GB',
        // Ajoute d'autres pays selon tes besoins
      };
      return countryMap[countryName];
    }
    const countryCode = getCountryCode(contact.country);
    console.log(countryCode);
    try {
      if(countryCode){
        const prefix = '+' + getCountryCallingCode(countryCode);
        return prefix + (' ') + format(contact.phone);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return null;
}

Phonix(addContact, formatAppel);