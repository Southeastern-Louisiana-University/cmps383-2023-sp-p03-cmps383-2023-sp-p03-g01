import { Modal } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React, { useState } from 'react';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';

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

  const [userHasAnAccount, setUserHasAnAccount] = useState(true);

  const toggleUserHasAnAccount = () => {
    setUserHasAnAccount(!userHasAnAccount);
  };

  const closeModalAndResetState = () => {
    onClose();
    setUserHasAnAccount(true);
  };

  return (
    <Modal opened={opened} onClose={closeModalAndResetState} title={userHasAnAccount ? 'Welcome Back!' : 'Account Creation:'} centered size={getMantineComponentSize(browserWidth)}>
      {userHasAnAccount ? <LoginForm setUserHasAnAccount={toggleUserHasAnAccount} closeModal={closeModalAndResetState} /> : <SignUpForm closeModal={closeModalAndResetState} />}
    </Modal>
  );
}
