import type { Sale, SaleDispatch } from '@/src/domains/sale/domaine/sale.type.ts';

export const saleReducer = (state: Sale, action: SaleDispatch): Sale => {
  switch (action.type) {
    case 'LOAD':
      return action.sale;
    case 'INCREASE_INVENTORY':
      return state;
    case 'DECREASE_INVENTORY':
      if (state.unsoldInventory <= 0) return state;
      // const unsoldInventorySUI = Math.max(0, Math.floor(state.unsoldInventory * (1 - state.publicDemand)));
      // const fundsSUI = state.funds + (state.unsoldInventory - unsoldInventorySUI) * state.clipPrice;
      return {
        ...state,
        // unsoldInventory: unsoldInventorySUI,
        // funds: state.funds + (state.unsoldInventory - unsoldInventorySUI) * action.clipPrice,
      };
    case 'DECREASE_FUNDS':
      if (state.funds <= 0) return state;
      return {
        ...state,
        funds: Math.max(0, state.funds - action.cost),
      };
    default:
      return state;
  }
};
