import { type FC, useEffect, useReducer, useRef } from 'react';
import { CommerceContext, CommerceDisContext } from '@/src/domains/commerce/infrastructure/com.context.tsx';
import { commerceReducer } from '@/src/domains/commerce/application/com.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { COMMERCE_KEY } from '@/src/domains/commerce/infrastructure/com.key.ts';
import { COMMERCE_STATE } from '@/src/domains/commerce/infrastructure/com.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const CommerceProvider: FC<{ children: Children }> = ({ children }) => {
  const commerceStorage = useLocalStorage(COMMERCE_KEY, COMMERCE_STATE);
  const [state, dispatch] = useReducer(commerceReducer, commerceStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);

  useEffect(() => {
    if (!user) return;
    if (user === userRef.current) return;
    dispatch({ type: 'LOAD', commerce: users[user].factory?.commerce ?? COMMERCE_STATE });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    commerceStorage.set(state);
  }, [state]);

  return (
    <CommerceContext.Provider value={state}>
      <CommerceDisContext.Provider value={dispatch}>{children}</CommerceDisContext.Provider>
    </CommerceContext.Provider>
  );
};
