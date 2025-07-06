import type { FactoryAction, FactoryState } from '@/src/features/factory/factory.type.ts';

export const resourcesReducer = (state: FactoryState, action: FactoryAction): FactoryState => {
  switch (action.type) {
    case 'UPDATE_WIRE_COST': {
      return {
        ...state,
        wireCost: action.cost,
      };
    }
    case 'UPDATE_WIRE_QUANTITY': {
      return {
        ...state,
        wireQuantity: action.quantity,
      };
    }
    case 'BUY_WIRE': {
      if (state.funds < action.cost) return state;

      return {
        ...state,
        wire: state.wire + state.wireQuantity,
        wireCost: action.cost,
        funds: Math.max(0, state.funds - action.cost),
      };
    }
    case 'BUY_MARKETING': {
      if (state.funds < state.marketingCost) return state;

      return {
        ...state,
        marketing: Math.max(1, Math.min(state.marketing + 1, 10)),
        marketingCost: Math.max(100, Math.min(state.marketingCost * 2.5, 25600)),
        funds: Math.max(0, state.funds - state.marketingCost),
      };
    }
    case 'BUY_CLIPPER': {
      if (state.funds < state.clipperCost) return state;

      const fundsBC = Math.max(0, state.funds - action.cost);

      return {
        ...state,
        clipper: state.clipper + 1,
        clipperCost: action.cost,
        funds: fundsBC,
      };
    }
    default:
      return state;
  }
};
