export function checkPhoneValidation(phone: string): boolean {
    const sanitized = phone.replace(/\D/g, '');
  
    const egyptianPhoneRegex = /^(010|011|012|015)\d{8}$/;
  
    return egyptianPhoneRegex.test(sanitized);
  }
  