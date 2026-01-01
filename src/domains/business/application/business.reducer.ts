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
      const raise = Math.round(Math.min(state.price.quantity + 0.1, 1) * 100) / 100;
      return {
        ...state,
        price: {
          quantity: raise,
        },
        publicDemand: {
          quantity: 0.1 / raise,
        },
      };
    }
    case 'DECREASE_SELLING_PRICE': {
      const lower = Math.round(Math.max(state.price.quantity - 0.1, 0.1) * 100) / 100;
      return {
        ...state,
        price: {
          quantity: lower,
        },
        publicDemand: {
          quantity: 0.1 / lower,
        },
      };
    }
    case 'INCREASE_FUNDS_QUANTITY': {
      return {
        ...state,
        funds: {
          quantity: state.funds.quantity + action.quantity * (state.price.quantity * state.marketing.bonus),
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
          quantity: state.inventory.quantity + action.quantity * state.inventory.bonus,
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
        // selling: {
        //   ...state.selling,
        //   price: state.price.quantity * action.bonus,
        // },
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
