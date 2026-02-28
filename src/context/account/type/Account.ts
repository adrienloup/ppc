import type { UserType } from '@/src/context/account/type/User.ts';
import type { DataType } from '@/src/context/data/Data.ts';
import type { SettingsType } from '@/src/context/settings/type/Settings.ts';

export interface AccountType {
  online: string | null;
  user: UserType;
}

export type AccountDispatchType =
  | { type: 'LOG_IN'; name: string }
  | { type: 'LOG_OUT'; data: DataType; settings: SettingsType }
  | { type: 'SIGN_UP'; name: string; password: string };
