import type { Settings } from '@/src/domains/settings/domain/setti.type.ts';
import type { Factory } from '@/src/domains/factory/domain/factory.type.ts';

export type Users = Record<
  string,
  {
    password: string;
    settings: Settings;
    factory: Factory;
  }
>;
