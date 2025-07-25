import type { Settings } from '@/src/domains/settings/domain/sett.type.ts';

export type Users = Record<
  string,
  {
    password: string;
    settings: Settings;
  }
>;
