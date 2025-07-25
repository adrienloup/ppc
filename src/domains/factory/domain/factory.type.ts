import type { Business } from '@/src/domains/business/domaine/business.type.ts';
import type { Commerce } from '@/src/domains/commerce/domaine/com.type.ts';
import type { Intelligence } from '@/src/domains/intelligence/domaine/intel.type.ts';
import type { Production } from '@/src/domains/production/domain/prod.type.ts';
import type { Sale } from '@/src/domains/sale/domain/sale.type.ts';
import type { Trade } from '@/src/domains/trade/domain/trade.type.ts';

export interface Factory {
  business: Business;
  commerce: Commerce;
  intelligence: Intelligence;
  production: Production;
  sale: Sale;
  trade: Trade;
}
