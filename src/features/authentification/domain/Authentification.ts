import type { User } from '@/src/features/authentification/domain/User.ts';

export interface Authentification {
  user: string | null;
  users: User[];
}

export type AuthentificationDispatch =
  | { type: 'SIGN_OUT' }
  | { type: 'SIGN_IN'; username: string; password: string }
  | { type: 'SIGN_UP'; username: string; password: string };
