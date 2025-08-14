import type { Business } from '@/src/domains/business/domain/business.type.ts';
import type { Electronic } from '@/src/domains/electronic/domain/elec.type.ts';
import type { Exchange } from '@/src/domains/exchange/domain/exchange.type.ts';
import type { Funds } from '@/src/domains/funds/domain/funds.type.ts';
import type { Inventory } from '@/src/domains/inventory/domain/inventory.type.ts';
import type { IT } from '@/src/domains/it/domain/it.type.ts';
import type { Matter } from '@/src/domains/matter/domain/matter.type.ts';
import type { Mechanical } from '@/src/domains/mechanical/domain/meca.type.ts';
import type { Merchandise } from '@/src/domains/merchandise/domain/merch.type.ts';
import type { Power } from '@/src/domains/power/domain/power.type.ts';
import type { Production } from '@/src/domains/production/domain/prod.type.ts';
import type { Resources } from '@/src/domains/resources/domain/resources.type.ts';
import type { Swarm } from '@/src/domains/swarm/domain/swarm.type.ts';
import type { Trade } from '@/src/domains/trade/domain/trade.type.ts';

export interface Factory {
  business: Business;
  electronic: Electronic;
  exchange: Exchange;
  funds: Funds;
  inventory: Inventory;
  it: IT;
  matter: Matter;
  mechanical: Mechanical;
  merchandise: Merchandise;
  power: Power;
  production: Production;
  resources: Resources;
  swarm: Swarm;
  trade: Trade;
}
