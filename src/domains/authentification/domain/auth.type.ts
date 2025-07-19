import type { Users } from '@/src/domains/authentification/domain/users.type.ts';

export interface AuthState {
  users: Users;
  user: string | null;
  save: string | null;
  load: string | null;
}

export type AuthAction =
  | { type: 'LOAD'; username: string }
  | { type: 'SIGN_UP'; username: string; password: string }
  | { type: 'LOG_IN'; username: string }
  | { type: 'LOG_OUT' }
  | { type: 'SAVE' };
