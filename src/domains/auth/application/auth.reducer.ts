import type { AuthDispatchType, AuthType } from '@/src/domains/auth/application/auth.type.ts';

export const authReducer = (state: AuthType, action: AuthDispatchType): AuthType => {
  switch (action.type) {
    case 'SIGN_UP': {
      if (state.users[action.name]) return state;
      return {
        user: action.name,
        users: {
          ...state.users,
          [action.name]: {
            ...state.users[action.name],
            password: action.password,
          },
        },
      };
    }
    case 'LOG_IN': {
      if (!state.users[action.name]) return state;
      return {
        ...state,
        user: action.name,
      };
    }
    case 'LOG_OUT': {
      if (!state.user) return state;
      return {
        ...state,
        user: '',
      };
    }
    default:
      return state;
  }
};
