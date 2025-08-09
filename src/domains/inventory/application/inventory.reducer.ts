import type { Inventory, InventoryDispatch } from '@/src/domains/inventory/domain/inventory.type.ts';

export const inventoryReducer = (state: Inventory, action: InventoryDispatch): Inventory => {
  switch (action.type) {
    case 'LOAD':
      return action.inventory;
    case 'INCREASE_INVENTORY': {
      const unsoldInventoryAII =
        state.unsoldInventory + action.unsoldInventory * Math.max(1, state.unsoldInventoryBonus);
      return {
        ...state,
        unsoldInventory: unsoldInventoryAII,
      };
    }
    case 'DECREASE_INVENTORY': {
      return {
        ...state,
        unsoldInventory: action.unsoldInventory,
      };
    }
    case 'INVENTORY_BONUS':
      return {
        ...state,
        unsoldInventoryBonus: action.unsoldInventoryBonus,
      };
    default:
      return state;
  }
};
