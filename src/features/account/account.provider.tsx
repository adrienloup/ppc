import { type FC, useEffect, useMemo, useReducer } from 'react';
import { createPortal } from 'react-dom';
import { useAuth } from '@/src/features/authentification/useAuth.ts';
import { AccountContext, AccountDispatchContext } from '@/src/features/account/account.context.ts';
import { accountReducer } from '@/src/features/account/account.reducer.ts';
import { ACCOUNT_KEY } from '@/src/features/account/account.key.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const AccountProvider: FC<{ children: Children }> = ({ children }) => {
  const { state: auth } = useAuth();

  const user = useMemo(() => {
    return auth.user ? `${ACCOUNT_KEY}::${auth.user}` : null;
  }, [auth.user]);

  const [state, dispatch] = useReducer(
    accountReducer,
    {
      pause: false,
    },
    () => {
      if (!user)
        return {
          pause: false,
        };
      const stored = localStorage.getItem(user);
      return stored
        ? JSON.parse(stored)
        : {
            pause: false,
          };
    }
  );

  useEffect(() => {
    if (!user) return;
    const stored = localStorage.getItem(user);
    dispatch({
      type: 'INITIALIZE',
      state: stored
        ? JSON.parse(stored)
        : {
            pause: false,
          },
    });
  }, [user]);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem(user, JSON.stringify(state));
  }, [state, user]);

  return (
    <AccountContext.Provider value={state}>
      <AccountDispatchContext.Provider value={dispatch}>
        {children}
        {state.pause ? createPortal(<>pause</>, document.getElementById('_app_3emma_1')!) : null}
      </AccountDispatchContext.Provider>
    </AccountContext.Provider>
  );
};
