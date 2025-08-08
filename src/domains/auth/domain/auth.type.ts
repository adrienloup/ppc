import type { Users } from '@/src/domains/auth/domain/users.type.ts';
import type { Factory } from '@/src/domains/factory/domain/factory.type.ts';
import type { Profile } from '@/src/domains/profile/domain/profile.type.ts';

export interface Auth {
  users: Users;
  user: string | null;
}

export type AuthDispatch =
  | { type: 'SIGN_UP'; username: string; password: string }
  | { type: 'LOG_IN'; username: string }
  | { type: 'LOG_OUT'; profile: Profile; factory: Factory };
