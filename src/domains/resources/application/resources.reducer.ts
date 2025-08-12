import type { Resources, ResourcesDispatch } from '@/src/domains/resources/domain/resources.type.ts';

export const resourcesReducer = (state: Resources, action: ResourcesDispatch): Resources => {
  switch (action.type) {
    case 'LOAD':
      return action.resources;
    case 'WIRE': {
      const wireBW = state.wire + state.wireQuantity;
      return {
        ...state,
        wire: wireBW,
        wireCost: action.cost,
      };
    }
    case 'DECREASE_WIRE': {
      if (state.wire < 1) return state;
      const wireDW = Math.max(0, state.wire - action.wire);
      return {
        ...state,
        wire: wireDW,
      };
    }
    case 'WIRE_QUANTITY':
      return {
        ...state,
        wireQuantity: action.quantity,
      };
    case 'WIRE_COST': {
      const wireCostWC = state.wireCost > 8 ? state.wireCost - 0.26 : Math.random() * 8 + 12;
      return {
        ...state,
        wireCost: wireCostWC,
      };
    }
    default:
      return state;
  }
};
