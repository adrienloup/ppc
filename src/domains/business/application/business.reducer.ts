import type { Business, BusinessDispatch } from '@/src/domains/business/domain/business.type.ts';

export const businessReducer = (state: Business, action: BusinessDispatch): Business => {
  switch (action.type) {
    case 'LOAD':
      return action.business;
    case 'INCREASE_FUNDS': {
      const fundsIF = Math.max(0, state.funds + action.funds * state.clipPrice);
      return {
        ...state,
        funds: fundsIF,
      };
    }
    case 'INCREASE_MARKETING':
      if (state.marketing >= 10) return state;
      return {
        ...state,
        marketing: state.marketing + 1,
        marketingCost: action.marketingCost,
      };
    default:
      return state;
  }
};
