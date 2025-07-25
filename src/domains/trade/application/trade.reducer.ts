import type { Trade, TradeDispatch } from '@/src/domains/trade/domaine/trade.type.ts';

export const tradeReducer = (state: Trade, action: TradeDispatch): Trade => {
  switch (action.type) {
    case 'LOAD':
      return action.trade;
    case 'BUY_MERCHANDISE':
      console.log('BUY_MERCHANDISE', action.merchandise);
      return state;
    default:
      return state;
  }
};
