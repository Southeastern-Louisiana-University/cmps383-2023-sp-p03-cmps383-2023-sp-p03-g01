import { DateInput, DateValue } from '@mantine/dates';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedDepartureDateState } from '../../../../recoil/atoms/HomePageAtom';
import { getMantineComponentSize } from '../../../../util/getMantineComponentSize';
import { HOME_PAGE_STYLING } from '../HomePageStyling';

/**
 * Date picker for departure date.
 */
export function DepartureDatePicker(): React.ReactElement {
  const { width: browserWidth } = useViewportSize();
  const componentSize = getMantineComponentSize(browserWidth);

  const [departureDate, setDepartureDate] = useRecoilState(selectedDepartureDateState);

  const updateDepartureDate = (value: DateValue) => {
    setDepartureDate(value);
  };

  return (
    <DateInput
      style={HOME_PAGE_STYLING.paperContentStyles}
      size={componentSize}
      label='Departing When?'
      value={departureDate}
      onChange={updateDepartureDate}
      withAsterisk
      minDate={new Date()}
    />
  );
}
