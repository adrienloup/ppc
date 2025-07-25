import { BUSINESS_STATE } from '@/src/domains/business/infrastructure/business.state.ts';
import { INTELLECT_STATE } from '@/src/domains/intellect/infrastructure/int.state.ts';
import { PROD_STATE } from '@/src/domains/production/infrastructure/prod.state.ts';
import { SALE_STATE } from '@/src/domains/sale/infrastructure/sale.state.ts';
import { TRADE_STATE } from '@/src/domains/trade/infrastructure/trade.state.ts';

export const FACTORY_STATE = {
  business: BUSINESS_STATE,
  intellect: INTELLECT_STATE,
  prod: PROD_STATE,
  sale: SALE_STATE,
  trade: TRADE_STATE,
};
