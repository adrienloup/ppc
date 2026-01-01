import type { CostType } from '@/src/shared/types/cost.type.ts';

export interface BusinessType {
  funds: {
    quantity: number;
  };
  marketing: {
    bonus: number;
    cost: CostType;
    quantity: number;
  };
  publicDemand: {
    quantity: number;
  };
  price: {
    quantity: number;
  };
  inventory: {
    bonus: number;
    quantity: number;
  };
}

export type BusinessDispatchType =
  | { type: 'BUY_MARKETING' }
  | { type: 'INCREASE_SELLING_PRICE' }
  | { type: 'DECREASE_SELLING_PRICE' }
  | { type: 'INCREASE_FUNDS_QUANTITY'; quantity: number }
  | { type: 'DECREASE_FUNDS_QUANTITY'; quantity: number }
  | { type: 'INCREASE_INVENTORY_QUANTITY'; quantity: number }
  | { type: 'DECREASE_INVENTORY_QUANTITY'; quantity: number }
  | { type: 'UPDATE_MARKETING_BONUS'; bonus: number }
  | { type: 'UPDATE_INVENTORY_BONUS'; bonus: number };
