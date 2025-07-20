import type { AccountState } from '@/src/domains/account/domain/account.type.ts';
import type { ExpState } from '@/src/domains/exploitation/domain/exp.type.ts';
import type { MecaState } from '@/src/domains/mechanical/domain/meca.type.ts';
import type { SaleState } from '@/src/domains/sale/domain/sale.type.ts';
import type { ProdState } from '@/src/domains/production/domain/prod.type.ts';
import type { MercState } from '@/src/domains/merchandising/domaine/merc.type.ts';

export interface User {
  password: string;
  account: AccountState;
  exploitation: ExpState;
  mechanical: MecaState;
  sale: SaleState;
  production: ProdState;
  merchandising: MercState;
}
