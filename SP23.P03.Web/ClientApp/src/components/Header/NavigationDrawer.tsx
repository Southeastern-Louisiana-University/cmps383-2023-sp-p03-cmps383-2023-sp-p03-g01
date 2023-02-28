import { Button, Drawer } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../models/AppRoutes';
import { getMantineComponentSize } from '../../util/getMantineComponentSize';
import { HEADER_STYLING } from './HeaderStyling';

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

  const navigateToTrainSchedules = () => {
    navigate(AppRoutes.TRAIN_SCHEDULES);
    onClose();
  };

  const navigateToTrainStatuses = () => {
    navigate(AppRoutes.TRAIN_STATUSES);
    onClose();
  };

  const navigateToTrainTracking = () => {
    navigate(AppRoutes.TRAIN_TRACKING);
    onClose();
  };

  return (
    <Drawer opened={opened} onClose={onClose} title="Navigate to..." padding="sm" position="top" size="auto">
      <div style={HEADER_STYLING.navDrawerButtonContainerStyles}>
        <Button style={HEADER_STYLING.navDrawerButtonStyles} size={componentSize} onClick={navigateToTrainSchedules}>
          Train Schedules
        </Button>

        <Button style={HEADER_STYLING.navDrawerButtonStyles} size={componentSize} onClick={navigateToTrainStatuses}>
          Train Statuses
        </Button>

        <Button style={HEADER_STYLING.navDrawerButtonStyles} size={componentSize} onClick={navigateToTrainTracking}>
          Train Tracking
        </Button>
      </div>
    </Drawer>
  );
}
