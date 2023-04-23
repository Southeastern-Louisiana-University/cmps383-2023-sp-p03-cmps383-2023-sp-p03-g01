import { atom } from 'recoil';
import { RoutePlanningPage } from '../../models/RoutePlanningPages';
import { TrainScheduledRoutesDto } from '../../api/EntrackApi.ts/EntrackApi';

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

/**
 * The selected departure route `Atom`.
 */
