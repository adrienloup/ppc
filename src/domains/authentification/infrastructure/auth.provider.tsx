import { type FC, useEffect, useReducer } from 'react';
import {
  AuthContext,
  AuthDispatchContext,
} from '@/src/domains/authentification/infrastructure/auth.context.ts';
import { authReducer } from '@/src/domains/authentification/application/auth.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useAccountDispatch } from '@/src/domains/account/interfaces/useAccount.ts';
import { USERS_KEY } from '@/src/domains/authentification/infrastructure/users.key.ts';
import { USER_KEY } from '@/src/domains/authentification/infrastructure/user.key.ts';
import { ACCOUNT_KEY } from '@/src/domains/account/infrastructure/account.key.ts';
import { ACCOUNT_STATE } from '@/src/domains/account/infrastructure/account.state.ts';
import type { Users } from '@/src/domains/authentification/domain/users.type.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const AuthProvider: FC<{ children: Children }> = ({ children }) => {
  const usersStorage = useLocalStorage<Users>(USERS_KEY, {});
  const userStorage = useLocalStorage<string | null>(USER_KEY, null);
  const accStorage = useLocalStorage(ACCOUNT_KEY, ACCOUNT_STATE);
  const accDispatch = useAccountDispatch();

  const [state, dispatch] = useReducer(authReducer, {
    users: usersStorage.get(),
    user: userStorage.get(),
    load: null,
    save: null,
  });

  useEffect(() => {
    usersStorage.set(state.users);
  }, [state.users]);

  useEffect(() => {
    if (!state.load) return;
    userStorage.set(state.load);
    accDispatch({ type: 'LOAD', state: state.users[state.load].account });
    dispatch({ type: 'LOAD', username: state.load });
  }, [state.load]);

  useEffect(() => {
    if (!state.save) return;
    state.users[state.save].account = accStorage.get();
    usersStorage.set(state.users);
    userStorage.remove();
    accStorage.remove();
    dispatch({ type: 'SAVE' });
  }, [state.save]);

  return (
    <AuthContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};
