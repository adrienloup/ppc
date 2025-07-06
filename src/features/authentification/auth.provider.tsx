import { type FC, useEffect, useReducer } from 'react';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { AuthContext, AuthDispatchContext } from '@/src/features/authentification/auth.context.ts';
import { authReducer } from '@/src/features/authentification/auth.reducer.ts';
import { USER_KEY, USERS_KEY } from '@/src/features/authentification/auth.key.ts';
import type { Children } from '@/src/shared/types/children.type.ts';
import type { User } from '@/src/features/authentification/auth.type.ts';

export const AuthProvider: FC<{ children: Children }> = ({ children }) => {
  const [user, setUser] = useLocalStorage<string | null>(USER_KEY, null);
  const [users, setUsers] = useLocalStorage<User[]>(USERS_KEY, []);
  const [state, dispatch] = useReducer(authReducer, {
    user,
    users,
  });

  useEffect(() => {
    setUser(state.user);
    setUsers(state.users);
  }, [state.user, state.users]);

  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};
