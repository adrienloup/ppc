import type { Users } from '@/src/domains/authentification/domain/users.type.ts';
import type { AccountState } from '@/src/domains/account/domain/account.type.ts';

export interface AuthState {
  users: Users;
  user: string | null;
}

export type AuthAction =
  | { type: 'SIGN_UP'; username: string; password: string }
  | { type: 'LOG_IN'; username: string }
  | { type: 'LOG_OUT' }
  | { type: 'UPDATE_USERS'; account: AccountState };
