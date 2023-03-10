import { Button, LoadingOverlay, Modal, TextInput } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentlyLoggedInUserState } from '../../../recoil/atoms/AuthenticationAtom';
import { COLOR_PALETTE } from '../../../styling/ColorPalette';
import { callATimeout } from '../../../util/callATimeout';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { useDebounce } from '../../../util/useDebounce';
import { validateUsername, validatePassword, validateName, validateEmail } from '../../../util/ValidationFunctions';
import { AUTHENTICATION_MODAL_STYLING } from './AuthenticationModalStyling';

interface AuthenticationModalProps {
  opened: boolean;
  onClose: () => void;
}
/**
 * Modal for handling user account creation and authentication.
 *
 * @param props
 * @param props.opened Whether or not the modal is open.
 * @param props.onClose Function to close the modal.
 */
export function AuthenticationModal({ opened, onClose }: AuthenticationModalProps): React.ReactElement {
  const { width: browserWidth } = useViewportSize();
  const componentSize = getMantineComponentSize(browserWidth);

  // Recoil State
  const setCurrentlyLoggedInUser = useSetRecoilState(currentlyLoggedInUserState);

  // Local State
  const [username, setUsername] = useState('');
  const [usernameErrorMessage, setUsernameErrorMessage] = useState<string | undefined>(undefined);
  const debouncedUsername = useDebounce(username, 500);

  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string | undefined>(undefined);
  const debouncedPassword = useDebounce(password, 500);

  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [repeatedPasswordErrorMessage, setRepeatedPasswordErrorMessage] = useState<string | undefined>(undefined);
  const debouncedRepeatedPassword = useDebounce(repeatedPassword, 500);

  const [name, setName] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState<string | undefined>(undefined);
  const debouncedName = useDebounce(name, 500);

  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | undefined>(undefined);
  const debouncedEmail = useDebounce(email, 500);

  const [isMakingApiCall, setIsMakingApiCall] = useState(false);
  const [userHasAnAccount, setUserHasAnAccount] = useState(true);

  /* Check validity of username as user types */
  useEffect(() => {
    if (debouncedUsername.length > 0) {
      const usernameIsValid = validateUsername(debouncedUsername);

      if (usernameIsValid !== true) {
        setUsernameErrorMessage(usernameIsValid);
      } else {
        setUsernameErrorMessage(undefined);
      }
    }
  }, [debouncedUsername]);

  /* Check validity of password as user types */
  useEffect(() => {
    if (debouncedPassword.length > 0) {
      const passwordIsValid = validatePassword(debouncedPassword);

      if (passwordIsValid !== true) {
        setPasswordErrorMessage(passwordIsValid);
      } else {
        setPasswordErrorMessage(undefined);
      }
    }
  }, [debouncedPassword]);

  /* Check validity of name as user types */
  useEffect(() => {
    if (debouncedName.length > 0) {
      const nameIsValid = validateName(debouncedName);

      if (nameIsValid !== true) {
        setNameErrorMessage(nameIsValid);
      } else {
        setNameErrorMessage(undefined);
      }
    }
  }, [debouncedName]);

  /* Check validity of email as user types */
  useEffect(() => {
    if (debouncedEmail.length > 0) {
      const emailIsValid = validateEmail(debouncedEmail);

      if (emailIsValid !== true) {
        setEmailErrorMessage(emailIsValid);
      } else {
        setEmailErrorMessage(undefined);
      }
    }
  }, [debouncedEmail]);

  /* Check validity of repeated password as user types */
  useEffect(() => {
    if (debouncedRepeatedPassword.length > 0) {
      if (debouncedRepeatedPassword !== password) {
        setRepeatedPasswordErrorMessage('Passwords do not match');
      } else {
        setRepeatedPasswordErrorMessage(undefined);
      }
    }
  }, [debouncedRepeatedPassword, password]);

  const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const updateRepeatedPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatedPassword(event.target.value);
  };

  const toggleUserHasAnAccount = () => {
    setUserHasAnAccount(!userHasAnAccount);
  };

  const closeModalAndResetState = () => {
    onClose();
    setUserHasAnAccount(true);
  };

  /**
   * Validates the input for the given form mode.
   *
   * @param mode The form mode to validate. Either 'signup' or 'login'.
   */
  const validateInput = (mode: 'signup' | 'login') => {
    // Both need username and password
    const usernameIsValid = validateUsername(username);
    const passwordIsValid = validatePassword(password);

    if (usernameIsValid !== true) {
      setUsernameErrorMessage(usernameIsValid);
    }

    if (passwordIsValid !== true) {
      setPasswordErrorMessage(passwordIsValid);
    }

    if (mode === 'signup') {
      const emailIsValid = validateEmail(email);
      const repeatedPasswordIsValid = repeatedPassword === password;
      const nameIsValid = validateName(name);

      if (emailIsValid !== true) {
        setEmailErrorMessage(emailIsValid);
      }

      if (repeatedPasswordIsValid !== true) {
        setRepeatedPasswordErrorMessage('Passwords do not match');
      }

      if (nameIsValid !== true) {
        setNameErrorMessage(nameIsValid);
      }

      if (usernameIsValid === true && emailIsValid === true && passwordIsValid === true && repeatedPasswordIsValid === true && nameIsValid === true) {
        return true;
      }
    }

    if (usernameIsValid === true && passwordIsValid === true) {
      return true;
    }

    return false;
  };

  const resetErrorMessages = () => {
    setUsernameErrorMessage(undefined);
    setPasswordErrorMessage(undefined);
    setRepeatedPasswordErrorMessage(undefined);
    setNameErrorMessage(undefined);
    setEmailErrorMessage(undefined);
  };

  const validateInputAndAuthenticateUser = async (mode: 'signup' | 'login') => {
    const inputIsValid = validateInput(mode);

    if (inputIsValid) {
      setIsMakingApiCall(true);
      resetErrorMessages();

      // TODO: Replace with API call
      // Simulate a delay in the API call
      await callATimeout(2000);

      setCurrentlyLoggedInUser(username);

      closeModalAndResetState();
    }

    setIsMakingApiCall(false);
  };

  return (
    <Modal opened={opened} onClose={closeModalAndResetState} title={userHasAnAccount ? 'Welcome Back!' : 'Account Creation:'} centered size={componentSize}>
      <LoadingOverlay visible={isMakingApiCall} loaderProps={{ color: COLOR_PALETTE.light.default.blueNcs }} />

      <div style={AUTHENTICATION_MODAL_STYLING.rootStyles}>
        {userHasAnAccount ? (
          <>
            {/* Form Fields */}
            <TextInput
              style={AUTHENTICATION_MODAL_STYLING.fullWidth}
              size={componentSize}
              placeholder="Username"
              label="Username"
              withAsterisk
              value={username}
              onChange={updateUsername}
              error={usernameErrorMessage}
            />
            <TextInput
              style={AUTHENTICATION_MODAL_STYLING.fullWidth}
              size={componentSize}
              placeholder="Password"
              label="Password"
              withAsterisk
              value={password}
              onChange={updatePassword}
              error={passwordErrorMessage}
            />

            {/* Login Button */}
            <Button
              style={AUTHENTICATION_MODAL_STYLING.fullWidth}
              size={componentSize}
              onClick={() => {
                validateInputAndAuthenticateUser('login');
              }}>
              Login
            </Button>

            {/* Create An Account Section */}
            <span>Don't have an account?</span>

            <Button style={AUTHENTICATION_MODAL_STYLING.fullWidth} size={componentSize} onClick={toggleUserHasAnAccount}>
              Create An Account
            </Button>
          </>
        ) : (
          <>
            <TextInput
              style={AUTHENTICATION_MODAL_STYLING.fullWidth}
              size={componentSize}
              placeholder="Username"
              label="Username"
              withAsterisk
              value={username}
              onChange={updateUsername}
              error={usernameErrorMessage}
            />
            <TextInput
              style={AUTHENTICATION_MODAL_STYLING.fullWidth}
              size={componentSize}
              placeholder="Email"
              label="Email"
              withAsterisk
              value={email}
              onChange={updateEmail}
              error={emailErrorMessage}
            />
            <TextInput
              style={AUTHENTICATION_MODAL_STYLING.fullWidth}
              size={componentSize}
              placeholder="Password"
              label="Password"
              withAsterisk
              value={password}
              onChange={updatePassword}
              error={passwordErrorMessage}
            />
            <TextInput
              style={AUTHENTICATION_MODAL_STYLING.fullWidth}
              size={componentSize}
              placeholder="Repeat Password"
              label="Repeat Password"
              withAsterisk
              value={repeatedPassword}
              onChange={updateRepeatedPassword}
              error={repeatedPasswordErrorMessage}
            />
            <TextInput style={AUTHENTICATION_MODAL_STYLING.fullWidth} size={componentSize} placeholder="Name" label="Name" withAsterisk value={name} onChange={updateName} error={nameErrorMessage} />

            <Button
              style={AUTHENTICATION_MODAL_STYLING.fullWidth}
              size={componentSize}
              onClick={() => {
                validateInputAndAuthenticateUser('signup');
              }}>
              Create An Account
            </Button>
          </>
        )}
      </div>
    </Modal>
  );
}
