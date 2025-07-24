import { type FC, useEffect, useReducer, useRef } from 'react';
import {
  AuthContext,
  AuthDispatchContext,
} from '@/src/domains/authentification/infrastructure/auth.context.ts';
import { authReducer } from '@/src/domains/authentification/application/auth.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { USERS_KEY } from '@/src/domains/authentification/infrastructure/users.key.ts';
import { USERS_STATE } from '@/src/domains/authentification/infrastructure/users.state.ts';
import { USER_KEY } from '@/src/domains/authentification/infrastructure/user.key.ts';
import { USER_STATE } from '@/src/domains/authentification/infrastructure/user.state.ts';
import type { Users } from '@/src/domains/authentification/domain/users.type.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const AuthProvider: FC<{ children: Children }> = ({ children }) => {
  const usersRef = useRef<Users>(USERS_STATE);
  const userRef = useRef<string | null>(USER_STATE);
  const usersStorage = useLocalStorage<Users>(USERS_KEY, USERS_STATE);
  const userStorage = useLocalStorage<string | null>(USER_KEY, USER_STATE);

  const [state, dispatch] = useReducer(authReducer, {
    users: usersStorage.get(),
    user: userStorage.get(),
  });

  console.log('AUTH#1 >', 'user', state.user, 'users', state.users);

  useEffect(() => {
    if (usersRef.current === state.users) return;
    console.log('AUTH#2 >', 'users', state.users);
    usersRef.current = state.users;
    usersStorage.set(state.users);
  }, [state.users]);

  useEffect(() => {
    if (userRef.current === state.user) return;
    console.log('AUTH#2 >', 'user', state.user);
    userRef.current = state.user;
    userStorage.set(state.user);
  }, [state.user]);

  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};
