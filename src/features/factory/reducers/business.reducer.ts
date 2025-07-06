import type { FactoryAction, FactoryState } from '@/src/features/factory/factory.type.ts';

export const businessReducer = (state: FactoryState, action: FactoryAction): FactoryState => {
  switch (action.type) {
    case 'SELL_UNSOLD_INVENTORY': {
      if (state.unsoldInventory <= 0) return state;

      const unsoldInventorySUI = Math.max(0, Math.floor(state.unsoldInventory * (1 - state.publicDemand)));
      const fundsSUI = state.funds + (state.unsoldInventory - unsoldInventorySUI) * state.clipPrice;

      return {
        ...state,
        unsoldInventory: unsoldInventorySUI,
        funds: fundsSUI,
      };
    }
    case 'INCREASE_CLIP_SELLING_PRICE': {
      const increasePP = Math.min(state.clipPriceRef + 0.01, 1);
      return {
        ...state,
        clipPriceRef: increasePP,
        clipPrice: increasePP * Math.max(1, state.marketingBonus),
        publicDemand: 0.1 / increasePP,
      };
    }
    case 'DECREASE_CLIP_SELLING_PRICE': {
      const decreasePP = Math.max(state.clipPriceRef - 0.01, 0.1);
      return {
        ...state,
        clipPriceRef: decreasePP,
        clipPrice: decreasePP * Math.max(1, state.marketingBonus),
        publicDemand: 0.1 / decreasePP,
      };
    }
    default:
      return state;
  }
};
