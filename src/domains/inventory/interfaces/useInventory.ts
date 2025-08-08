import { useContext } from 'react';
import { InventoryContext } from '@/src/domains/inventory/infrastructure/inventory.context.tsx';

export const useInventory = () => {
  const ctx = useContext(InventoryContext);
  if (!ctx) throw new Error('useInventory must be inside InventoryProvider');
  return ctx;
};

// export const useInventoryDispatch = () => {
//   const ctx = useContext(InvDisContext);
//   if (!ctx) throw new Error('useInventoryDispatch must be inside InventoryProvider');
//   return ctx;
// };
