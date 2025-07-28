import type { Resources, ResourcesDispatch } from '@/src/domains/resources/domain/resources.type.ts';

export const resourcesReducer = (state: Resources, action: ResourcesDispatch): Resources => {
  switch (action.type) {
    case 'LOAD':
      return action.resources;
    case 'DECREASE_WIRE':
      return {
        ...state,
        wire: Math.max(0, state.wire - 1),
      };
    case 'AUTO_DECREASE_WIRE':
      return {
        ...state,
        wire: Math.max(0, state.wire - action.wire),
      };
    case 'WIRE_COST':
      return {
        ...state,
        wireCost: state.wireCost > 8 ? state.wireCost - 0.26 : Math.random() * 8 + 12,
      };
    case 'WIRE_QUANTITY':
      return {
        ...state,
        wireQuantity: action.quantity,
      };
    case 'BUY_WIRE':
      return {
        ...state,
        wire: state.wire + state.wireQuantity,
        wireCost: action.cost,
      };
    default:
      return state;
  }
};
