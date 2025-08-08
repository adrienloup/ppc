import { type FC, useEffect, useReducer, useRef } from 'react';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { fundsReducer } from '@/src/domains/funds/application/funds.reducer.ts';
import { FundsContext, FundsDispatchContext } from '@/src/domains/funds/infrastructure/funds.context.tsx';
import { FUNDS_KEY } from '@/src/domains/funds/infrastructure/funds.key.ts';
import { FUNDS_STATE } from '@/src/domains/funds/infrastructure/funds.state.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const FundsProvider: FC<{ children: Children }> = ({ children }) => {
  const fundsStorage = useLocalStorage(FUNDS_KEY, FUNDS_STATE);
  const [state, dispatch] = useReducer(fundsReducer, fundsStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({ type: 'LOAD', funds: users[user].factory?.funds ?? FUNDS_STATE });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    fundsStorage.set(state);
  }, [state]);

  return (
    <FundsContext.Provider value={state}>
      <FundsDispatchContext.Provider value={dispatch}>{children}</FundsDispatchContext.Provider>
    </FundsContext.Provider>
  );
};
