import type { FactoryAction, FactoryState } from '@/src/features/factory/factory.type.ts';

export const resourcesReducer = (state: FactoryState, action: FactoryAction): FactoryState => {
  switch (action.type) {
    case 'UPDATE_WIRE_COST': {
      return {
        ...state,
        wireCost: action.cost,
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
    default:
      return state;
  }
};
