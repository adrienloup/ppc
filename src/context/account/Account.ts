import type { SettingsType } from '@/src/context/settings/type/Settings.ts';

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
  | { type: 'LOG_IN'; username: string }
  | { type: 'LOG_OUT'; username: string; settings: SettingsType }
  | { type: 'SIGN_UP'; username: string; password: string };
