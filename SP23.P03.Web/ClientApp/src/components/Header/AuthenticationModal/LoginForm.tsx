import React, { useEffect, useState } from 'react';
import { AUTHENTICATION_MODAL_STYLING } from './AuthenticationModalStyling';
import { Button, LoadingOverlay, TextInput } from '@mantine/core';
import { validatePassword, validateUsername } from '../../../util/ValidationFunctions';
import { currentlyLoggedInUserState } from '../../../recoil/atoms/AuthenticationAtom';
import { useSetRecoilState } from 'recoil';
import { callATimeout } from '../../../util/callATimeout';
import { useDebounce } from '../../../util/useDebounce';
import { COLOR_PALETTE } from '../../../styling/ColorPalette';
import { useViewportSize } from '@mantine/hooks';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';

interface LoginFormProps {
  setUserHasAnAccount: () => void;
  closeModal: () => void;
}
/**
 * The form for logging in.
 *
 * @param props
 * @param props.setUserHasAnAccount Function to toggle the sign up form or the login form.
 * @param props.closeModal Function to close the modal.
 */
export function LoginForm({ setUserHasAnAccount, closeModal }: LoginFormProps): React.ReactElement {
  const { width: browserWidth } = useViewportSize();

  // Recoil State
  const setCurrentlyLoggedInUser = useSetRecoilState(currentlyLoggedInUserState);

  // Local State
  const [username, setUsername] = useState('');
  const [usernameErrorMessage, setUsernameErrorMessage] = useState<string | undefined>(undefined);
  const debouncedUsername = useDebounce(username, 500);

  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string | undefined>(undefined);
  const debouncedPassword = useDebounce(password, 500);

  const [isLoggingIn, setIsLoggingIn] = useState(false);

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

  const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const validateCredentialsAndLogin = async () => {
    const usernameIsValid = validateUsername(username);
    const passwordIsValid = validatePassword(password);

    if (usernameIsValid !== true) {
      setUsernameErrorMessage(usernameIsValid);
    }

    if (passwordIsValid !== true) {
      setPasswordErrorMessage(passwordIsValid);
    }

    if (usernameIsValid === true && passwordIsValid === true) {
      setIsLoggingIn(true);

      // TODO: Replace with API call
      // Simulate a delay in the API call
      await callATimeout(2000);

      setUsernameErrorMessage(undefined);
      setPasswordErrorMessage(undefined);

      setCurrentlyLoggedInUser(username);

      closeModal();
    }

    setIsLoggingIn(false);
  };

  return (
    <div style={AUTHENTICATION_MODAL_STYLING.rootStyles}>
      <LoadingOverlay visible={isLoggingIn} loaderProps={{ color: COLOR_PALETTE.light.default.blueNcs }} />

      {/* Form Fields */}
      <TextInput size={getMantineComponentSize(browserWidth)} placeholder="Username" label="Username" withAsterisk value={username} onChange={updateUsername} error={usernameErrorMessage} />
      <TextInput size={getMantineComponentSize(browserWidth)} placeholder="Password" label="Password" withAsterisk value={password} onChange={updatePassword} error={passwordErrorMessage} />

      {/* Login Button */}
      <Button size={getMantineComponentSize(browserWidth)} onClick={validateCredentialsAndLogin}>
        Login
      </Button>

      {/* Create An Account Section */}
      <span
        style={{
          textAlign: 'center',
        }}>
        Don't have an account?
      </span>

      <Button size={getMantineComponentSize(browserWidth)} onClick={setUserHasAnAccount}>
        Create An Account
      </Button>
    </div>
  );
}
