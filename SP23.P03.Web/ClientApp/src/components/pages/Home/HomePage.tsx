import { Button, Paper } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { DestinationStationSelect } from './modules/DestinationStationSelect';
import { HOME_PAGE_STYLING } from './HomePageStyling';
import { DepartureStationSelect } from './modules/DepartureStationSelect';
import { PassengersNumberInput } from './modules/PassengersNumberInput';
import { TripSelect } from './modules/TripSelect';
import { AppRoutes } from '../../../models/AppRoutes';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
    passengerCountState,
    arrivalStationState,
    departureStationState,
    tripTypeState,
    tripDurationState,
    departureDateState,
} from '../../../recoil/atoms/HomePageAtom';
import { TripType } from '../../../models/TripTypes';
import { TripDateRangePicker } from './modules/TripDateRangePicker';

/**
 * The home page of the app.
 */
export function HomePage(): React.ReactElement {
    const navigate = useNavigate();
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const tripType = useRecoilValue(tripTypeState);
    const passengerCount = useRecoilValue(passengerCountState);
    const departureStation = useRecoilValue(departureStationState);
    const arrivalStation = useRecoilValue(arrivalStationState);
    const tripDuration = useRecoilValue(tripDurationState);
    const departureDate = useRecoilValue(departureDateState);

    const formIsComplete =
        passengerCount > 0 &&
        departureStation !== '' &&
        arrivalStation !== '' &&
        ((tripType === TripType.ONE_WAY && departureDate !== null) ||
            (tripType === TripType.ROUND_TRIP && tripDuration[0] !== null && tripDuration[1] !== null));

    const navigateToRoutePlanningPage = () => {
        navigate(AppRoutes.ROUTE_PLANNING);
    };

    return (
        <div style={HOME_PAGE_STYLING.rootStyles}>
            <div style={HOME_PAGE_STYLING.rootContentStyles}>
                <Paper
                    shadow='lg'
                    style={HOME_PAGE_STYLING.paperStyles}
                    withBorder
                >
                    {/* Top Row */}
                    <TripSelect />
                    <TripDateRangePicker />

                    {/* 2nd Row */}
                    <DepartureStationSelect />
                    <DestinationStationSelect />

                    {/* 3rd Row */}
                    <PassengersNumberInput />

                    {/* Final Row */}
                    {formIsComplete && (
                        <Button
                            style={{ width: '80%' }}
                            size={componentSize}
                            onClick={navigateToRoutePlanningPage}
                        >
                            Find A Route
                        </Button>
                    )}
                </Paper>
            </div>
        </div>
    );
}
