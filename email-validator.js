/**
 * Validates an email address.
 * 
 * @param {string} email The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
function isValidEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }
  
  // Reject emails containing spaces (leading, trailing, or inside)
  if (/\s/.test(email)) {
    return false;
  }

  // Must contain exactly one '@' symbol
  const parts = email.split('@');
  if (parts.length !== 2) {
    return false;
  }

  const [localPart, domain] = parts;

  // Local part and domain must not be empty
  if (!localPart || !domain) {
    return false;
  }

  // Reject consecutive dots in the local part
  if (localPart.includes('..')) {
    return false;
  }

  // Reject consecutive dots in the domain
  if (domain.includes('..')) {
    return false;
  }

  // Domain cannot start or end with a dot
  if (domain.startsWith('.') || domain.endsWith('.')) {
    return false;
  }

  // Domain must contain a TLD (must have at least one dot)
  const domainParts = domain.split('.');
  if (domainParts.length < 2) {
    return false;
  }

  // TLD must be at least 2 characters long
  const tld = domainParts[domainParts.length - 1];
  if (tld.length < 2) {
    return false;
  }

  // Character set validations
  const localPartRegex = /^[a-zA-Z0-9._%+-]+$/;
  if (!localPartRegex.test(localPart)) {
    return false;
  }

  const domainRegex = /^[a-zA-Z0-9.-]+$/;
  if (!domainRegex.test(domain)) {
    return false;
  }

  return true;
}

module.exports = {
  isValidEmail
};
