import type { Business } from '@/src/domains/business/domaine/business.type.ts';
import type { Production } from '@/src/domains/production/domain/prod.type.ts';
import type { Sale } from '@/src/domains/sale/domaine/sale.type.ts';
import type { Trade } from '@/src/domains/trade/domaine/trade.type.ts';
import type { Intellect } from '@/src/domains/intellect/domaine/int.type.ts';

export interface Factory {
  business: Business;
  production: Production;
  sale: Sale;
  trade: Trade;
  intellect: Intellect;
}
