import { NumberInput } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { useRecoilState } from 'recoil';
import { passengerCountState } from '../../../../recoil/atoms/HomePageAtom';
import { getMantineComponentSize } from '../../../../util/getMantineComponentSize';
import { HOME_PAGE_STYLING } from '../HomePageStyling';

/**
 * The number input for passengers.
 */
export function PassengersNumberInput(): React.ReactElement {
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const [passengers, setPassengers] = useRecoilState(passengerCountState);

    const updatePassengersCount = (value: number) => {
        setPassengers(value);
    };

    return (
        <NumberInput
            style={HOME_PAGE_STYLING.paperContentStyles}
            size={componentSize}
            label='Passengers:'
            value={passengers}
            onChange={updatePassengersCount}
            error={passengers < 1 ? 'Must be at least 1 passenger' : undefined}
            withAsterisk
        />
    );
}
