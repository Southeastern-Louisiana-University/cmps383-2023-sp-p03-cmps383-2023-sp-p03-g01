import { Button, Drawer } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../models/AppRoutes';
import { getMantineComponentSize } from '../../util/getMantineComponentSize';
import { HEADER_STYLING } from './HeaderStyling';
import { useRecoilValue } from 'recoil';
import { currentlyLoggedInUserState } from '../../recoil/atoms/AuthenticationAtom';

interface NavigationDrawerProps {
    opened: boolean;
    onClose: () => void;
}
/**
 * The navigation drawer for the app.
 *
 * @param props
 * @param props.opened Whether or not the drawer is open.
 * @param props.onClose Function to close the drawer.
 */
export function NavigationDrawer({ opened, onClose }: NavigationDrawerProps): React.ReactElement {
    const navigate = useNavigate();
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const currentlyLoggedInUser = useRecoilValue(currentlyLoggedInUserState);

    return (
        <Drawer
            opened={opened}
            onClose={onClose}
            title='Navigate to...'
            padding='sm'
            position='left'
            size='xs'
        >
            <div style={HEADER_STYLING.navDrawerButtonContainerStyles}>
                <Button
                    style={HEADER_STYLING.navDrawerButtonStyles}
                    size={componentSize}
                    onClick={() => {
                        navigate(AppRoutes.HOME);
                    }}
                >
                    Home
                </Button>

                {currentlyLoggedInUser && (
                    <Button
                        style={HEADER_STYLING.navDrawerButtonStyles}
                        size={componentSize}
                        onClick={() => {
                            navigate(AppRoutes.VIEW_TICKETS);
                        }}
                    >
                        View Tickets
                    </Button>
                )}
            </div>
        </Drawer>
    );
}
