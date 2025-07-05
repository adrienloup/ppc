import { type FC, useEffect, useReducer } from 'react';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { AuthContext } from '@/src/features/authentification/auth.context.ts';
import { authReducer } from '@/src/features/authentification/auth.reducer.ts';
import { ACCOUNT_KEY, USERS_KEY } from '@/src/features/authentification/auth.key.ts';
import type { ChildrenType } from '@/src/shared/types/children.type.ts';
import type { AccountType, UserType } from '@/src/features/authentification/auth.type.ts';

export const AuthProvider: FC<{ children: ChildrenType }> = ({ children }) => {
  const [account, setAccount] = useLocalStorage<AccountType>(ACCOUNT_KEY, null);
  const [users, setUsers] = useLocalStorage<UserType[]>(USERS_KEY, []);
  const [state, dispatch] = useReducer(authReducer, {
    account,
    users,
  });

  useEffect(() => {
    setAccount(state.account);
    setUsers(state.users);
  }, [state.account, state.users]);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};
