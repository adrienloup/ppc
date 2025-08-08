import type { Profile, ProfileDispatch } from '@/src/domains/profile/domain/profile.type.ts';

export const profileReducer = (state: Profile, action: ProfileDispatch): Profile => {
  switch (action.type) {
    case 'LOAD':
      return action.profile;
    case 'SET_LANG':
      return { ...state, lang: action.lang };
    case 'SET_MODE':
      return { ...state, mode: action.mode };
    case 'SET_THEME':
      return { ...state, theme: action.theme };
    case 'SET_PLAY_PAUSE':
      return { ...state, pause: !state.pause };
    default:
      return state;
  }
};
