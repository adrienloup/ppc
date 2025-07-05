import type { Dispatch } from 'react';

export type Account = string | null;

export interface User {
  username: string;
  password: string;
}

export interface AuthState {
  users: User[];
  account: Account;
}

export type AuthAction =
  | { type: 'LOG_OUT' }
  | { type: 'LOG_IN'; username: string; password: string }
  | { type: 'SIGN_UP'; username: string; password: string };

export type Auth = { state: AuthState; dispatch: Dispatch<AuthAction> };
