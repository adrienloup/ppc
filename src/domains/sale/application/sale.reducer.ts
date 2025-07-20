import type { SaleAction, SaleState } from '@/src/domains/sale/domain/sale.type.ts';

export const saleReducer = (state: SaleState, action: SaleAction): SaleState => {
  switch (action.type) {
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
        unsoldInventory: (state.unsoldInventory + action.clip) * Math.max(1, state.unsoldInventoryBonus),
        fundsPerSecond: action.clip * state.clipPrice,
      };
    }
    case 'SELL_UNSOLD_INVENTORY': {
      const unsoldInventorySUI = Math.max(0, Math.floor(state.unsoldInventory * (1 - state.publicDemand)));

      return {
        ...state,
        unsoldInventory: unsoldInventorySUI,
        funds: state.funds + (state.unsoldInventory - unsoldInventorySUI) * state.clipPrice,
      };
    }
    default:
      return state;
  }
};
