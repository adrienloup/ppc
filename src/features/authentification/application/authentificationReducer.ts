import type {
  Authentification,
  AuthentificationDispatch,
} from '@/src/features/authentification/domain/Authentification.ts';

export const authentificationReducer = (
  state: Authentification,
  action: AuthentificationDispatch
): Authentification => {
  switch (action.type) {
    case 'SIGN_OUT': {
      return { ...state, user: '' };
    }
    case 'SIGN_IN': {
      return state.users.find((user) => user.username === action.username && user.password === action.password)
        ? { ...state, user: action.username }
        : state;
    }
    case 'SIGN_UP': {
      if (state.users.some((user) => user.username === action.username)) return state;
      return {
        ...state,
        user: action.username,
        users: [...state.users, { username: action.username, password: action.password }],
      };
    }
    default:
      return state;
  }
};
