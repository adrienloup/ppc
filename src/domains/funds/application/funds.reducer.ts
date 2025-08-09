import type { Funds, FundsDispatch } from '@/src/domains/funds/domain/funds.type.ts';

export const fundsReducer = (state: Funds, action: FundsDispatch): Funds => {
  switch (action.type) {
    case 'LOAD':
      return action.funds;
    case 'INCREASE_FUNDS': {
      const fundsIF = state.funds + action.funds;
      return {
        ...state,
        funds: fundsIF,
        fundsPerSecond: action.fundsPerSecond,
      };
    }
    case 'DECREASE_FUNDS': {
      const fundsDF = Math.max(0, state.funds - action.cost);
      return {
        ...state,
        funds: fundsDF,
      };
    }
    default:
      return state;
  }
};
