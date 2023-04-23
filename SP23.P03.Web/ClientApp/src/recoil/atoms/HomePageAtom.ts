import { DateValue } from '@mantine/dates';
import { atom } from 'recoil';
import { TripType } from '../../models/TripTypes';

/**
 * Mantine-friendly select option that represents a TrainStationDTO.
 * Never again will I use the Mantine select component.
 */
export interface MantineTrainStationDto {
    id: number;
    label: string;
    value: string;
}

/**
 * The currently selected trip type `Atom`.
 */
export const tripTypeState = atom<TripType>({
    key: 'tripType',
    default: TripType.ONE_WAY,
});

/**
 * The entered passenger count `Atom`.
 */
export const passengerCountState = atom<number>({
    key: 'passengerCount',
    default: 1,
});

/**
 * The selected departure station `Atom`.
 */
export const departureStationState = atom<string>({
    key: 'departureStation',
    default: '',
});

/**
 * The selected arrival station `Atom`.
 */
export const arrivalStationState = atom<string>({
    key: 'arrivalStation',
    default: '',
});

/**
 * The selected date range `Atom`.
 */
export const tripDurationState = atom<[Date | null, Date | null]>({
    key: 'tripDuration',
    default: [null, null],
});

/**
 * One-way departure date `Atom`.
 */
export const departureDateState = atom<DateValue>({
    key: 'departureDate',
    default: null,
});

/**
 * Holds all train stations.
 */
export const allTrainStationsState = atom<MantineTrainStationDto[]>({
    key: 'allTrainStations',
    default: [],
});
