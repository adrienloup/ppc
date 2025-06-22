import type { Profile, ProfileDispatch } from '@/src/features/profile/domain/Profile.ts';

export const profileReducer = (state: Profile, action: ProfileDispatch): Profile => {
  switch (action.type) {
    case 'INITIALIZE': {
      return { ...action.state };
    }
    case 'SET_LANGUAGE': {
      return { ...state, language: action.language };
    }
    case 'SET_MODE': {
      return { ...state, mode: action.mode };
    }
    case 'SET_THEME': {
      return { ...state, theme: action.theme };
    }
    case 'SET_PLAY': {
      return { ...state, isPlay: !state.isPlay };
    }
    default:
      return state;
  }
};
