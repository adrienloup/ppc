import type { CostType } from '@/src/shared/types/cost.type.ts';

export type SupplyType = {
  energy: {
    quantity: number;
  };
  matter: {
    quantity: number;
  };
  paperclip: {
    quantity: number;
  };
  wire: {
    cost: CostType;
    quantity: number;
  };
};

export type SupplyDispatchType =
  | { type: 'UPDATE_WIRE_COST' }
  | { type: 'INCREASE_ENERGY_QUANTITY'; quantity: number }
  | { type: 'DECREASE_ENERGY_QUANTITY'; quantity: number }
  | { type: 'INCREASE_MATTER_QUANTITY'; quantity: number }
  | { type: 'DECREASE_MATTER_QUANTITY'; quantity: number }
  | { type: 'INCREASE_PAPERCLIP_QUANTITY'; quantity: number }
  | { type: 'DECREASE_PAPERCLIP_QUANTITY'; quantity: number }
  | { type: 'INCREASE_WIRE_QUANTITY'; quantity: number }
  | { type: 'DECREASE_WIRE_QUANTITY'; quantity: number };
