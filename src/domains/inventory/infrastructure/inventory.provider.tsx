import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { InventoryContext, InventoryDisContext } from '@/src/domains/inventory/infrastructure/inventory.context.tsx';
import { inventoryReducer } from '@/src/domains/inventory/application/inventory.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useBusiDispatch, useBusiness } from '@/src/domains/business/interfaces/useBusiness.ts';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { INVENTORY_KEY } from '@/src/domains/inventory/infrastructure/inventory.key.ts';
import { INVENTORY_STATE } from '@/src/domains/inventory/infrastructure/inventory.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const InventoryProvider: FC<{ children: Children }> = ({ children }) => {
  const inventoryStorage = useLocalStorage(INVENTORY_KEY, INVENTORY_STATE);
  const [state, dispatch] = useReducer(inventoryReducer, inventoryStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { pause } = useProfile();
  const businessDispatch = useBusiDispatch();
  const { publicDemand } = useBusiness();

  const update = useCallback(() => {
    if (state.unsoldInventory < 1) return;

    const unsoldInventory = Math.max(0, Math.floor(state.unsoldInventory * (1 - publicDemand)));
    const funds = state.unsoldInventory - unsoldInventory;

    dispatch({ type: 'DECREASE_INVENTORY', unsoldInventory });
    businessDispatch({ type: 'INCREASE_FUNDS', funds });
  }, [state, publicDemand]);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({
      type: 'LOAD',
      inventory: users[user].factory?.inventory ?? INVENTORY_STATE,
    });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    inventoryStorage.set(state);
  }, [state]);

  useInterval(update, 5e2, !!user && !pause);

  return (
    <InventoryContext.Provider value={state}>
      <InventoryDisContext.Provider value={dispatch}>{children}</InventoryDisContext.Provider>
    </InventoryContext.Provider>
  );
};
