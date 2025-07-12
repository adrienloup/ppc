import { type FC, useEffect, useReducer } from 'react';
import {
  AccountContext,
  AccountDispatchContext,
} from '@/src/domains/account/infrastructure/account.context.ts';
import { accountReducer } from '@/src/domains/account/application/account.reducer.ts';
import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { ACCOUNT_KEY } from '@/src/domains/account/infrastructure/account.key.ts';
import { ACCOUNT_STATE } from '@/src/domains/account/interfaces/account.state.ts';
import type { AccountState } from '@/src/domains/account/domain/account.type.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const AccountProvider: FC<{ children: Children }> = ({ children }) => {
  const accountStorage = useLocalStorage<AccountState>(ACCOUNT_KEY, ACCOUNT_STATE);
  const [state, dispatch] = useReducer(accountReducer, accountStorage.get());
  const { user } = useAuth();

  useEffect(() => {
    if (user === null) return;
    const state = accountStorage.get();
    dispatch({ type: 'INITIALIZE', state });
  }, [user]);

  useEffect(() => {
    if (user === null) return;
    accountStorage.set(state);
  }, [state]);

  return (
    <AccountContext.Provider value={state}>
      <AccountDispatchContext.Provider value={dispatch}>{children}</AccountDispatchContext.Provider>
    </AccountContext.Provider>
  );
};
