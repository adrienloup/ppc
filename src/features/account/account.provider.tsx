import { type FC, useEffect, useMemo, useReducer } from 'react';
import { createPortal } from 'react-dom';
import { useAuth } from '@/src/features/authentification/useAuth.ts';
import { AccountContext, AccountDispatchContext } from '@/src/features/account/account.context.ts';
import { accountReducer } from '@/src/features/account/account.reducer.ts';
import { PauseComponent } from '@/src/components/profile/pause/pause.component.tsx';
import { ACCOUNT_KEY } from '@/src/features/account/account.key.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const AccountProvider: FC<{ children: Children }> = ({ children }) => {
  const { user } = useAuth();

  const account = useMemo(() => {
    return user ? `${ACCOUNT_KEY}::${user}` : null;
  }, [user]);

  const [state, dispatch] = useReducer(
    accountReducer,
    {
      pause: false,
    },
    () => {
      if (!account)
        return {
          pause: false,
        };
      const stored = localStorage.getItem(account);
      return stored
        ? JSON.parse(stored)
        : {
            pause: false,
          };
    }
  );

  useEffect(() => {
    if (!account) return;
    const stored = localStorage.getItem(account);
    dispatch({
      type: 'INITIALIZE',
      state: stored
        ? JSON.parse(stored)
        : {
            pause: false,
          },
    });
  }, [account]);

  useEffect(() => {
    if (!account) return;
    localStorage.setItem(account, JSON.stringify(state));
  }, [state, account]);

  return (
    <AccountContext.Provider value={state}>
      <AccountDispatchContext.Provider value={dispatch}>
        {children}
        {state.pause ? createPortal(<PauseComponent />, document.getElementById('_app_3emma_1')!) : null}
      </AccountDispatchContext.Provider>
    </AccountContext.Provider>
  );
};
