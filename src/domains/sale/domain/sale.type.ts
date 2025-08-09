export interface Sale {
  unsoldInventory: number;
  unsoldInventoryBonus: number;
}

export type SaleDispatch =
  | { type: 'LOAD'; sale: Sale }
  | { type: 'INCREASE_INVENTORY' }
  // | { type: 'INCREASE_INVENTORY'; clip: number }
  | { type: 'DECREASE_INVENTORY'; unsoldInventory: number }
  | { type: 'INVENTORY_BONUS'; bonus: number };
