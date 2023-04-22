import React from 'react';
import { ROUTE_PLANNING_PAGE_STYLING } from '../RoutePlanningPageRootStyling';
import { Avatar, Stepper } from '@mantine/core';
import { BsArrowLeftRight, BsPersonFill } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';
import { TripType } from '../../../../models/TripTypes';
import {
    tripTypeState,
    passengerCountState,
    departureStationState,
    arrivalStationState,
    tripDurationState,
    departureDateState,
} from '../../../../recoil/atoms/HomePageAtom';
import { currentRoutePlanningPageState } from '../../../../recoil/atoms/RoutePlanningAtom';
import { formatTheDate } from '../../../../util/formatTheDate';
import { COLOR_PALETTE } from '../../../../styling/ColorPalette';
import { STYLING_VARIABLES } from '../../../../styling/StylingVariables';

const StepperContent = (): React.ReactElement => {
    const tripType = useRecoilValue(tripTypeState);
    const passengerCount = useRecoilValue(passengerCountState);
    const departureStation = useRecoilValue(departureStationState);
    const arrivalStation = useRecoilValue(arrivalStationState);
    const [tripDepartureDate, tripReturnDate] = useRecoilValue(tripDurationState);
    const oneWayDepartureDate = useRecoilValue(departureDateState);

    // Format the dates as Month Day, Year
    const formattedDepartureDate =
        tripDepartureDate === null
            ? oneWayDepartureDate === null
                ? null
                : formatTheDate(oneWayDepartureDate)
            : formatTheDate(tripDepartureDate);
    const formattedReturnDate = tripReturnDate === null ? null : formatTheDate(tripReturnDate);

    const determineArrowIcon = (): React.ReactElement => {
        switch (tripType) {
            case TripType.ONE_WAY:
                return <AiOutlineArrowRight />;
            case TripType.ROUND_TRIP:
                return <BsArrowLeftRight />;
        }
    };

    return (
        <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentStyles}>
            {/* Trip Destinations */}
            <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                <span>{departureStation}</span>

                <Avatar size='md'>{determineArrowIcon()}</Avatar>

                <span>{arrivalStation}</span>
            </div>

            {/* Passenger Count */}
            <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                <span>{passengerCount}</span>

                <Avatar
                    size='md'
                    radius='xl'
                >
                    <BsPersonFill />
                </Avatar>
            </div>

            {/* Trip Dates */}
            <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                <span>{formattedDepartureDate}</span>
                {formattedReturnDate ? (
                    <>
                        <span>|</span>
                        <span>{formattedReturnDate}</span>
                    </>
                ) : null}
            </div>
        </div>
    );
};

/**
 * The stepper for the route planning page.
 */
export function RoutePlanningStepper(): React.ReactElement {
    const currentRoutePlanningPage = useRecoilValue(currentRoutePlanningPageState);

    return (
        <div
            style={{
                borderBottom: `1px solid ${COLOR_PALETTE.light.default.borderColor}`,

                paddingBottom: STYLING_VARIABLES.defaultSpacing,
            }}
        >
            <Stepper active={currentRoutePlanningPage}>
                {/* Departure Route(s) */}
                <Stepper.Step label='Choose Your Routes'>
                    <StepperContent />
                </Stepper.Step>

                {/* Review & Pay */}
                <Stepper.Step label='Review & Pay'>
                    <StepperContent />
                </Stepper.Step>
            </Stepper>
        </div>
    );
}
