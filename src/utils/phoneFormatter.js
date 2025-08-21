import PhoneNumber from 'awesome-phonenumber';

export const formatPhoneNumber = (phoneStr) => {
  try {
    const pn = new PhoneNumber(phoneStr);
    return pn.isValid() ? pn.getNumber('international') : phoneStr;
  } catch (error) {
    console.warn('Phone formatting error: ', error);
    return phoneStr;
  }
};
