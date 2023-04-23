import { Select } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allTrainStationsState, departureStationState } from '../../../../recoil/atoms/HomePageAtom';
import { getMantineComponentSize } from '../../../../util/getMantineComponentSize';
import { STYLING_VARIABLES } from '../../../../styling/StylingVariables';

/**
 * Select for departure location.
 */
export function DepartureStationSelect(): React.ReactElement {
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const [departureLocation, setDepartureLocation] = useRecoilState(departureStationState);
    const allTrainStations = useRecoilValue(allTrainStationsState);

    const updateDepartureLocation = (value: string) => {
        setDepartureLocation(value);
    };

    return (
        <Select
            style={{ width: `calc(50% - ${STYLING_VARIABLES.defaultSpacing})` }}
            size={componentSize}
            data={allTrainStations}
            label='Departing From:'
            value={departureLocation}
            onChange={updateDepartureLocation}
            searchable
            nothingFound='No options'
            withAsterisk
        />
    );
}
