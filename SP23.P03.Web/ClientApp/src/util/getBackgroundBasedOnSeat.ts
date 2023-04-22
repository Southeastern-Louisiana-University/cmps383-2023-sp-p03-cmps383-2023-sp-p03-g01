import { SeatType } from '../models/SeatTypes';
import { COLOR_PALETTE } from '../styling/ColorPalette';

export const getBackgroundBasedOnSeat = (seatType: SeatType): string => {
    switch (seatType) {
        case SeatType.COACH:
            return COLOR_PALETTE.light.default.coachSeatButtonBackground;
        case SeatType.FIRST_CLASS:
            return COLOR_PALETTE.light.default.firstClassSeatButtonBackground;
        case SeatType.SLEEPER:
            return COLOR_PALETTE.light.default.sleeperSeatButtonBackground;
        case SeatType.ROOMLET:
            return COLOR_PALETTE.light.default.roomletSeatButtonBackground;
    }
};
