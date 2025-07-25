import { type FC, useEffect, useReducer, useRef } from 'react';
import { IntContext, IntDisContext } from '@/src/domains/intellect/infrastructure/int.context.tsx';
import { intReducer } from '@/src/domains/intellect/application/int.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { INTELLECT_KEY } from '@/src/domains/intellect/infrastructure/int.key.ts';
import { INTELLECT_STATE } from '@/src/domains/intellect/infrastructure/int.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const IntellectProvider: FC<{ children: Children }> = ({ children }) => {
  const intStorage = useLocalStorage(INTELLECT_KEY, INTELLECT_STATE);
  const [state, dispatch] = useReducer(intReducer, intStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);

  useEffect(() => {
    if (!user || user == userRef.current) return;
    dispatch({ type: 'LOAD', intellect: users[user].factory?.intellect ?? INTELLECT_STATE });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    intStorage.set(state);
  }, [state]);

  return (
    <IntContext.Provider value={state}>
      <IntDisContext.Provider value={dispatch}>{children}</IntDisContext.Provider>
    </IntContext.Provider>
  );
};
