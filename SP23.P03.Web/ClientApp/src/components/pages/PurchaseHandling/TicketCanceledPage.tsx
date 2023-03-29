import React from 'react';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useViewportSize } from '@mantine/hooks';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { AppRoutes } from '../../../models/AppRoutes';
import { TICKET_CANCELED_PAGE_STYLING } from './TicketCanceledPageStyling';

/**
 * <description here>
 */

export function TicketCanceledPage(): React.ReactElement {
  const navigate = useNavigate();
  const { width: browserWidth } = useViewportSize();
  const componentSize = getMantineComponentSize(browserWidth);

  const navigateToHomePage = () => {
    navigate(AppRoutes.HOME);
  };

  return (
    <div style={TICKET_CANCELED_PAGE_STYLING.rootStyles}>
      {/* This is a placeholder that launches the Stripe payment */}
      <span>Purchase canceled.</span>
      <Button
        size={componentSize}
        onClick={navigateToHomePage}
      >
        Home
      </Button>
    </div>
  );
}
