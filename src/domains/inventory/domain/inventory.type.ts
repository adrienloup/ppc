export interface Inventory {
  unsoldInventory: number;
  unsoldInventoryBonus: number;
}

export type InventoryDispatch =
  | { type: 'LOAD'; inventory: Inventory }
  | { type: 'INCREASE_INVENTORY'; unsoldInventory: number }
  | { type: 'DECREASE_INVENTORY'; unsoldInventory: number }
  | { type: 'INVENTORY_BONUS'; bonus: number };
