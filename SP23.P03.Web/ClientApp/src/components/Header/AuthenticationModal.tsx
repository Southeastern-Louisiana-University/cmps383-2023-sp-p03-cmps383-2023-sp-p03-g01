import { Button, LoadingOverlay, Modal, PasswordInput, Text, TextInput } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { currentlyLoggedInUserState } from '../../recoil/atoms/AuthenticationAtom';
import { COLOR_PALETTE } from '../../styling/ColorPalette';
import { getMantineComponentSize } from '../../util/getMantineComponentSize';
import { useDebounce } from '../../util/useDebounce';
import { validatePassword, validateName, validateEmail } from '../../util/ValidationFunctions';
import { STYLING_VARIABLES } from '../../styling/StylingVariables';
import API from '../../util/entrackApi';

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

    const resetErrorMessages = () => {
        setPasswordErrorMessage(undefined);
        setRepeatedPasswordErrorMessage(undefined);
        setNameErrorMessage(undefined);
        setEmailErrorMessage(undefined);
    };

    const resetFormValues = () => {
        setPassword('');
        setRepeatedPassword('');
        setName('');
        setEmail('');
    };

    const closeModalAndResetState = () => {
        onClose();
        setUserHasAnAccount(true);
        resetErrorMessages();
        resetFormValues();
    };

    /**
     * Validates the input for the given form mode.
     *
     * @param mode The form mode to validate. Either 'signup' or 'login'.
     */
    const validateInput = (mode: 'signup' | 'login') => {
        // Both need email and password
        const emailIsValid = validateEmail(email);
        const passwordIsValid = validatePassword(password);

        if (emailIsValid !== true) {
            setEmailErrorMessage(emailIsValid);
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

            if (
                emailIsValid === true &&
                emailIsValid === true &&
                passwordIsValid === true &&
                repeatedPasswordIsValid === true &&
                nameIsValid === true
            ) {
                return true;
            }
        }

        if (emailIsValid === true && passwordIsValid === true) {
            return true;
        }

        return false;
    };

    const validateInputAndAuthenticateUser = async (mode: 'signup' | 'login') => {
        const inputIsValid = validateInput(mode);

        if (!inputIsValid) {
            return;
        }

        if (mode === 'login') {
            setIsMakingApiCall(true);
            resetErrorMessages();

            API.api
                .authenticationLoginCreate({
                    userName: email,
                    password,
                })
                .then((response) => {
                    setCurrentlyLoggedInUser(response.data);
                    localStorage.setItem('user', JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.error(error);
                    console.error('No error handling because no time');

                    setIsMakingApiCall(false);
                });
        } else {
            setIsMakingApiCall(true);
            resetErrorMessages();

            API.api
                .usersCreate({
                    roles: ['User'],
                    password,
                    userName: email,
                })
                .then(() => {
                    API.api
                        .authenticationLoginCreate({
                            userName: email,
                            password,
                        })
                        .then((response) => {
                            setCurrentlyLoggedInUser(response.data);
                            localStorage.setItem('user', JSON.stringify(response.data));
                        })
                        .catch((error) => {
                            console.error(error);
                            console.error('No error handling because no time');

                            setIsMakingApiCall(false);
                        });
                })
                .catch((error) => {
                    console.error(error);
                    console.error('No error handling because no time');

                    setIsMakingApiCall(false);
                });
        }

        closeModalAndResetState();
    };

    return (
        <Modal
            opened={opened}
            onClose={closeModalAndResetState}
            title={userHasAnAccount ? 'Welcome Back!' : 'Account Creation:'}
            centered
            size={componentSize}
        >
            <LoadingOverlay
                visible={isMakingApiCall}
                loaderProps={{ color: COLOR_PALETTE.light.default.blueNcs }}
            />

            <div
                style={{
                    display: 'grid',
                    placeItems: 'center',
                    gap: STYLING_VARIABLES.defaultSpacing,

                    fontSize: STYLING_VARIABLES.defaultBodyFontSize,
                }}
            >
                {userHasAnAccount ? (
                    <>
                        {/* Form Fields */}
                        <TextInput
                            style={{
                                width: '100%',
                            }}
                            size={componentSize}
                            placeholder='Email'
                            label='Email'
                            withAsterisk
                            value={email}
                            onChange={updateEmail}
                            error={emailErrorMessage}
                        />
                        <PasswordInput
                            style={{
                                width: '100%',
                            }}
                            size={componentSize}
                            placeholder='Password'
                            label='Password'
                            withAsterisk
                            value={password}
                            onChange={updatePassword}
                            error={passwordErrorMessage}
                        />

                        {/* Login Button */}
                        <Button
                            style={{
                                width: '100%',
                            }}
                            size={componentSize}
                            onClick={() => {
                                validateInputAndAuthenticateUser('login');
                            }}
                        >
                            Sign In
                        </Button>

                        <Text>Don't have an account?</Text>

                        <Button
                            style={{
                                width: '100%',
                            }}
                            size={componentSize}
                            onClick={toggleUserHasAnAccount}
                        >
                            Create An Account
                        </Button>
                    </>
                ) : (
                    <>
                        <TextInput
                            style={{
                                width: '100%',
                            }}
                            size={componentSize}
                            placeholder='Name'
                            label='Name'
                            withAsterisk
                            value={name}
                            onChange={updateName}
                            error={nameErrorMessage}
                        />
                        <TextInput
                            style={{
                                width: '100%',
                            }}
                            size={componentSize}
                            placeholder='Email'
                            label='Email'
                            withAsterisk
                            value={email}
                            onChange={updateEmail}
                            error={emailErrorMessage}
                        />
                        <PasswordInput
                            style={{
                                width: '100%',
                            }}
                            size={componentSize}
                            placeholder='Password'
                            label='Password'
                            withAsterisk
                            value={password}
                            onChange={updatePassword}
                            error={passwordErrorMessage}
                        />
                        <PasswordInput
                            style={{
                                width: '100%',
                            }}
                            size={componentSize}
                            placeholder='Repeat Password'
                            label='Repeat Password'
                            withAsterisk
                            value={repeatedPassword}
                            onChange={updateRepeatedPassword}
                            error={repeatedPasswordErrorMessage}
                        />

                        <Button
                            style={{
                                width: '100%',
                            }}
                            size={componentSize}
                            onClick={() => {
                                validateInputAndAuthenticateUser('signup');
                            }}
                        >
                            Create An Account
                        </Button>

                        <Text>Already have an account?</Text>

                        <Button
                            style={{
                                width: '100%',
                            }}
                            size={componentSize}
                            onClick={toggleUserHasAnAccount}
                        >
                            Back to Sign In
                        </Button>
                    </>
                )}
            </div>
        </Modal>
    );
}
