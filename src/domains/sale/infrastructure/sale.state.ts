import type { SaleState } from '@/src/domains/sale/domain/sale.type.ts';

export const SALE_STATE: SaleState = {
  clipPrice: 0.2,
  clipPriceRef: 0.2,
  funds: 0,
  fundsPerSecond: 0,
  marketingBonus: 0,
  publicDemand: 0.5,
  unsoldInventory: 0,
  unsoldInventoryBonus: 0,
};
