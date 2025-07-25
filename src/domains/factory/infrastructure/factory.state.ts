import { TRADE_STATE } from '@/src/domains/trade/infrastructure/trade.state.ts';
import { PROD_STATE } from '@/src/domains/production/infrastructure/prod.state.ts';

export const FACTORY_STATE = {
  trade: TRADE_STATE,
  prod: PROD_STATE,
};
