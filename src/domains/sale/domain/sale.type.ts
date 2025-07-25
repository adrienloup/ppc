export interface Sale {
  funds: number;
  fundsPerSecond: number;
  unsoldInventory: number;
  unsoldInventoryBonus: number;
}

export type SaleDispatch =
  | { type: 'LOAD'; sale: Sale }
  | { type: 'INCREASE_INVENTORY'; clip: number }
  | { type: 'DECREASE_INVENTORY' }
  | { type: 'DECREASE_FUNDS'; cost: number };
