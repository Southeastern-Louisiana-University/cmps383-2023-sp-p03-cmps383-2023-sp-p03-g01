import React, { useState } from 'react';
import { HEADER_STYLING } from './HeaderStyling';
import { TrainLogo } from '../../media/TrainLogo';
import { Burger, Button, Drawer, ActionIcon } from '@mantine/core';
import { useWindowDimensions } from '../../util/useWindowDimensions';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../models/AppRoutes';
import { useRecoilValue } from 'recoil';
import { currentlyLoggedInUserState } from '../../recoil/atoms/AuthenticationAtom';
import { MdAccountCircle } from 'react-icons/md';

/**
 * The header for the app.
 */
export function Header(): React.ReactElement {
  const navigate = useNavigate();
  const { browserWidth } = useWindowDimensions();
  const currentlyLoggedInUser = useRecoilValue(currentlyLoggedInUserState);

  const [navigationMenuOpened, setNavigationMenuOpened] = useState(false);

  const toggleBurgerMenu = () => {
    setNavigationMenuOpened(!navigationMenuOpened);
  };

  const navigateToHomePage = () => {
    navigate(AppRoutes.HOME);
  };

  return (
    <div style={HEADER_STYLING.rootStyles}>
      <div style={HEADER_STYLING.rootContentStyles}>
        <Burger opened={navigationMenuOpened} onClick={toggleBurgerMenu} aria-label="Open navigation" size={browserWidth < 350 ? 'sm' : 'md'} />
        <Drawer opened={navigationMenuOpened} onClose={toggleBurgerMenu} title="Navigating to..." padding="sm">
          <span>test</span>
        </Drawer>

        {/* The Logo & Company Name */}
        <div style={HEADER_STYLING.entrackStyles} onClick={navigateToHomePage}>
          <div style={HEADER_STYLING.iconStyles}>
            <TrainLogo />
          </div>
          <span style={HEADER_STYLING.titleStyles}>EnTrack</span>
        </div>

        {/* Sign-In/Profile Button */}
        {currentlyLoggedInUser === null ? (
          <Button size={browserWidth < 350 ? 'xs' : 'sm'}>Sign-In</Button>
        ) : (
          <div style={HEADER_STYLING.loggedInUserStyles}>
            <ActionIcon>
              <MdAccountCircle style={HEADER_STYLING.iconStyles} />
            </ActionIcon>
            {browserWidth > 500 && <span style={HEADER_STYLING.loggedInUserWelcomeMessageStyles}>Hello, {currentlyLoggedInUser}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
