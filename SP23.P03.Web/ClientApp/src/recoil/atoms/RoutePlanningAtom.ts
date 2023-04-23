import { atom } from 'recoil';
import { RoutePlanningPage } from '../../models/RoutePlanningPages';
import { TrainScheduledRoutesDto } from '../../api/EntrackApi.ts/EntrackApi';
import { SeatType } from '../../models/SeatTypes';

/**
 * The current route planning page `Atom`.
 */
export const currentRoutePlanningPageState = atom<RoutePlanningPage>({
    key: 'currentRoutePlanningPage',
    default: RoutePlanningPage.DEPARTURE_ROUTE,
});

/**
 * Contains all scheduled routes.
 */
export const scheduledRoutesState = atom<TrainScheduledRoutesDto[]>({
    key: 'scheduledRoutes',
    default: [],
});

export interface SelectedRoute {
    route: TrainScheduledRoutesDto;
    seat: SeatType;
    cost: number;
}

/**
 * The selected departure route `Atom`.
 */
export const departureRouteState = atom<SelectedRoute | null>({
    key: 'departureRoute',
    default: null,
});

/**
 * The selected return route `Atom`.
 */
export const returnRouteState = atom<SelectedRoute | null>({
    key: 'returnRoute',
    default: null,
});
