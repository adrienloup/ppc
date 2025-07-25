import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { IntelContext, IntelDisContext } from '@/src/domains/intelligence/infrastructure/intel.context.tsx';
import { intelReducer } from '@/src/domains/intelligence/application/intel.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { useSetti } from '@/src/domains/settings/interfaces/useSetti.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { INTELLIGENCE_KEY } from '@/src/domains/intelligence/infrastructure/intel.key.ts';
import { INTELLIGENCE_STATE } from '@/src/domains/intelligence/infrastructure/intel.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const IntelligenceProvider: FC<{ children: Children }> = ({ children }) => {
  const intelStorage = useLocalStorage(INTELLIGENCE_KEY, INTELLIGENCE_STATE);
  const [state, dispatch] = useReducer(intelReducer, intelStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { pause } = useSetti();

  const autoOperation = useCallback(() => {
    dispatch({ type: 'INCREASE_OPERATION' });
  }, []);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({
      type: 'LOAD',
      intelligence: users[user].factory?.intelligence ?? INTELLIGENCE_STATE,
    });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    intelStorage.set(state);
  }, [state]);

  useInterval(autoOperation, 9e2, !!user && !pause);

  return (
    <IntelContext.Provider value={state}>
      <IntelDisContext.Provider value={dispatch}>{children}</IntelDisContext.Provider>
    </IntelContext.Provider>
  );
};
