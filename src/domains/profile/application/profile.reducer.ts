import type { ProfileDispatchType, ProfileType } from '@/src/domains/profile/application/profile.type.ts';

export const profileReducer = (state: ProfileType, action: ProfileDispatchType): ProfileType => {
  switch (action.type) {
    case 'SET_LANG':
      return { ...state, lang: action.lang };
    case 'SET_MODE':
      return { ...state, mode: action.mode };
    case 'SET_THEME':
      return { ...state, theme: action.theme };
    default:
      return state;
  }
};
