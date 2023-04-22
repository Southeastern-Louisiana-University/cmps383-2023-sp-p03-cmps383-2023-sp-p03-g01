import React, { useState } from 'react';
import { HEADER_STYLING } from './HeaderStyling';
import { TrainLogo } from '../../media/TrainLogo';
import { Burger, Button, ActionIcon } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../models/AppRoutes';
import { useRecoilValue } from 'recoil';
import { currentlyLoggedInUserState } from '../../recoil/atoms/AuthenticationAtom';
import { MdAccountCircle } from 'react-icons/md';
import { AuthenticationModal } from './AuthenticationModal';
import { NavigationDrawer } from './NavigationDrawer';
import { getMantineComponentSize } from '../../util/getMantineComponentSize';
import { useViewportSize } from '@mantine/hooks';
import { STYLING_VARIABLES } from '../../styling/StylingVariables';
import { COLOR_PALETTE } from '../../styling/ColorPalette';

/**
 * The header for the app.
 */
export function Header(): React.ReactElement {
    const navigate = useNavigate();
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth, 'md');

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

    const navigateToAccountPage = () => {
        navigate(AppRoutes.ACCOUNT_PAGE);
    };

    return (
        <div
            style={{
                width: '100%',
                height: `calc(${STYLING_VARIABLES.headerHeight})`,

                // Courtesy of Amtrak
                boxShadow: '0 2px 5px #00000029,0 2px 10px #0000001f',

                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '100%',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',

                    color: COLOR_PALETTE.light.default.textColorPrimary,

                    margin: `${STYLING_VARIABLES.defaultSpacing}`,
                }}
            >
                {/* Navigation Menu */}
                <Burger
                    opened={navigationMenuOpened}
                    onClick={toggleBurgerMenu}
                    aria-label='Open navigation'
                    size={componentSize}
                />
                <NavigationDrawer
                    opened={navigationMenuOpened}
                    onClose={toggleBurgerMenu}
                />

                {/* The Logo & Company Name */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',

                        cursor: 'pointer',
                    }}
                    onClick={navigateToHomePage}
                >
                    <div style={HEADER_STYLING.iconStyles}>
                        <TrainLogo />
                    </div>
                    <span style={HEADER_STYLING.titleStyles}>EnTrack</span>
                </div>

                {/* Sign-In/Profile Button */}
                {currentlyLoggedInUser === null ? (
                    <Button
                        size={componentSize}
                        onClick={toggleAuthenticationModal}
                    >
                        Sign-In
                    </Button>
                ) : (
                    <div style={HEADER_STYLING.loggedInUserStyles}>
                        <ActionIcon onClick={navigateToAccountPage}>
                            <MdAccountCircle style={HEADER_STYLING.iconStyles} />
                        </ActionIcon>
                        {browserWidth > 500 && (
                            <span style={HEADER_STYLING.loggedInUserWelcomeMessageStyles}>
                                Hello, {currentlyLoggedInUser.split('@')[0]}
                            </span>
                        )}
                    </div>
                )}

                <AuthenticationModal
                    opened={authenticationModalOpened}
                    onClose={toggleAuthenticationModal}
                />
            </div>
        </div>
    );
}
