import type { Account } from '@/src/domains/auth/domain/account.type.ts';
import type { Profile } from '@/src/domains/profile/domain/profile.type.ts';
import type { Factory } from '@/src/domains/factory/domain/factory.type.ts';

export type Users = Record<string, { account: Account; profile: Profile; factory: Factory }>;
