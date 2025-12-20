import type { SupplyType } from '@/src/domains/supply/application/supply.type.ts';

export const SUPPLY_STATE: SupplyType = {
  energy: {
    quantity: 0,
  },
  matter: {
    quantity: 0,
  },
  paperclip: {
    quantity: 0,
  },
  wire: {
    cost: { asset: 'funds', value: 20 },
    quantity: 1e2,
  },
};
