import type { Users } from '@/src/domains/authentification/domain/users.type.ts';

export interface AuthState {
  users: Users;
  user: string | null;
}

export type AuthAction =
  | { type: 'SIGN_UP'; users: Users; user: string }
  | { type: 'LOG_IN'; user: string }
  | { type: 'LOG_OUT' };

export interface AuthDispatch {
  signUp: (username: string, password: string) => boolean;
  logIn: (username: string, password: string) => boolean;
  logOut: () => void;
}
