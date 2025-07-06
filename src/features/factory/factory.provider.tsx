import { type FC, useCallback, useEffect, useMemo, useReducer } from 'react';
import { useAuth } from '@/src/features/authentification/useAuth.ts';
import { useAccount } from '@/src/features/account/useAccount.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { FactoryContext, FactoryDispatchContext } from '@/src/features/factory/factory.context.ts';
import { factoryReducer } from '@/src/features/factory/reducers/factory.reducer.ts';
import { FACTORY_KEY } from '@/src/features/factory/factory.key.ts';
import { FACTORY_STATE } from '@/src/features/factory/factory.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const FactoryProvider: FC<{ children: Children }> = ({ children }) => {
  const { user } = useAuth();
  const { pause } = useAccount();

  const account = useMemo(() => {
    return user ? `${FACTORY_KEY}::${user}` : null;
  }, [user]);

  const [state, dispatch] = useReducer(factoryReducer, FACTORY_STATE, () => {
    if (!account) return FACTORY_STATE;
    const stored = localStorage.getItem(account);
    return stored ? JSON.parse(stored) : FACTORY_STATE;
  });

  useEffect(() => {
    if (!account) return;
    const stored = localStorage.getItem(account);
    dispatch({ type: 'INITIALIZE', state: stored ? JSON.parse(stored) : FACTORY_STATE });
  }, [account]);

  useEffect(() => {
    if (!account) return;
    localStorage.setItem(account, JSON.stringify(state));
  }, [state, account]);

  const productionPerSecond = useCallback(() => {
    dispatch({ type: 'PRODUCTION_PER_SECOND' });
  }, []);

  useInterval(productionPerSecond, 8e2, !!user && !pause);

  return (
    <FactoryContext.Provider value={state}>
      <FactoryDispatchContext.Provider value={dispatch}>{children}</FactoryDispatchContext.Provider>
    </FactoryContext.Provider>
  );
};
