import { DateValue, DateInput } from '@mantine/dates';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedDepartureDateState, selectedReturnDateState } from '../../../../recoil/atoms/HomePageAtom';
import { getMantineComponentSize } from '../../../../util/getMantineComponentSize';
import { HOME_PAGE_STYLING } from '../HomePageStyling';

/**
 * Date picker for return date.
 */
export function ReturnDatePicker(): React.ReactElement {
  const { width: browserWidth } = useViewportSize();
  const componentSize = getMantineComponentSize(browserWidth);

  const [returnDate, setReturnDate] = useRecoilState(selectedReturnDateState);
  const departureDate = useRecoilValue(selectedDepartureDateState);

  const addOneDay = (date: Date) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
  };

  const updateReturnDate = (value: DateValue) => {
    setReturnDate(value);
  };

  const minDate = departureDate ? addOneDay(departureDate) : new Date();

  return (
    <DateInput
      style={HOME_PAGE_STYLING.paperContentStyles}
      size={componentSize}
      label='Returning When?'
      value={returnDate}
      onChange={updateReturnDate}
      withAsterisk
      minDate={minDate}
    />
  );
}
