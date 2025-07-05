import { type FC, useEffect, useReducer } from 'react';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { AuthContext } from '@/src/features/authentification/auth.context.ts';
import { authReducer } from '@/src/features/authentification/auth.reducer.ts';
import { ACCOUNT_KEY, USERS_KEY } from '@/src/features/authentification/auth.key.ts';
import type { Children } from '@/src/shared/types/children.type.ts';
import type { Account, User } from '@/src/features/authentification/auth.type.ts';

export const AuthProvider: FC<{ children: Children }> = ({ children }) => {
  const [account, setAccount] = useLocalStorage<Account>(ACCOUNT_KEY, null);
  const [users, setUsers] = useLocalStorage<User[]>(USERS_KEY, []);
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
