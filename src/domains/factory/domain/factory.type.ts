import type { Business } from '@/src/domains/business/domain/business.type.ts';
import type { Funds } from '@/src/domains/funds/domain/funds.type.ts';
import type { Inventory } from '@/src/domains/inventory/domain/inventory.type.ts';
import type { IT } from '@/src/domains/it/domain/it.type.ts';
import type { Mechanical } from '@/src/domains/mechanical/domain/meca.type.ts';
import type { Merchandise } from '@/src/domains/merchandise/domain/mer.type.ts';
import type { Production } from '@/src/domains/production/domain/prod.type.ts';
import type { Resources } from '@/src/domains/resources/domain/resources.type.ts';
// import type { Sale } from '@/src/domains/sale/domain/sale.type.ts';
import type { Swarm } from '@/src/domains/swarm/domain/swarm.type.ts';
import type { Trade } from '@/src/domains/trade/domain/trade.type.ts';

export interface Factory {
  business: Business;
  funds: Funds;
  inventory: Inventory;
  it: IT;
  mechanical: Mechanical;
  merchandise: Merchandise;
  production: Production;
  resources: Resources;
  // sale: Sale;
  swarm: Swarm;
  trade: Trade;
}
