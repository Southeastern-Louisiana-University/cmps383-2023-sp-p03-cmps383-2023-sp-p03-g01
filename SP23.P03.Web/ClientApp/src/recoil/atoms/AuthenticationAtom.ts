import { atom } from 'recoil';
import { UserDto } from '../../api/EntrackApi.ts/EntrackApi';

/**
 * The currently logged in user `Atom`.
 */
export const currentlyLoggedInUserState = atom<null | UserDto>({
    key: 'currentlyLoggedInUser',
    default: null,
});
