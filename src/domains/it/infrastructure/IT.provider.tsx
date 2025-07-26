import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { ITContext, ITDispatchContext } from '@/src/domains/it/infrastructure/IT.context.tsx';
import { itReducer } from '@/src/domains/it/application/it.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { IT_KEY } from '@/src/domains/it/infrastructure/IT.key.ts';
import { IT_STATE } from '@/src/domains/it/infrastructure/IT.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const ITProvider: FC<{ children: Children }> = ({ children }) => {
  const itStorage = useLocalStorage(IT_KEY, IT_STATE);
  const [state, dispatch] = useReducer(itReducer, itStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { pause } = useProfile();

  const auto = useCallback(() => {
    dispatch({ type: 'INCREASE_OPERATION' });
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

  useInterval(auto, 9e2, !!user && !pause);

  return (
    <ITContext.Provider value={state}>
      <ITDispatchContext.Provider value={dispatch}>{children}</ITDispatchContext.Provider>
    </ITContext.Provider>
  );
};
