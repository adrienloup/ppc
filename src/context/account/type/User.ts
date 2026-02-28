import type { DataType } from '@/src/context/data/Data.ts';
import type { SettingsType } from '@/src/context/settings/type/Settings.ts';

export type UserType = Record<
  string,
  {
    data: DataType;
    password: string;
    settings: SettingsType;
  }
>;
