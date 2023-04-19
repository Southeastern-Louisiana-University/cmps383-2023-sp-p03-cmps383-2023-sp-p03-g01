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
} from '../../../../recoil/atoms/HomePageAtom';
import { currentRoutePlanningPageState } from '../../../../recoil/atoms/RoutePlanningAtom';

/**
 * The stepper for the route planning page.
 */
export function RoutePlanningStepper(): React.ReactElement {
    const selectedTripType = useRecoilValue(tripTypeState);
    const enteredPassengerCount = useRecoilValue(passengerCountState);
    const selectedDepartureStation = useRecoilValue(departureStationState);
    const selectedArrivalStation = useRecoilValue(arrivalStationState);
    const currentRoutePlanningPage = useRecoilValue(currentRoutePlanningPageState);

    // Format the dates as Month Day, Year
    /* const formattedDepartureDate = selectedDepartureDate
        ? selectedDepartureDate.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
          })
        : null;
    const formattedReturnDate = selectedReturnDate
        ? selectedReturnDate.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
          })
        : null; */

    const determineArrowIcon = (): React.ReactElement => {
        switch (selectedTripType) {
            case TripType.ONE_WAY:
                return <AiOutlineArrowRight />;
            case TripType.ROUND_TRIP:
                return <BsArrowLeftRight />;
        }
    };

    return (
        <div style={ROUTE_PLANNING_PAGE_STYLING.headerStyles}>
            <Stepper active={currentRoutePlanningPage}>
                {/* Departure Route(s) */}
                <Stepper.Step
                    label='Choose Your Routes'
                    description='How would you like to get there?'
                >
                    <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentStyles}>
                        {/* Trip Destinations */}
                        <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                            <span>{selectedDepartureStation}</span>

                            <Avatar size='md'>{determineArrowIcon()}</Avatar>

                            <span>{selectedArrivalStation}</span>
                        </div>

                        {/* Passenger Count */}
                        <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                            <span>{enteredPassengerCount}</span>

                            <Avatar
                                size='md'
                                radius='xl'
                            >
                                <BsPersonFill />
                            </Avatar>
                        </div>

                        {/* Trip Dates */}
                        <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                            {/* <span>{formattedDepartureDate}</span>
                            {formattedReturnDate ? (
                                <>
                                    <span>|</span>
                                    <span>{formattedReturnDate}</span>
                                </>
                            ) : null} */}
                        </div>
                    </div>
                </Stepper.Step>

                {/* Seat Selection */}
                <Stepper.Step
                    label='Select Your Seats'
                    description='Feeling first class?'
                >
                    <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentStyles}>
                        {/* Trip Destinations */}
                        <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                            <span>{selectedDepartureStation}</span>

                            <Avatar size='md'>{determineArrowIcon()}</Avatar>

                            <span>{selectedArrivalStation}</span>
                        </div>

                        {/* Passenger Count */}
                        <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                            <span>{enteredPassengerCount}</span>

                            <Avatar
                                size='md'
                                radius='xl'
                            >
                                <BsPersonFill />
                            </Avatar>
                        </div>

                        {/* Trip Dates */}
                        <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                            {/* <span>{formattedDepartureDate}</span>
                            {formattedReturnDate ? (
                                <>
                                    <span>|</span>
                                    <span>{formattedReturnDate}</span>
                                </>
                            ) : null} */}
                        </div>
                    </div>
                </Stepper.Step>

                {/* Review & Pay */}
                <Stepper.Step
                    label='Review & Pay'
                    description='Keeping the lights on.'
                >
                    <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentStyles}>
                        {/* Trip Destinations */}
                        <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                            <span>{selectedDepartureStation}</span>

                            <Avatar size='md'>{determineArrowIcon()}</Avatar>

                            <span>{selectedArrivalStation}</span>
                        </div>

                        {/* Passenger Count */}
                        <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                            <span>{enteredPassengerCount}</span>

                            <Avatar
                                size='md'
                                radius='xl'
                            >
                                <BsPersonFill />
                            </Avatar>
                        </div>

                        {/* Trip Dates */}
                        <div style={ROUTE_PLANNING_PAGE_STYLING.stepperContentBlockStyles}>
                            {/* <span>{formattedDepartureDate}</span>
                            {formattedReturnDate ? (
                                <>
                                    <span>|</span>
                                    <span>{formattedReturnDate}</span>
                                </>
                            ) : null} */}
                        </div>
                    </div>
                </Stepper.Step>
            </Stepper>
        </div>
    );
}
