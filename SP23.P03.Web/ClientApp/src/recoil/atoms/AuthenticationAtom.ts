import { atom } from 'recoil';
import { UserDto } from '../../api/EntrackApi.ts/EntrackApi';

/**
 * The currently logged in user `Atom`.
 */
export const currentlyLoggedInUserState = atom<null | UserDto>({
    key: 'currentlyLoggedInUser',
    default: localStorage.getItem('user') ? (JSON.parse(localStorage.getItem('user')!) as UserDto) : null,
});
