export interface Sale {
  clipPrice: number;
  clipPriceRef: number;
  funds: number;
  fundsPerSecond: number;
  marketingBonus: number;
  publicDemand: number;
  unsoldInventory: number;
  unsoldInventoryBonus: number;
}

export type SaleDispatch =
  | { type: 'LOAD'; sale: Sale }
  | { type: 'INCREASE_INVENTORY' }
  | { type: 'AUTO_INCREASE_INVENTORY'; clip: number }
  | { type: 'DECREASE_INVENTORY' }
  | { type: 'INCREASE_CLIP_PRICE' }
  | { type: 'DECREASE_CLIP_PRICE' }
  | { type: 'DECREASE_FUNDS'; cost: number }
  | { type: 'INVENTORY_BONUS'; bonus: number };
