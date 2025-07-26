import { type FC, useEffect, useReducer, useRef } from 'react';
import { BusiContext, BusiDisContext } from '@/src/domains/business/infrastructure/business.context.tsx';
import { businessReducer } from '@/src/domains/business/application/business.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { BUSINESS_KEY } from '@/src/domains/business/infrastructure/business.key.ts';
import { BUSINESS_STATE } from '@/src/domains/business/infrastructure/business.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const BusinessProvider: FC<{ children: Children }> = ({ children }) => {
  const businessStorage = useLocalStorage(BUSINESS_KEY, BUSINESS_STATE);
  const [state, dispatch] = useReducer(businessReducer, businessStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);

  useEffect(() => {
    if (!user) return;
    if (user === userRef.current) return;
    dispatch({ type: 'LOAD', business: users[user].factory?.business ?? BUSINESS_STATE });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    businessStorage.set(state);
  }, [state]);

  return (
    <BusiContext.Provider value={state}>
      <BusiDisContext.Provider value={dispatch}>{children}</BusiDisContext.Provider>
    </BusiContext.Provider>
  );
};
