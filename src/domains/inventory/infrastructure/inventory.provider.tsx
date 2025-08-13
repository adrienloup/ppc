import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { useBusiness } from '@/src/domains/business/interfaces/useBusiness.ts';
import { useFundsDispatch } from '@/src/domains/funds/interfaces/useFunds.ts';
import { inventoryReducer } from '@/src/domains/inventory/application/inventory.reducer.ts';
import { InventoryContext, InventoryDisContext } from '@/src/domains/inventory/infrastructure/inventory.context.tsx';
import { INVENTORY_KEY } from '@/src/domains/inventory/infrastructure/inventory.key.ts';
import { INVENTORY_STATE } from '@/src/domains/inventory/infrastructure/inventory.state.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const InventoryProvider: FC<{ children: Children }> = ({ children }) => {
  const inventoryStorage = useLocalStorage(INVENTORY_KEY, INVENTORY_STATE);
  const [state, dispatch] = useReducer(inventoryReducer, inventoryStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { pause } = useProfile();
  const fundsDispatch = useFundsDispatch();
  const { clipPrice, publicDemand } = useBusiness();

  const autoInventory = useCallback(() => {
    if (state.unsoldInventory < 1) return;
    // console.log('autoInventory: updated every 0.5 second');
    const unsoldInventory = Math.max(0, Math.floor(state.unsoldInventory * (1 - publicDemand)));
    const funds = (state.unsoldInventory - unsoldInventory) * clipPrice;
    const fundsPerSecond = state.unsoldInventory * clipPrice;

    dispatch({ type: 'DECREASE_INVENTORY', unsoldInventory });
    fundsDispatch({ type: 'INCREASE_FUNDS', funds, fundsPerSecond });
  }, [state, clipPrice, publicDemand]);

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

  useInterval(autoInventory, 4e2, !!user && !pause);

  return (
    <InventoryContext.Provider value={state}>
      <InventoryDisContext.Provider value={dispatch}>{children}</InventoryDisContext.Provider>
    </InventoryContext.Provider>
  );
};
