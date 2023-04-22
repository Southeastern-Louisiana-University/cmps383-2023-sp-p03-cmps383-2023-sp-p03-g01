import { Select } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { useRecoilState } from 'recoil';
import { departureStationState } from '../../../../recoil/atoms/HomePageAtom';
import { getMantineComponentSize } from '../../../../util/getMantineComponentSize';
import { STYLING_VARIABLES } from '../../../../styling/StylingVariables';

/**
 * Select for departure location.
 */
export function DepartureStationSelect(): React.ReactElement {
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const [departureLocation, setDepartureLocation] = useRecoilState(departureStationState);

    const updateDepartureLocation = (value: string) => {
        setDepartureLocation(value);
    };

    return (
        <Select
            style={{ width: `calc(50% - ${STYLING_VARIABLES.defaultSpacing})` }}
            size={componentSize}
            data={['Hammond, LA', 'New Orleans, LA', 'Baton Rouge, LA', 'Lake Charles, LA']}
            label='Departing From:'
            value={departureLocation}
            onChange={updateDepartureLocation}
            withAsterisk
        />
    );
}
