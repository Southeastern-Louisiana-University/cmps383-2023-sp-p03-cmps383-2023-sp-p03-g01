import { TextInput } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { AUTHENTICATION_MODAL_STYLING } from './AuthenticationModalStyling';

interface SignUpFormProps {
  closeModal: () => void;
}
/**
 * The form for signing up.
 *
 * @param props
 * @param props.closeModal Function to close the modal.
 */
export function SignUpForm({ closeModal }: SignUpFormProps): React.ReactElement {
  const { width: browserWidth } = useViewportSize();

  return (
    <div style={AUTHENTICATION_MODAL_STYLING.rootStyles}>
      <TextInput size={getMantineComponentSize(browserWidth)} placeholder="Username" label="Username" withAsterisk />
      <TextInput size={getMantineComponentSize(browserWidth)} placeholder="Password" label="Password" withAsterisk />
    </div>
  );
}
