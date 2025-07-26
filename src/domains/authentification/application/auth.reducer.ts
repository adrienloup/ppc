import type { Auth, AuthDispatch } from '@/src/domains/authentification/domain/auth.type.ts';
import type { Profile } from '@/src/domains/profile/domain/profile.type.ts';

export const authReducer = (state: Auth, action: AuthDispatch): Auth => {
  switch (action.type) {
    case 'SIGN_UP': {
      if (state.users[action.username]) return state;
      return {
        ...state,
        users: {
          ...state.users,
          [action.username]: {
            ...state.users[action.username],
            password: action.password,
            profile: {
              date: new Date().toISOString(),
            } as Profile,
          },
        },
        user: action.username,
      };
    }
    case 'LOG_IN': {
      if (!state.users[action.username]) return state;
      return {
        ...state,
        user: action.username,
      };
    }
    case 'LOG_OUT': {
      if (!state.user) return state;
      return {
        ...state,
        user: null,
        users: {
          ...state.users,
          [state.user]: {
            ...state.users[state.user],
            profile: action.profile,
            factory: action.factory,
          },
        },
      };
    }
    default:
      return state;
  }
};
