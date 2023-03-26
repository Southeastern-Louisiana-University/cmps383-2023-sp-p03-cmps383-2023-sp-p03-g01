import { Select } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedDepartureStationState } from '../../../../recoil/atoms/HomePageAtom';
import { getMantineComponentSize } from '../../../../util/getMantineComponentSize';
import { HOME_PAGE_STYLING } from '../HomePageStyling';

/**
 * Select for departure location.
 */
export function DepartureStationSelect(): React.ReactElement {
  const { width: browserWidth } = useViewportSize();
  const componentSize = getMantineComponentSize(browserWidth);

  const [departureLocation, setDepartureLocation] = useRecoilState(selectedDepartureStationState);

  const updateDepartureLocation = (value: string) => {
    setDepartureLocation(value);
  };

  return (
    <Select
      style={HOME_PAGE_STYLING['paperContentStyles'] as React.CSSProperties}
      size={componentSize}
      data={['Hammond, LA', 'New Orleans, LA', 'Baton Rouge, LA']}
      label='Departing From:'
      value={departureLocation}
      onChange={updateDepartureLocation}
      withAsterisk
    />
  );
}
