import type { Profile, ProfileDispatch } from '@/src/domains/profile/domain/profile.type.ts';

export const profileReducer = (state: Profile, action: ProfileDispatch): Profile => {
  switch (action.type) {
    case 'LOAD':
      return action.profile;
    case 'LANG':
      return { ...state, lang: action.lang };
    case 'MODE':
      return { ...state, mode: action.mode };
    case 'THEME':
      return { ...state, theme: action.theme };
    case 'PLAY_PAUSE':
      return { ...state, pause: !state.pause };
    default:
      return state;
  }
};
