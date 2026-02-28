import type { SettingsType } from '@/src/domain/settings/type/Settings.ts';

export type AccountType = Record<
  string,
  {
    data: ''; // DataType
    online: boolean;
    password: string;
    settings: SettingsType;
  }
>;

export type AccountDispatchType =
  | { type: 'SIGN_UP'; name: string; password: string }
  | { type: 'LOG_IN'; name: string }
  | { type: 'LOG_OUT'; name: string };
