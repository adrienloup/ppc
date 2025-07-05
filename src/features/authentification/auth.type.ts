import type { Dispatch } from 'react';

export type AccountType = string | null;

export interface UserType {
  username: string;
  password: string;
}

export interface AuthState {
  users: UserType[];
  account: AccountType;
}

export type AuthAction =
  | { type: 'LOG_OUT' }
  | { type: 'LOG_IN'; username: string; password: string }
  | { type: 'SIGN_UP'; username: string; password: string };

export type AuthType = { state: AuthState; dispatch: Dispatch<AuthAction> };
