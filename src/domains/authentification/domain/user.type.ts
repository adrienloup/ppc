import type { AccountState } from '@/src/domains/account/domain/account.type.ts';

export interface User {
  password: string;
  account: AccountState;
}
