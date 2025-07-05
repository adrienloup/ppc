import type { AuthState, AuthAction } from '@/src/features/authentification/auth.type.ts';

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOG_OUT': {
      return { ...state, account: null };
    }
    case 'LOG_IN': {
      return state.users.find((user) => user.username === action.username && user.password === action.password)
        ? { ...state, account: action.username }
        : state;
    }
    case 'SIGN_UP': {
      if (state.users.some((user) => user.username === action.username)) return state;
      return {
        ...state,
        account: action.username,
        users: [...state.users, { username: action.username, password: action.password }],
      };
    }
    default:
      return state;
  }
};
