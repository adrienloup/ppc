import type { Settings } from '@/src/domains/settings/domain/sett.type.ts';
import type { Factory } from '@/src/domains/authentification/domain/factory.type.ts';

export type Users = Record<
  string,
  {
    password: string;
    settings: Settings;
    factory: Factory;
  }
>;
