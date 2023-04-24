import React from 'react';
import { useRecoilValue } from 'recoil';
import { departureStationState, arrivalStationState } from '../../../../../recoil/atoms/HomePageAtom';
import { RouteSelectionAccordion } from './modules/RouteSelectionAccordion';
import { scheduledRoutesState } from '../../../../../recoil/atoms/RoutePlanningAtom';
import { TrainScheduledRoutesDto } from '../../../../../api/EntrackApi.ts/EntrackApi';

/**
 * The first step in the route planning process.
 */
export function DepartureRoutesPage(): React.ReactElement {
    const selectedDepartureStation = useRecoilValue(departureStationState);
    const selectedArrivalStation = useRecoilValue(arrivalStationState);
    const scheduledRoutes = useRecoilValue(scheduledRoutesState);

    const sortedScheduledRoutes: [TrainScheduledRoutesDto[], TrainScheduledRoutesDto[]] = [[], []];
    sortedScheduledRoutes[0] = scheduledRoutes.filter((scheduledRoute) => {
        return scheduledRoute.departureStation === selectedDepartureStation;
    });
    sortedScheduledRoutes[1] = scheduledRoutes.filter((scheduledRoute) => {
        return scheduledRoute.departureStation === selectedArrivalStation;
    });

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
            {sortedScheduledRoutes.map((scheduledRoutes, index) => {
                return (
                    <RouteSelectionAccordion
                        key={index}
                        scheduledRoutes={scheduledRoutes}
                    />
                );
            })}
        </div>
    );
}
