import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import {
  FactoryContext,
  FactoryDispatchContext,
} from '@/src/domains/factory/infrastructure/factory.context.ts';
import { factoryReducer } from '@/src/domains/factory/application/factory.reducer.ts';
import { useAuth } from '@/src/domains/authentification//interfaces/useAuth.ts';
import { useAccount } from '@/src/domains/account/interfaces/useAccount.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { FACTORY_KEY } from '@/src/domains/factory/infrastructure/factory.key.ts';
import { FACTORY_STATE } from '@/src/domains/factory/interfaces/factory.state.ts';
import type { FactoryState } from '@/src/domains/factory/domain/factoryState.type.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const FactoryProvider: FC<{ children: Children }> = ({ children }) => {
  const firstRender = useRef(true);
  const factoryStorage = useLocalStorage<FactoryState>(FACTORY_KEY, FACTORY_STATE);
  const [state, dispatch] = useReducer(factoryReducer, factoryStorage.get());
  const { user } = useAuth();
  const { play } = useAccount();

  useEffect(() => {
    if (user === null) return;
    const state = factoryStorage.get();
    dispatch({ type: 'INITIALIZE', state });
  }, [user]);

  useEffect(() => {
    if (user === null || firstRender.current) {
      firstRender.current = false;
      return;
    }
    factoryStorage.set(state);
  }, [state]);

  const sellUnsoldInventory = useCallback(() => {
    dispatch({ type: 'SELL_UNSOLD_INVENTORY' });
  }, []);

  const productionPerSecond = useCallback(() => {
    dispatch({ type: 'PRODUCTION_PER_SECOND' });
  }, []);

  useInterval(sellUnsoldInventory, 5e2, !!user && play); // @TODO
  useInterval(productionPerSecond, 8e2, !!user && play);

  return (
    <FactoryContext.Provider value={state}>
      <FactoryDispatchContext.Provider value={dispatch}>{children}</FactoryDispatchContext.Provider>
    </FactoryContext.Provider>
  );
};
