import type { SaleAction, SaleState } from '@/src/domains/sale/domain/sale.type.ts';

export const saleReducer = (state: SaleState, action: SaleAction): SaleState => {
  switch (action.type) {
    case 'LOAD':
      return action.state;
    case 'UNSOLD_INVENTORY': {
      const unsoldInventoryBonusUI = Math.max(1, state.unsoldInventoryBonus);

      return {
        ...state,
        unsoldInventory: (state.unsoldInventory + 1) * unsoldInventoryBonusUI,
        fundsPerSecond: (state.fundsPerSecond + 1) * unsoldInventoryBonusUI * state.clipPrice,
      };
    }
    case 'AUTO_UNSOLD_INVENTORY': {
      return {
        ...state,
        unsoldInventory: state.unsoldInventory + action.clip * Math.max(1, state.unsoldInventoryBonus),
        fundsPerSecond: action.clip * state.clipPrice,
      };
    }
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
    case 'INCREASE_CLIP_PRICE': {
      const increasePP = Math.min(state.clipPriceRef + 0.01, 1);
      return {
        ...state,
        clipPriceRef: increasePP,
        clipPrice: increasePP * Math.max(1, state.marketingBonus),
        publicDemand: 0.1 / increasePP,
      };
    }
    case 'DECREASE_CLIP_PRICE': {
      const decreasePP = Math.max(state.clipPriceRef - 0.01, 0.1);
      return {
        ...state,
        clipPriceRef: decreasePP,
        clipPrice: decreasePP * Math.max(1, state.marketingBonus),
        publicDemand: 0.1 / decreasePP,
      };
    }
    case 'DECREASE_FUNDS': {
      return {
        ...state,
        funds: Math.max(0, state.funds - action.cost),
      };
    }
    case 'UNSOLD_INVENTORY_BONUS':
      return {
        ...state,
        unsoldInventoryBonus: action.bonus,
      };
    default:
      return state;
  }
};
