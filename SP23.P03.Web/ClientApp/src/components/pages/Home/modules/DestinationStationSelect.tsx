import { Select } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    allTrainStationsState,
    arrivalStationState,
    departureStationState,
} from '../../../../recoil/atoms/HomePageAtom';
import { getMantineComponentSize } from '../../../../util/getMantineComponentSize';
import { STYLING_VARIABLES } from '../../../../styling/StylingVariables';

/**
 * Select for destination station.
 */
export function DestinationStationSelect(): React.ReactElement {
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const [arrivalLocation, setArrivalLocation] = useRecoilState(arrivalStationState);
    const departureStation = useRecoilValue(departureStationState);
    const allTrainStations = useRecoilValue(allTrainStationsState);

    const updateArrivalLocation = (value: string) => {
        setArrivalLocation(value);
    };

    return (
        <Select
            style={{ width: `calc(50% - ${STYLING_VARIABLES.defaultSpacing})` }}
            size={componentSize}
            data={allTrainStations.filter((station) => station.value !== departureStation)}
            label='Destination:'
            value={arrivalLocation}
            onChange={updateArrivalLocation}
            searchable
            nothingFound='No options'
            withAsterisk
        />
    );
}
