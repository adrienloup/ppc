import { BUSINESS_STATE } from '@/src/domains/business/infrastructure/business.state.ts';
import { FUNDS_STATE } from '@/src/domains/funds/infrastructure/funds.state.ts';
import { INVENTORY_STATE } from '@/src/domains/inventory/infrastructure/inventory.state.ts';
import { IT_STATE } from '@/src/domains/it/infrastructure/IT.state.ts';
import { MECA_STATE } from '@/src/domains/machine/infrastructure/meca.state.ts';
import { MERCHANDISE_STATE } from '@/src/domains/merchandise/infrastructure/merch.state.ts';
import { POWER_STATE } from '@/src/domains/power/infrastructure/power.state.ts';
import { PRODUCTION_STATE } from '@/src/domains/production/infrastructure/prod.state.ts';
import { RESOURCES_STATE } from '@/src/domains/resources/infrastructure/resources.state.ts';
import { SWARM_STATE } from '@/src/domains/swarm/infrastructure/swarm.state.ts';
import { TRADE_STATE } from '@/src/domains/trade/infrastructure/trade.state.ts';
import type { Factory } from '@/src/domains/factory/domain/factory.type.ts';

export const FACTORY_STATE: Factory = {
  business: BUSINESS_STATE,
  funds: FUNDS_STATE,
  inventory: INVENTORY_STATE,
  it: IT_STATE,
  machine: MECA_STATE,
  merchandise: MERCHANDISE_STATE,
  power: POWER_STATE,
  production: PRODUCTION_STATE,
  resources: RESOURCES_STATE,
  swarm: SWARM_STATE,
  trade: TRADE_STATE,
};
