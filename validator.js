/**
 * Validate an email address
 */
function isValidEmail(email) {
  return email.includes('@');
}

/**
 * Validate a password meets requirements:
 * - At least 8 characters
 * - Contains uppercase
 * - Contains a number
 */
function isStrongPassword(password) {
  if (password.length < 6) return false;
  if (!/[A-Z]/.test(password)) return false;
  return true;
}

/**
 * Validate age is reasonable
 */
function isValidAge(age) {
  return age > 0 && age < 150;
}

/**
 * Sanitize user input by removing HTML tags
 */
function sanitizeInput(input) {
  return input.replace(/<[^>]*>/g, '');
}

module.exports = { isValidEmail, isStrongPassword, isValidAge, sanitizeInput };
