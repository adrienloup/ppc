import type { Business, BusinessDispatch } from '@/src/domains/business/domain/business.type.ts';

export const businessReducer = (state: Business, action: BusinessDispatch): Business => {
  switch (action.type) {
    case 'LOAD':
      return action.business;
    case 'INCREASE_MARKETING':
      if (state.marketing >= 10) return state;
      return {
        ...state,
        marketing: state.marketing + 1,
        marketingCost: action.cost,
      };
    default:
      return state;
  }
};
