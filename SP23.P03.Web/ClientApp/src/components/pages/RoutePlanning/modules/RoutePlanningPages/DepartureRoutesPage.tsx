import React from 'react';
import { useRecoilValue } from 'recoil';
import { departureStationState, arrivalStationState } from '../../../../../recoil/atoms/HomePageAtom';
import { RouteSelectionAccordion } from './modules/RouteSelectionAccordion';

/**
 * The first step in the route planning process.
 */
export function DepartureRoutesPage(): React.ReactElement {
    const selectedDepartureStation = useRecoilValue(departureStationState);
    const selectedArrivalStation = useRecoilValue(arrivalStationState);

    const FAKE_DATA = [
        {
            arrivalTime: '12:20pm',
            departureTime: '12:20am',
            tripDuration: '23h 40m',
            trainSwaps: 3,
        },
        {
            arrivalTime: '12:20pm',
            departureTime: '12:20am',
            tripDuration: '23h 40m',
            trainSwaps: 3,
        },
    ];

    /**
     * Departure Time, Arrival Time, Trip Duration, Total Stops, Cost
     * - Stop, Departure Time, Departure Station, Arrival Time, Arrival Station, Dwell Time, Layover
     */

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
            }}
        >
            <RouteSelectionAccordion
                departureStation={selectedDepartureStation}
                arrivalStation={selectedArrivalStation}
                scheduledRoutes={FAKE_DATA}
            />

            <RouteSelectionAccordion
                departureStation={selectedArrivalStation}
                arrivalStation={selectedDepartureStation}
                scheduledRoutes={FAKE_DATA}
            />
        </div>
    );
}
