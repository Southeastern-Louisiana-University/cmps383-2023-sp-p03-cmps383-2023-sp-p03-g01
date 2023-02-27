import React, { useState } from 'react';
import { HEADER_STYLING } from './HeaderStyling';
import { TrainLogo } from '../../media/TrainLogo';
import { Burger, Button, ActionIcon } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../models/AppRoutes';
import { useRecoilValue } from 'recoil';
import { currentlyLoggedInUserState } from '../../recoil/atoms/AuthenticationAtom';
import { MdAccountCircle } from 'react-icons/md';
import { AuthenticationModal } from './AuthenticationModal/AuthenticationModal';
import { NavigationDrawer } from './NavigationDrawer';
import { getMantineComponentSize } from '../../util/getMantineComponentSize';
import { useViewportSize } from '@mantine/hooks';

/**
 * The header for the app.
 */
export function Header(): React.ReactElement {
  const navigate = useNavigate();
  const { width: browserWidth } = useViewportSize();
  const currentlyLoggedInUser = useRecoilValue(currentlyLoggedInUserState);

  const [navigationMenuOpened, setNavigationMenuOpened] = useState(false);
  const [authenticationModalOpened, setAuthenticationModalOpened] = useState(false);

  const toggleBurgerMenu = () => {
    setNavigationMenuOpened(!navigationMenuOpened);
  };

  const toggleAuthenticationModal = () => {
    setAuthenticationModalOpened(!authenticationModalOpened);
  };

  const navigateToHomePage = () => {
    navigate(AppRoutes.HOME);
  };

  return (
    <div style={HEADER_STYLING.rootStyles}>
      <div style={HEADER_STYLING.rootContentStyles}>
        {/* Navigation Menu */}
        <Burger opened={navigationMenuOpened} onClick={toggleBurgerMenu} aria-label="Open navigation" size={getMantineComponentSize(browserWidth, 'md')} />
        <NavigationDrawer opened={navigationMenuOpened} onClose={toggleBurgerMenu} />

        {/* The Logo & Company Name */}
        <div style={HEADER_STYLING.entrackStyles} onClick={navigateToHomePage}>
          <div style={HEADER_STYLING.iconStyles}>
            <TrainLogo />
          </div>
          <span style={HEADER_STYLING.titleStyles}>EnTrack</span>
        </div>

        {/* Sign-In/Profile Button */}
        {currentlyLoggedInUser === null ? (
          <Button size={getMantineComponentSize(browserWidth, 'md')} onClick={toggleAuthenticationModal}>
            Sign-In
          </Button>
        ) : (
          <div style={HEADER_STYLING.loggedInUserStyles}>
            <ActionIcon>
              <MdAccountCircle style={HEADER_STYLING.iconStyles} />
            </ActionIcon>
            {browserWidth > 500 && <span style={HEADER_STYLING.loggedInUserWelcomeMessageStyles}>Hello, {currentlyLoggedInUser}</span>}
          </div>
        )}

        <AuthenticationModal opened={authenticationModalOpened} onClose={toggleAuthenticationModal} />
      </div>
    </div>
  );
}
