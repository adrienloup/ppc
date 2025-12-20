import type { BusinessDispatchType, BusinessType } from '@/src/domains/business/application/business.type.ts';

export const businessReducer = (state: BusinessType, action: BusinessDispatchType): BusinessType => {
  switch (action.type) {
    case 'BUY_MARKETING':
      return {
        ...state,
        marketing: {
          ...state.marketing,
          cost: {
            ...state.marketing.cost,
            value: Math.min(state.marketing.cost.value * 2.5, 256e2),
          },
          quantity: Math.min(state.marketing.quantity + 1, 10),
        },
      };
    case 'INCREASE_SELLING_PRICE': {
      const priceHigher = Math.min(state.selling.ref + 0.01, 1);
      return {
        ...state,
        selling: {
          price: priceHigher * Math.max(1, state.marketing.bonus),
          ref: priceHigher,
        },
        publicDemand: {
          quantity: 0.1 / priceHigher,
        },
      };
    }
    case 'DECREASE_SELLING_PRICE': {
      const priceLower = Math.max(state.selling.ref - 0.01, 0.1);
      return {
        ...state,
        selling: {
          price: priceLower * Math.max(1, state.marketing.bonus),
          ref: priceLower,
        },
        publicDemand: {
          quantity: 0.1 / priceLower,
        },
      };
    }
    case 'INCREASE_FUNDS_QUANTITY': {
      return {
        ...state,
        funds: {
          quantity: state.funds.quantity + action.quantity * state.selling.price,
        },
      };
    }
    case 'DECREASE_FUNDS_QUANTITY': {
      return {
        ...state,
        funds: {
          quantity: Math.max(0, state.funds.quantity - action.quantity),
        },
      };
    }
    case 'INCREASE_INVENTORY_QUANTITY': {
      return {
        ...state,
        inventory: {
          ...state.inventory,
          quantity: state.inventory.quantity + action.quantity * Math.max(1, state.inventory.bonus),
        },
      };
    }
    case 'DECREASE_INVENTORY_QUANTITY': {
      return {
        ...state,
        inventory: {
          ...state.inventory,
          quantity: action.quantity,
        },
      };
    }
    case 'UPDATE_MARKETING_BONUS':
      return {
        ...state,
        marketing: {
          ...state.marketing,
          bonus: action.bonus,
        },
        selling: {
          ...state.selling,
          price: state.selling.price * Math.max(1, action.bonus),
        },
      };
    case 'UPDATE_INVENTORY_BONUS':
      return {
        ...state,
        inventory: {
          ...state.inventory,
          bonus: action.bonus,
        },
      };
    default:
      return state;
  }
};
