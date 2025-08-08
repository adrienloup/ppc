import type { Funds, FundsDispatch } from '@/src/domains/funds/domain/funds.type.ts';

export const fundsReducer = (state: Funds, action: FundsDispatch): Funds => {
  switch (action.type) {
    case 'LOAD':
      return action.funds;
    case 'INCREASE_FUNDS': {
      return {
        funds: Math.max(0, state.funds + action.price),
      };
    }
    case 'DECREASE_FUNDS': {
      return {
        funds: Math.max(0, state.funds - action.price),
      };
    }
    default:
      return state;
  }
};
