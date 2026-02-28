import { useEffect, useReducer } from 'react';
import { AccountContext, AccountDispatchContext } from '@/src/context/account/AccountContext.ts';
import { accountReducer } from '@/src/context/account/accountReducer.ts';
import { accountState } from '@/src/context/account/state/accountState.ts';
import type { AccountType } from '@/src/context/account/type/Account.ts';
import { useLocalStorage } from '@/src/shared/hook/useLocalStorage.ts';
import type { ChildrenType } from '@/src/shared/type/Children.ts';

export function AccountProvider({ children }: { children: ChildrenType }) {
  const storage = useLocalStorage<AccountType>('_account_ppc03_1', accountState);
  const [state, dispatch] = useReducer(accountReducer, storage.get());

  useEffect(() => {
    storage.set(state);
  }, [state]);

  return (
    <AccountContext.Provider value={state}>
      <AccountDispatchContext.Provider value={dispatch}>{children}</AccountDispatchContext.Provider>
    </AccountContext.Provider>
  );
}
