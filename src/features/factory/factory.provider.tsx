import { type FC, useCallback, useEffect, useMemo, useReducer } from 'react';
import { useAuth } from '@/src/features/authentification/useAuth.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { FactoryContext, FactoryDispatchContext } from '@/src/features/factory/factory.context.ts';
import { factoryReducer } from '@/src/features/factory/reducers/factory.reducer.ts';
import { FACTORY_KEY } from '@/src/features/factory/factory.key.ts';
import { FACTORY_STATE } from '@/src/features/factory/factory.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const FactoryProvider: FC<{ children: Children }> = ({ children }) => {
  const { state: auth } = useAuth();

  const user = useMemo(() => {
    return auth.user ? `${FACTORY_KEY}::${auth.user}` : null;
  }, [auth.user]);

  const enabled = !!auth.user;
  console.log('active', enabled);

  const [state, dispatch] = useReducer(factoryReducer, FACTORY_STATE, () => {
    if (!user) return FACTORY_STATE;
    const stored = localStorage.getItem(user);
    return stored ? JSON.parse(stored) : FACTORY_STATE;
  });

  useEffect(() => {
    if (!user) return;
    const stored = localStorage.getItem(user);
    dispatch({ type: 'INITIALIZE', state: stored ? JSON.parse(stored) : FACTORY_STATE });
  }, [user]);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem(user, JSON.stringify(state));
  }, [state, user]);

  const productionPerSecond = useCallback(() => {
    dispatch({ type: 'PRODUCTION_PER_SECOND' });
  }, []);

  useInterval(productionPerSecond, 8e2, enabled);

  return (
    <FactoryContext.Provider value={state}>
      <FactoryDispatchContext.Provider value={dispatch}>{children}</FactoryDispatchContext.Provider>
    </FactoryContext.Provider>
  );
};
