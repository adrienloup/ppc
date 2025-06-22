// import { usePersistedReducer } from '@/src/common/shared/hooks/usePersistedReducer.ts';
import { useEffect, useReducer } from 'react';
import { useLocalStorage } from '@/src/common/shared/hooks/useLocalStorage.ts';
import { AuthentificationContext } from '@/src/features/authentification/infrastructure/AuthentificationContext.ts';
import { authentificationReducer } from '@/src/features/authentification/application/authentificationReducer.ts';
import { USER_KEY } from '@/src/features/authentification/infrastructure/userKey.ts';
import { USERS_KEY } from '@/src/features/authentification/infrastructure/usersKey.ts';
import type { Children } from '@/src/common/shared/types/Children.ts';
import type { User } from '@/src/features/authentification/domain/User.ts';

export function AuthentificationProvider({ children }: { children: Children }) {
  // const [stored, setStored] = useLocalStorage<Authentification>(AUTHENTIFICATION_KEY, STATE);
  // const [authentification, setAuthentification] = useReducer(authentificationReducer, stored);
  // useEffect(() => {
  //   setStored(authentification);
  // }, [authentification]);

  const [users, setUsers] = useLocalStorage<User[]>(USERS_KEY, []);
  const [user, setUser] = useLocalStorage<string | null>(USER_KEY, null);
  const [authentification, setAuthentification] = useReducer(authentificationReducer, { user, users });

  // const [authentification, setAuthentification] = usePersistedReducer(
  //   AUTHENTIFICATION_KEY,
  //   authentificationReducer,
  //   STATE
  // );

  useEffect(() => {
    setUsers(authentification.users);
    setUser(authentification.user);
  }, [authentification]);

  return (
    <AuthentificationContext.Provider value={[authentification, setAuthentification]}>
      {children}
    </AuthentificationContext.Provider>
  );
}
