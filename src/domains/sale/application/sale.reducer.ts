import type { Sale, SaleDispatch } from '@/src/domains/sale/domain/sale.type.ts';

export const saleReducer = (state: Sale, action: SaleDispatch): Sale => {
  switch (action.type) {
    case 'LOAD':
      return action.sale;
    case 'INCREASE_INVENTORY': {
      const unsoldInventoryBonusUI = Math.max(1, state.unsoldInventoryBonus);

      return {
        ...state,
        unsoldInventory: (state.unsoldInventory + 1) * unsoldInventoryBonusUI,
        fundsPerSecond: (state.fundsPerSecond + 1) * unsoldInventoryBonusUI * state.clipPrice,
      };
    }
    case 'AUTO_INCREASE_INVENTORY': {
      return {
        ...state,
        unsoldInventory: state.unsoldInventory + action.clip * Math.max(1, state.unsoldInventoryBonus),
        fundsPerSecond: action.clip * state.clipPrice,
      };
    }
    case 'DECREASE_INVENTORY': {
      console.log('DECREASE_INVENTORY', state.unsoldInventory);
      if (state.unsoldInventory <= 0) return state;
      const unsoldInventoryDI = Math.max(0, Math.floor(state.unsoldInventory * (1 - state.publicDemand)));
      const fundsDI = state.funds + (state.unsoldInventory - unsoldInventoryDI) * state.clipPrice;

      return {
        ...state,
        unsoldInventory: unsoldInventoryDI,
        funds: fundsDI,
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
    case 'DECREASE_FUNDS':
      if (state.funds <= 0) return state;
      return {
        ...state,
        funds: Math.max(0, state.funds - action.cost),
      };
    case 'INVENTORY_BONUS':
      return {
        ...state,
        unsoldInventoryBonus: action.bonus,
      };
    default:
      return state;
  }
};
