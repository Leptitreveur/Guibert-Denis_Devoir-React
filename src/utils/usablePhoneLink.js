export const usablePhoneLink= (phoneNumber) => {
  return phoneNumber.replace(/\s+/g, '');
}