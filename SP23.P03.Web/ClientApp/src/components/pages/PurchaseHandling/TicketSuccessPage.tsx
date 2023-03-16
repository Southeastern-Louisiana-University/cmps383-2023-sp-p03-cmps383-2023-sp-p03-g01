import React from 'react';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useViewportSize } from '@mantine/hooks';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { AppRoutes } from '../../../models/AppRoutes';
import { TICKET_SUCCESS_PAGE_STYLING } from './TicketSuccessPageStyling';
import { useSearchParams } from 'react-router-dom';

interface TicketSuccessPage {}
/**
 * <description here>
 *
 * @param props <description here>
 */
export function TicketSuccessPage(props: TicketSuccessPage): React.ReactElement {

  const navigate = useNavigate();
  const { width: browserWidth } = useViewportSize();
  const componentSize = getMantineComponentSize(browserWidth);
  const [searchParams] = useSearchParams();

  const navigateToHomePage = () => {
    navigate(AppRoutes.HOME);
  };

  return (
    <div style={TICKET_SUCCESS_PAGE_STYLING.rootStyles}>
      {/* This is a placeholder that launches the Stripe payment */}
      <span>Purchase complete! Thanks for riding with EnTrack today!</span>
      <span>Your confirmation number is: 314159</span>
      <Button size={componentSize} onClick={navigateToHomePage}>
        Home
      </Button>
    </div>
  );
}