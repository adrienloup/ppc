import type { Factory } from '@/src/domains/factory/domain/factory.type.ts';
import { BUSINESS_STATE } from '@/src/domains/business/infrastructure/business.state.ts';
import { COMMERCE_STATE } from '@/src/domains/commerce/infrastructure/com.state.ts';
import { INTELLIGENCE_STATE } from '@/src/domains/intelligence/infrastructure/intel.state.ts';
import { PROD_STATE } from '@/src/domains/production/infrastructure/prod.state.ts';
import { SALE_STATE } from '@/src/domains/sale/infrastructure/sale.state.ts';
import { TRADE_STATE } from '@/src/domains/trade/infrastructure/trade.state.ts';

export const FACTORY_STATE: Factory = {
  business: BUSINESS_STATE,
  commerce: COMMERCE_STATE,
  intelligence: INTELLIGENCE_STATE,
  production: PROD_STATE,
  sale: SALE_STATE,
  trade: TRADE_STATE,
};
