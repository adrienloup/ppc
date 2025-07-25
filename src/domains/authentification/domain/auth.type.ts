import type { Users } from '@/src/domains/authentification/domain/users.type.ts';
import type { Settings } from '@/src/domains/settings/domain/sett.type.ts';
import type { Factory } from '@/src/domains/authentification/domain/factory.type.ts';

export interface Auth {
  users: Users;
  user: string | null;
}

export type AuthDispatch =
  | { type: 'SIGN_UP'; username: string; password: string }
  | { type: 'LOG_IN'; username: string }
  | { type: 'LOG_OUT'; settings: Settings; factory: Factory };
