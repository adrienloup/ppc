import { type FC, useEffect, useReducer, useRef } from 'react';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { merchReducer } from '@/src/domains/merchandise/application/merch.reducer.ts';
import { MerchContext, MerchDisContext } from '@/src/domains/merchandise/infrastructure/merch.context.tsx';
import { MERCHANDISE_KEY } from '@/src/domains/merchandise/infrastructure/merch.key.ts';
import { MERCHANDISE_STATE } from '@/src/domains/merchandise/infrastructure/merch.state.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const MerchProvider: FC<{ children: Children }> = ({ children }) => {
  const merStorage = useLocalStorage(MERCHANDISE_KEY, MERCHANDISE_STATE);
  const [state, dispatch] = useReducer(merchReducer, merStorage.get());
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
    <MerchContext.Provider value={state}>
      <MerchDisContext.Provider value={dispatch}>{children}</MerchDisContext.Provider>
    </MerchContext.Provider>
  );
};
