import type { TradeDispatch, Trade } from '@/src/domains/trade/domaine/trade.type.ts';

export const tradeReducer = (state: Trade, action: TradeDispatch): Trade => {
  switch (action.type) {
    case 'LOAD':
      return action.trade;
    case 'PURCHASE':
      console.log('PURCHASE', action.goods);
      return state;
    default:
      return state;
  }
};
