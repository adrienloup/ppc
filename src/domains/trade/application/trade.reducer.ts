import type { Trade, TradeDispatch } from '@/src/domains/trade/domain/trade.type.ts';

export const tradeReducer = (state: Trade, action: TradeDispatch): Trade => {
  switch (action.type) {
    case 'LOAD':
      return action.trade;
    case 'UPDATE_TOKEN':
      return state;
    case 'INCREASE_WALLET':
      return state;
    case 'DECREASE_WALLET':
      return state;
    case 'INCREASE_CASH':
      return state;
    case 'DECREASE_CASH':
      return state;
    case 'WITHDRAW_CASH':
      return state;
    default:
      return state;
  }
};
