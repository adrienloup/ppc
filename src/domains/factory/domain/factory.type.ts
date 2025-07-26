import type { Business } from '@/src/domains/business/domain/business.type.ts';
import type { Intelligence } from '@/src/domains/intelligence/domain/intel.type.ts';
import type { Mechanical } from '@/src/domains/mechanical/domain/meca.type.ts';
import type { Merchandise } from '@/src/domains/merchandise/domain/mer.type.ts';
import type { Production } from '@/src/domains/production/domain/prod.type.ts';
import type { Sale } from '@/src/domains/sale/domain/sale.type.ts';
import type { Trade } from '@/src/domains/trade/domain/trade.type.ts';

export interface Factory {
  business: Business;
  intelligence: Intelligence;
  mechanical: Mechanical;
  merchandise: Merchandise;
  production: Production;
  sale: Sale;
  trade: Trade;
}
