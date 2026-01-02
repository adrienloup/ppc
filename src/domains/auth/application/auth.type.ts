import type { UsersType } from '@/src/domains/auth/application/users.type.ts';

export interface AuthType {
  user: string;
  users: UsersType;
}

export type AuthDispatchType =
  | { type: 'SIGN_UP'; name: string; password: string }
  | { type: 'LOG_IN'; name: string }
  | { type: 'LOG_OUT' };
