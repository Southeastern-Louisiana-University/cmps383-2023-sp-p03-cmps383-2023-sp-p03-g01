/**
 * Validates a username based on these conditions:
 * - Must be between 3 and 20 characters
 * - Must only contain alphanumeric characters
 * - Must not contain any spaces
 *
 * @param username The username to validate
 *
 * @returns True if the username is valid, an error message otherwise
 */
export const validateUsername = (username: string): true | string => {
  if (username.length < 3 || username.length > 20) {
    return 'Username must be between 3 and 20 characters';
  }

  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    return 'Username must only contain alphanumeric characters';
  }

  if (/\s/.test(username)) {
    return 'Username must not contain any spaces';
  }

  return true;
};

/**
 * Validates a password based on these conditions:
 * - Must be between 8 and 20 characters
 * - Must contain at least one uppercase letter
 * - Must contain at least one lowercase letter
 * - Must contain at least one number
 * - Must contain at least one of the following special characters: !@#$%^&_+
 * - Must not contain any spaces
 */
export const validatePassword = (password: string): true | string => {
  if (password.length < 8 || password.length > 20) {
    return 'Password must be between 8 and 20 characters';
  }

  if (!/[a-z]/.test(password)) {
    return 'Password must contain at least one lowercase letter';
  }

  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter';
  }

  if (!/[0-9]/.test(password)) {
    return 'Password must contain at least one number';
  }

  if (!/[!@#$%^&_+]/.test(password)) {
    return 'Password must contain at least one of the following special characters: !@#$%^&_+';
  }

  if (/\s/.test(password)) {
    return 'Password must not contain any spaces';
  }

  return true;
};

/**
 * Validates a name based on these conditions:
 * - Must be between 1 and 50 characters
 * - Must only contain letters, spaces, apostrophes, and dashes
 * - Spaces and dashes must have a letter on either side
 * - Apostrophes must have a letter on the left side
 */
export const validateName = (name: string): true | string => {
  if (name.length < 1 || name.length > 50) {
    return 'Name must be between 1 and 50 characters';
  }

  if (!/^[a-zA-Z]+([-'\s][a-zA-Z]+)*$/.test(name)) {
    return 'Name must only contain letters, spaces, apostrophes, and dashes';
  }

  if (/\s-/.test(name) || /-\s/.test(name)) {
    return 'Spaces and dashes must have a letter on either side';
  }

  if (/-'/.test(name)) {
    return 'Apostrophes must have a letter on the left side';
  }

  return true;
};

/**
 * Validates an email based on these conditions:
 * - Must be between 5 and 254 characters
 * - Must contain an @ symbol
 * - Must contain only one period
 * - Must not contain any spaces
 * - Must not contain any special characters
 */
export const validateEmail = (email: string): true | string => {
  if (email.length < 5 || email.length > 254) {
    return 'Email must be between 5 and 254 characters';
  }

  if (!/@/.test(email)) {
    return 'Email must contain an @ symbol';
  }

  if (email.split('.').length !== 2) {
    return 'Email must contain only one period';
  }

  if (/\s/.test(email)) {
    return 'Email must not contain any spaces';
  }

  if (!/^[a-zA-Z0-9@.]+$/.test(email)) {
    return 'Email must not contain any special characters';
  }

  return true;
};
