import { DateValue } from '@mantine/dates';
import { atom } from 'recoil';
import { TripType } from '../../models/TripTypes';

/**
 * The currently selected trip type `Atom`.
 */
export const selectedTripTypeState = atom<TripType>({
  key: 'selectedTripType',
  default: TripType.ONE_WAY,
});

/**
 * The entered passenger count `Atom`.
 */
export const enteredPassengerCountState = atom<number>({
  key: 'enteredPassengerCount',
  default: 1,
});

/**
 * The selected departure station `Atom`.
 */
export const selectedDepartureStationState = atom<string>({
  key: 'selectedDepartureStation',
  default: '',
});

/**
 * The selected arrival station `Atom`.
 */
export const selectedArrivalStationState = atom<string>({
  key: 'selectedArrivalStation',
  default: '',
});

/**
 * The selected departure date `Atom`.
 */
export const selectedDepartureDateState = atom<DateValue>({
  key: 'selectedDepartureDate',
  default: null,
});

/**
 * The selected return date `Atom`.
 */
export const selectedReturnDateState = atom<DateValue>({
  key: 'selectedReturnDate',
  default: null,
});
