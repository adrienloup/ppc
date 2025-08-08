import type { Inventory, InventoryDispatch } from '@/src/domains/inventory/domain/inventory.type.ts';

export const inventoryReducer = (state: Inventory, action: InventoryDispatch): Inventory => {
  switch (action.type) {
    case 'LOAD':
      return action.inventory;
    case 'INCREASE_INVENTORY': {
      const unsoldInventoryII = (state.unsoldInventory + 1) * Math.max(1, state.unsoldInventoryBonus);
      return {
        ...state,
        unsoldInventory: unsoldInventoryII,
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
