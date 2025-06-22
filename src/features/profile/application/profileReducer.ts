import type { Profile, ProfileDispatch } from '@/src/features/profile/domain/Profile.ts';

export const profileReducer = (state: Profile, action: ProfileDispatch): Profile => {
  switch (action.type) {
    case 'SET_USER': {
      return { ...state, user: action.user };
    }
    case 'SET_PLAY': {
      return { ...state, isPlay: !state.isPlay };
    }
    default:
      return state;
  }
};
