import { SeatType, SeatPrice } from '../models/SeatTypes';

export const getSeatCost = (seat: SeatType): SeatPrice => {
    switch (seat) {
        case SeatType.COACH:
            return SeatPrice.COACH;
        case SeatType.FIRST_CLASS:
            return SeatPrice.FIRST_CLASS;
        case SeatType.ROOMLET:
            return SeatPrice.ROOMLET;
        case SeatType.SLEEPER:
            return SeatPrice.SLEEPER;
    }
};
