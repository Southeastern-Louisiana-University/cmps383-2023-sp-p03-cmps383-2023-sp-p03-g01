import { DatePickerInput } from '@mantine/dates';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tripDurationState, tripTypeState, departureDateState } from '../../../../recoil/atoms/HomePageAtom';
import { useViewportSize } from '@mantine/hooks';
import { getMantineComponentSize } from '../../../../util/getMantineComponentSize';
import { HOME_PAGE_STYLING } from '../HomePageStyling';
import { TripType } from '../../../../models/TripTypes';

/**
 * A date range picker for the trip.
 */
export function TripDateRangePicker(): React.ReactElement {
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const tripType = useRecoilValue(tripTypeState);
    const [dateRangeValue, setDateRangeValue] = useRecoilState(tripDurationState);
    const [departureDate, setDepartureDate] = useRecoilState(departureDateState);

    return tripType === TripType.ONE_WAY ? (
        <DatePickerInput
            style={HOME_PAGE_STYLING.paperContentStyles}
            size={componentSize}
            label='Departure Date:'
            placeholder='Select departure date'
            value={departureDate}
            onChange={setDepartureDate}
            withAsterisk
            minDate={new Date()}
        />
    ) : (
        <DatePickerInput
            style={HOME_PAGE_STYLING.paperContentStyles}
            size={componentSize}
            type='range'
            label='Departure & Return Dates:'
            placeholder='Select travel dates'
            value={dateRangeValue}
            onChange={setDateRangeValue}
            withAsterisk
            minDate={new Date()}
        />
    );
}
