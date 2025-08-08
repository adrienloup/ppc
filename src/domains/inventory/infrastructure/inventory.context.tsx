import { type Dispatch, createContext } from 'react';
import type { Inventory, InventoryDispatch } from '@/src/domains/inventory/domain/inventory.type.ts';

export const InventoryContext = createContext<Inventory | undefined>(undefined);
export const InventoryDisContext = createContext<Dispatch<InventoryDispatch> | undefined>(undefined);
