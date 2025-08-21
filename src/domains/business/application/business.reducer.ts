import type { Business, BusinessDispatch } from '@/src/domains/business/domain/business.type.ts';

export const businessReducer = (state: Business, action: BusinessDispatch): Business => {
  switch (action.type) {
    case 'LOAD':
      return action.business;
    case 'INCREASE_CLIP_PRICE': {
      const priceICP = Math.min(state.clipPriceRef + 0.01, 1);
      return {
        ...state,
        clipPriceRef: priceICP,
        clipPrice: priceICP * Math.max(1, state.marketingBonus),
        publicDemand: 0.1 / priceICP,
      };
    }
    case 'DECREASE_CLIP_PRICE': {
      const priceDCP = Math.max(state.clipPriceRef - 0.01, 0.1);
      return {
        ...state,
        clipPriceRef: priceDCP,
        clipPrice: priceDCP * Math.max(1, state.marketingBonus),
        publicDemand: 0.1 / priceDCP,
      };
    }
    case 'MARKETING_BONUS': {
      const clipPriceMB = state.clipPriceRef * Math.max(1, action.bonus);
      return {
        ...state,
        marketingBonus: action.bonus,
        clipPrice: clipPriceMB,
      };
    }
    default:
      return state;
  }
};
