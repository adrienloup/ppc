import type { AccountState } from '@/src/domains/account/domain/account.type.ts';
import type { FactoryState } from '@/src/domains/factory/domain/factoryState.type.ts';

export interface User {
  password: string;
  account: AccountState;
  factory: FactoryState;
}
