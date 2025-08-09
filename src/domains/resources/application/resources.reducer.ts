import type { Resources, ResourcesDispatch } from '@/src/domains/resources/domain/resources.type.ts';

export const resourcesReducer = (state: Resources, action: ResourcesDispatch): Resources => {
  switch (action.type) {
    case 'LOAD':
      return action.resources;
    case 'BUY_WIRE': {
      const wireBW = state.wire + state.wireQuantity;
      return {
        ...state,
        wire: wireBW,
        wireCost: action.cost,
      };
    }
    case 'DECREASE_WIRE': {
      const wireDW = Math.max(0, state.wire - action.wire);
      return {
        ...state,
        wire: wireDW,
      };
    }
    case 'WIRE_COST': {
      const wireCostWC = state.wireCost > 8 ? state.wireCost - 0.26 : Math.random() * 8 + 12;
      return {
        ...state,
        wireCost: wireCostWC,
      };
    }
    case 'WIRE_QUANTITY':
      return {
        ...state,
        wireQuantity: action.quantity,
      };
    default:
      return state;
  }
};
