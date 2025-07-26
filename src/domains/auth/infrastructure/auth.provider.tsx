import { type FC, useEffect, useReducer } from 'react';
import { AuthContext, AuthDisContext } from '@/src/domains/auth/infrastructure/auth.context.ts';
import { authReducer } from '@/src/domains/auth/application/auth.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { USERS_KEY } from '@/src/domains/auth/infrastructure/users.key.ts';
import { USERS_STATE } from '@/src/domains/auth/infrastructure/users.state.ts';
import { USER_KEY } from '@/src/domains/auth/infrastructure/user.key.ts';
import { USER_STATE } from '@/src/domains/auth/infrastructure/user.state.ts';
import type { Users } from '@/src/domains/auth/domain/users.type.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const AuthProvider: FC<{ children: Children }> = ({ children }) => {
  const usersStorage = useLocalStorage<Users>(USERS_KEY, USERS_STATE);
  const userStorage = useLocalStorage<string | null>(USER_KEY, USER_STATE);
  const [state, dispatch] = useReducer(authReducer, {
    users: usersStorage.get(),
    user: userStorage.get(),
  });

  useEffect(() => {
    usersStorage.set(state.users);
  }, [state.users]);

  useEffect(() => {
    userStorage.set(state.user);
  }, [state.user]);

  return (
    <AuthContext.Provider value={state}>
      <AuthDisContext.Provider value={dispatch}>{children}</AuthDisContext.Provider>
    </AuthContext.Provider>
  );
};
