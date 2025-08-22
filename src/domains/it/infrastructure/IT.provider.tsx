import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { itReducer } from '@/src/domains/it/application/it.reducer.ts';
import { ITContext, ITDispatchContext } from '@/src/domains/it/infrastructure/IT.context.tsx';
import { IT_KEY } from '@/src/domains/it/infrastructure/IT.key.ts';
import { IT_STATE } from '@/src/domains/it/infrastructure/IT.state.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const ITProvider: FC<{ children: Children }> = ({ children }) => {
  const itStorage = useLocalStorage(IT_KEY, IT_STATE);
  const [state, dispatch] = useReducer(itReducer, itStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { pause } = useProfile();

  const autoIT = useCallback(() => {
    if (state.trust < 1 || state.gifts < 1) return;
    console.log('autoIT');
    dispatch({ type: 'INCREASE_OPERATION' });
    dispatch({ type: 'INCREASE_CREATIVITY' });
  }, []);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({
      type: 'LOAD',
      it: users[user].factory?.it ?? IT_STATE,
    });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    itStorage.set(state);
  }, [state]);

  useInterval(autoIT, 9e2, !!user && !pause);

  return (
    <ITContext.Provider value={state}>
      <ITDispatchContext.Provider value={dispatch}>{children}</ITDispatchContext.Provider>
    </ITContext.Provider>
  );
};
