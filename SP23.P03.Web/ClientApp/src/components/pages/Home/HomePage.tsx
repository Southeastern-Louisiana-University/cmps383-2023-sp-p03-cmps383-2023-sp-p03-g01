import { Button, Paper } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { DestinationStationSelect } from './modules/DestinationStationSelect';
import { HOME_PAGE_STYLING } from './HomePageStyling';
import { DepartureStationSelect } from './modules/DepartureStationSelect';
import { PassengersNumberInput } from './modules/PassengersNumberInput';
import { TripSelect } from './modules/TripSelect';
import { DepartureDatePicker } from './modules/DepartureDatePicker';
import { ReturnDatePicker } from './modules/ReturnDatePicker';
import { AppRoutes } from '../../../models/AppRoutes';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  enteredPassengerCountState,
  selectedArrivalStationState,
  selectedDepartureDateState,
  selectedDepartureStationState,
  selectedReturnDateState,
} from '../../../recoil/atoms/HomePageAtom';

/**
 * The home page of the app.
 */
export function HomePage(): React.ReactElement {
  const navigate = useNavigate();
  const { width: browserWidth } = useViewportSize();
  const componentSize = getMantineComponentSize(browserWidth);

  const enteredPassengerCount = useRecoilValue(enteredPassengerCountState);
  const selectedDepartureStation = useRecoilValue(selectedDepartureStationState);
  const selectedArrivalStation = useRecoilValue(selectedArrivalStationState);
  const selectedDepartureDate = useRecoilValue(selectedDepartureDateState);
  const selectedReturnDate = useRecoilValue(selectedReturnDateState);
  const formIsComplete =
    enteredPassengerCount > 0 &&
    selectedDepartureStation !== '' &&
    selectedArrivalStation !== '' &&
    selectedDepartureDate !== null &&
    selectedReturnDate !== null;

  const navigateToRoutePlanningPage = () => {
    navigate(AppRoutes.ROUTE_PLANNING);
  };

  return (
    <div style={HOME_PAGE_STYLING['rootStyles']}>
      <div style={HOME_PAGE_STYLING['rootContentStyles']}>
        <Paper
          shadow='lg'
          style={HOME_PAGE_STYLING['paperStyles'] as React.CSSProperties}
        >
          {/* Top Row */}
          <TripSelect />
          <PassengersNumberInput />

          {/* 2nd Row */}
          <DepartureStationSelect />
          <DestinationStationSelect />

          {/* 3rd Row */}
          <DepartureDatePicker />
          <ReturnDatePicker />

          {/* Final Row */}
          {formIsComplete && (
            <Button
              style={HOME_PAGE_STYLING['paperContentStyles'] as React.CSSProperties}
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
