import { Select } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedArrivalStationState, selectedDepartureStationState } from '../../../../recoil/atoms/HomePageAtom';
import { getMantineComponentSize } from '../../../../util/getMantineComponentSize';
import { HOME_PAGE_STYLING } from '../HomePageStyling';

/**
 * Select for destination station.
 */
export function DestinationStationSelect(): React.ReactElement {
  const { width: browserWidth } = useViewportSize();
  const componentSize = getMantineComponentSize(browserWidth);

  const [arrivalLocation, setArrivalLocation] = useRecoilState(selectedArrivalStationState);
  const departureStation = useRecoilValue(selectedDepartureStationState);

  const updateArrivalLocation = (value: string) => {
    setArrivalLocation(value);
  };

  return (
    <Select
      style={HOME_PAGE_STYLING.paperContentStyles}
      size={componentSize}
      data={['Hammond, LA', 'New Orleans, LA', 'Baton Rouge, LA'].filter((station) => station !== departureStation)}
      label='Destination:'
      value={arrivalLocation}
      onChange={updateArrivalLocation}
      withAsterisk
    />
  );
}
