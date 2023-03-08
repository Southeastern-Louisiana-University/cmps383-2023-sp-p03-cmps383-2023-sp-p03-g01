import { atom } from 'recoil';

export const currentlyLoggedInUserState = atom<null | string>({
  key: 'currentlyLoggedInUser',
  default: null,
});
