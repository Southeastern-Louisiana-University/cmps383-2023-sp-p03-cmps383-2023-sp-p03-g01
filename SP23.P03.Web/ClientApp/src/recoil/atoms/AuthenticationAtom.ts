import { atom } from 'recoil';

/**
 * The currently logged in user `Atom`.
 */
export const currentlyLoggedInUserState = atom<null | string>({
    key: 'currentlyLoggedInUser',
    default: null,
});
