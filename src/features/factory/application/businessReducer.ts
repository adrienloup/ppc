import type { Factory, FactoryDispatch } from '@/src/features/factory/domain/Factory.ts';

export const businessReducer = (state: Factory, action: FactoryDispatch): Factory => {
  switch (action.type) {
    case 'SELL_UNSOLD_INVENTORY': {
      // console.log('SELL_UNSOLD_INVENTORY');
      if (state.unsoldInventory <= 0) return state;
      const sellUnsoldInventory = Math.max(
        0,
        Math.floor(state.unsoldInventory * (1 - state.publicDemand))
      );
      const sellFunds =
        state.funds + (state.unsoldInventory - sellUnsoldInventory) * state.clipPrice;
      return {
        ...state,
        unsoldInventory: sellUnsoldInventory,
        funds: sellFunds,
      };
    }
    case 'UPDATE_UNSOLD_INVENTORY_BONUS':
      return {
        ...state,
        unsoldInventoryBonus: action.bonus,
      };
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
    case 'INCREASE_CASH':
      return state.funds >= 100
        ? {
            ...state,
            cash: state.cash + 100,
            cashRef: state.cash + 100,
            funds: Math.max(0, state.funds - 100),
          }
        : state;
    case 'DECREASE_CASH':
      return state.cash >= 100
        ? { ...state, cash: state.cash - 100, funds: state.funds + 100 }
        : state;
    case 'WITHDRAW_CASH':
      return state.cash >= 0 ? { ...state, cash: 0, funds: state.funds + state.cash } : state;
    case 'INCREASE_WALLET':
      if (state.cash <= action.price) return state;
      return {
        ...state,
        wallet: {
          ...state.wallet,
          [action.symbol]: { quantity: state.wallet[action.symbol].quantity + 0.1 },
        },
        cash: Math.max(0, state.cash - action.price),
      };
    case 'DECREASE_WALLET':
      return {
        ...state,
        wallet: {
          ...state.wallet,
          [action.symbol]: { quantity: Math.max(0, state.wallet[action.symbol].quantity - 0.1) },
        },
        cash: state.cash + action.price,
      };
    default:
      return state;
  }
};
