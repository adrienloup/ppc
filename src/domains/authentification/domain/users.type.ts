import type { Profile } from '@/src/domains/profile/domain/profile.type.ts';
import type { Factory } from '@/src/domains/factory/domain/factory.type.ts';

export type Users = Record<string, { password: string; profile: Profile; factory: Factory }>;
