import { BUSINESS_STATE } from '@/src/domains/business/infrastructure/business.state.ts';
import type { Factory } from '@/src/domains/factory/domain/factory.type.ts';
import { IT_STATE } from '@/src/domains/it/infrastructure/IT.state.ts';
import { MECHANICAL_STATE } from '@/src/domains/mechanical/infrastructure/meca.state.ts';
import { MERCHANDISE_STATE } from '@/src/domains/merchandise/infrastructure/mer.state.ts';
import { PRODUCTION_STATE } from '@/src/domains/production/infrastructure/prod.state.ts';
import { RESOURCES_STATE } from '@/src/domains/resources/infrastructure/resources.state.ts';
import { SALE_STATE } from '@/src/domains/sale/infrastructure/sale.state.ts';
import { SWARM_STATE } from '@/src/domains/swarm/infrastructure/swarm.state.ts';
import { TRADE_STATE } from '@/src/domains/trade/infrastructure/trade.state.ts';

export const FACTORY_STATE: Factory = {
  business: BUSINESS_STATE,
  it: IT_STATE,
  mechanical: MECHANICAL_STATE,
  merchandise: MERCHANDISE_STATE,
  production: PRODUCTION_STATE,
  resources: RESOURCES_STATE,
  sale: SALE_STATE,
  swarm: SWARM_STATE,
  trade: TRADE_STATE,
};
