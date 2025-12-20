import { type FC, useEffect, useReducer } from 'react';
import { SUPPLY_KEY } from '@/src/domains/supply/application/supply.key.ts';
import { supplyReducer } from '@/src/domains/supply/application/supply.reducer.ts';
import { SUPPLY_STATE } from '@/src/domains/supply/application/supply.state.ts';
import { SupplyContext, SupplyDispatchContext } from '@/src/domains/supply/interface/supply.context.tsx';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { ChildrenType } from '@/src/shared/types/children.type.ts';

export const SupplyProvider: FC<{ children: ChildrenType }> = ({ children }) => {
  const supplyStorage = useLocalStorage(SUPPLY_KEY, SUPPLY_STATE);
  const [state, dispatch] = useReducer(supplyReducer, supplyStorage.get());

  useEffect(() => {
    supplyStorage.set(state);
  }, [state]);

  return (
    <SupplyContext.Provider value={state}>
      <SupplyDispatchContext.Provider value={dispatch}>{children}</SupplyDispatchContext.Provider>
    </SupplyContext.Provider>
  );
};
