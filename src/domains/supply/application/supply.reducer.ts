import type { SupplyDispatchType, SupplyType } from '@/src/domains/supply/application/supply.type.ts';

export const supplyReducer = (state: SupplyType, action: SupplyDispatchType): SupplyType => {
  switch (action.type) {
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
          quantity: state.wire.quantity + action.quantity,
        },
      };
    case 'DECREASE_WIRE_QUANTITY':
      return {
        ...state,
        wire: {
          quantity: Math.max(0, state.wire.quantity - action.quantity),
        },
      };
    default:
      return state;
  }
};
