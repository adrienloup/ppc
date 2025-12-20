import type { SupplyDispatchType, SupplyType } from '@/src/domains/supply/application/supply.type.ts';

export const supplyReducer = (state: SupplyType, action: SupplyDispatchType): SupplyType => {
  switch (action.type) {
    case 'UPDATE_WIRE_COST':
      return {
        ...state,
        wire: {
          ...state.wire,
          cost: {
            ...state.wire.cost,
            value: state.wire.cost.value > 8 ? state.wire.cost.value - 0.2 : Math.random() * 10 + 10, // 0|1 0|10 10|20
          },
        },
      };
    case 'INCREASE_ENERGY_QUANTITY':
      return {
        ...state,
        energy: {
          quantity: state.energy.quantity + action.quantity,
        },
      };
    case 'DECREASE_ENERGY_QUANTITY':
      return {
        ...state,
        energy: {
          quantity: state.energy.quantity - action.quantity,
        },
      };
    case 'INCREASE_MATTER_QUANTITY':
      return {
        ...state,
        matter: {
          quantity: state.matter.quantity + action.quantity,
        },
      };
    case 'DECREASE_MATTER_QUANTITY':
      return {
        ...state,
        matter: {
          quantity: state.matter.quantity - action.quantity,
        },
      };
    case 'INCREASE_PAPERCLIP_QUANTITY':
      return {
        ...state,
        paperclip: {
          quantity: state.paperclip.quantity + action.quantity,
        },
      };
    case 'DECREASE_PAPERCLIP_QUANTITY':
      return {
        ...state,
        paperclip: {
          quantity: state.paperclip.quantity - action.quantity,
        },
      };
    case 'INCREASE_WIRE_QUANTITY':
      return {
        ...state,
        wire: {
          ...state.wire,
          quantity: state.wire.quantity + action.quantity,
        },
      };
    case 'DECREASE_WIRE_QUANTITY':
      return {
        ...state,
        wire: {
          ...state.wire,
          quantity: Math.max(0, state.wire.quantity - action.quantity),
        },
      };
    default:
      return state;
  }
};
