import type { AuthAction, AuthState } from '@/src/domains/authentification/domain/auth.type.ts';

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SIGN_UP':
      return {
        users: action.users,
        user: action.user,
      };
    case 'LOG_IN':
      return { ...state, user: action.user };
    case 'LOG_OUT': {
      return { ...state, user: null };
    }
    default:
      return state;
  }
};
