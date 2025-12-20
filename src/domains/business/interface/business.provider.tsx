import { type FC, useEffect, useReducer } from 'react';
import { BUSINESS_KEY } from '@/src/domains/business/application/business.key.ts';
import { businessReducer } from '@/src/domains/business/application/business.reducer.ts';
import { BUSINESS_STATE } from '@/src/domains/business/application/business.state.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { ChildrenType } from '@/src/shared/types/children.type.ts';
import { BusinessContext, BusinessDispatchContext } from './business.context';

export const BusinessProvider: FC<{ children: ChildrenType }> = ({ children }) => {
  const businessStorage = useLocalStorage(BUSINESS_KEY, BUSINESS_STATE);
  const [state, dispatch] = useReducer(businessReducer, businessStorage.get());

  useEffect(() => {
    businessStorage.set(state);
  }, [state]);

  return (
    <BusinessContext.Provider value={state}>
      <BusinessDispatchContext.Provider value={dispatch}>{children}</BusinessDispatchContext.Provider>
    </BusinessContext.Provider>
  );
};
