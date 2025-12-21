import type { BusinessType } from '@/src/domains/business/application/business.type.ts';

export const BUSINESS_STATE: BusinessType = {
  funds: {
    quantity: 0,
  },
  marketing: {
    bonus: 0,
    cost: { asset: 'funds', value: 100 },
    quantity: 0,
  },
  publicDemand: {
    quantity: 0.5,
  },
  selling: {
    price: 0.2,
    ref: 0.2,
  },
  inventory: {
    bonus: 2,
    quantity: 0,
  },
};
