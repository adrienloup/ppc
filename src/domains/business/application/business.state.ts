import type { BusinessType } from '@/src/domains/business/application/business.type.ts';

export const BUSINESS_STATE: BusinessType = {
  funds: {
    quantity: 0,
  },
  marketing: {
    bonus: 1,
    cost: { asset: 'funds', value: 100 },
    quantity: 0,
  },
  publicDemand: {
    quantity: 0.5,
  },
  price: {
    quantity: 0.2,
  },
  inventory: {
    bonus: 1,
    quantity: 0,
  },
};
