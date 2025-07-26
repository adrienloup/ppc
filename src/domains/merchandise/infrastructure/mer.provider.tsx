import { type FC, useEffect, useReducer, useRef } from 'react';
import { MerContext, MerDisContext } from '@/src/domains/merchandise/infrastructure/mer.context.tsx';
import { merReducer } from '@/src/domains/merchandise/application/mer.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { MERCHANDISE_KEY } from '@/src/domains/merchandise/infrastructure/mer.key.ts';
import { MERCHANDISE_STATE } from '@/src/domains/merchandise/infrastructure/mer.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const MerProvider: FC<{ children: Children }> = ({ children }) => {
  const merStorage = useLocalStorage(MERCHANDISE_KEY, MERCHANDISE_STATE);
  const [state, dispatch] = useReducer(merReducer, merStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({
      type: 'LOAD',
      merchandise: users[user].factory?.merchandise ?? MERCHANDISE_STATE,
    });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    merStorage.set(state);
  }, [state]);

  return (
    <MerContext.Provider value={state}>
      <MerDisContext.Provider value={dispatch}>{children}</MerDisContext.Provider>
    </MerContext.Provider>
  );
};
