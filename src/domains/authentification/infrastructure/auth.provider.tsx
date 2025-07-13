import { type FC, useEffect, useReducer } from 'react';
import { AuthContext, AuthDisContext } from '@/src/domains/authentification/infrastructure/auth.context.ts';
import { authReducer } from '@/src/domains/authentification/application/auth.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useNotif } from '@/src/domains/notification/interfaces/useNotif.ts';
import { ACC_KEY, ACC_STATE } from '@/src/domains/account/infrastructure/account.key.ts';
// import { FACTORY_KEY } from '@/src/domains/factory/infrastructure/factory.key.ts';
import { FACTORY_STATE } from '@/src/domains/factory/interfaces/factory.state.ts';
import { USERS_KEY } from '@/src/domains/authentification/infrastructure/users.key.ts';
import { USER_KEY } from '@/src/domains/authentification/infrastructure/user.key.ts';
// import type { AccountState } from '@/src/domains/account/domain/account.type.ts';
// import type { FactoryState } from '@/src/domains/factory/domain/factoryState.type.ts';
import type { Users } from '@/src/domains/authentification/domain/users.type.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const AuthProvider: FC<{ children: Children }> = ({ children }) => {
  const accountStorage = useLocalStorage(ACC_KEY, ACC_STATE);
  // const factoryStorage = useLocalStorage(FACTORY_KEY, FACTORY_STATE);
  const usersStorage = useLocalStorage<Users>(USERS_KEY, {});
  const userStorage = useLocalStorage<string | null>(USER_KEY, null);
  const [, setNotif] = useNotif();

  const [state, dispatch] = useReducer(authReducer, {
    users: usersStorage.get(),
    user: userStorage.get(),
  });

  useEffect(() => {
    const users = usersStorage.get();
    const user = userStorage.get();
    if (user && users[user]) dispatch({ type: 'LOG_IN', user });
  }, []);

  const signUp = (username: string, password: string): boolean => {
    if (state.users[username]) return false;

    state.users[username] = {
      password,
      account: ACC_STATE,
      factory: FACTORY_STATE,
    };

    usersStorage.set(state.users);
    userStorage.set(username);
    accountStorage.set(ACC_STATE);
    // factoryStorage.set(FACTORY_STATE);

    dispatch({ type: 'SIGN_UP', users: state.users, user: username });
    setNotif({
      type: 'ADD_NOTIF',
      notif: { id: 'sign-up', text: `${username} successfully registered`, status: 'success', timeout: 2e3 },
    });
    return true;
  };

  const logIn = (username: string, password: string): boolean => {
    const user = state.users[username];
    if (!user || user.password !== password) return false;

    userStorage.set(username);
    accountStorage.set(user.account);
    // factoryStorage.set(user.factory);

    dispatch({ type: 'LOG_IN', user: username });
    setNotif({
      type: 'ADD_NOTIF',
      notif: { id: 'log-in', text: `${username} is connected`, status: 'success', timeout: 2e3 },
    });
    return true;
  };

  const logOut = () => {
    if (!state.user) return;
    if (state.users[state.user]) {
      state.users[state.user].account = accountStorage.get();
      // state.users[state.user].factory = factoryStorage.get();
      usersStorage.set(state.users);
    }

    userStorage.remove();
    accountStorage.remove();
    // factoryStorage.remove();

    dispatch({ type: 'LOG_OUT' });
    setNotif({
      type: 'ADD_NOTIF',
      notif: {
        id: 'log-out',
        text: `${state.user} is disconnected`,
        status: 'success',
        timeout: 2e3,
      },
    });
  };

  return (
    <AuthContext.Provider value={state}>
      <AuthDisContext.Provider value={{ signUp, logIn, logOut }}>{children}</AuthDisContext.Provider>
    </AuthContext.Provider>
  );
};
