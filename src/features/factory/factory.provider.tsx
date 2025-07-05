import { type FC, useEffect, useMemo, useReducer } from 'react';
import { useAuth } from '@/src/features/authentification/useAuth.ts';
import { FactoryContext, FactoryDispatchContext } from '@/src/features/factory/factory.context.ts';
import { factoryReducer } from '@/src/features/factory/factory.reducer.ts';
import { FACTORY_KEY } from '@/src/features/factory/factory.key.ts';
import { FACTORY_STATE } from '@/src/features/factory/factory.state.ts';
import type { ChildrenType } from '@/src/shared/types/children.type.ts';

export const FactoryProvider: FC<{ children: ChildrenType }> = ({ children }) => {
  const { state: auth } = useAuth();

  const account = useMemo(() => {
    return auth.account ? `${FACTORY_KEY}::${auth.account}` : null;
  }, [auth.account]);

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

  return (
    <FactoryContext.Provider value={state}>
      <FactoryDispatchContext.Provider value={dispatch}>{children}</FactoryDispatchContext.Provider>
    </FactoryContext.Provider>
  );
};
