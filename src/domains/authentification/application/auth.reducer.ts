import type { AuthAction, AuthState } from '@/src/domains/authentification/domain/auth.type.ts';

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
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
      console.log('LOG_OUT');

      return {
        ...state,
        user: null,
      };
    }
    case 'UPDATE_USERS': {
      if (!state.user) return state;
      console.log('UPDATE_USERS', state.user, state.users, action.account);

      return {
        ...state,
        users: {
          ...state.users,
          [state.user]: {
            ...state.users[state.user],
            account: action.account,
          },
        },
      };
    }
    default:
      return state;
  }
};
