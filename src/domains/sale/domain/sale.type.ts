export type SaleState = {
  clipPrice: number;
  clipPriceRef: number;
  funds: number;
  fundsPerSecond: number;
  marketingBonus: number;
  publicDemand: number;
  unsoldInventory: number;
  unsoldInventoryBonus: number;
};

export type SaleAction =
  | { type: 'UNSOLD_INVENTORY' }
  | { type: 'AUTO_UNSOLD_INVENTORY'; clip: number }
  | { type: 'SELL_UNSOLD_INVENTORY' }
  | { type: 'INCREASE_CLIP_PRICE' }
  | { type: 'DECREASE_CLIP_PRICE' };
