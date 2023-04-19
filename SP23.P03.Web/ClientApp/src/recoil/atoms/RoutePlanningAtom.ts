import { atom } from 'recoil';
import { RoutePlanningPage } from '../../models/RoutePlanningPages';

/**
 * The current route planning page `Atom`.
 */
export const currentRoutePlanningPageState = atom<RoutePlanningPage>({
    key: 'currentRoutePlanningPage',
    default: RoutePlanningPage.DEPARTURE_ROUTE,
});
