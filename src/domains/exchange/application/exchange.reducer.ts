import type { Exchange, ExchangeDispatch } from '@/src/domains/exchange/domain/exchange.type.ts';

export const exchangeReducer = (state: Exchange, action: ExchangeDispatch): Exchange => {
  switch (action.type) {
    case 'LOAD':
      return action.exchange;
    case 'EXCHANGE':
      return action.exchange;
    default:
      return state;
  }
};
