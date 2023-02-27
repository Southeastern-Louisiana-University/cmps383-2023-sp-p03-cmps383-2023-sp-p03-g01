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
