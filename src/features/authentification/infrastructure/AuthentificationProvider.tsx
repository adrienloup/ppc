// import { useEffect, useReducer } from 'react';
// import { useLocalStorage } from '@/src/common/shared/hooks/useLocalStorage.ts';
import { usePersistedReducer } from '@/src/common/shared/hooks/usePersistedReducer.ts';
import { authentificationReducer } from '@/src/features/authentification/application/authentificationReducer.ts';
import { AuthentificationContext } from '@/src/features/authentification/infrastructure/AuthentificationContext.ts';
import { AUTHENTIFICATION_KEY } from '@/src/features/authentification/infrastructure/authentificationKey.ts';
import type { Children } from '@/src/common/shared/types/Children.ts';
import type { Authentification } from '@/src/features/authentification/domain/Authentification.ts';

const STATE: Authentification = {
  user: '',
  users: [],
};

export function AuthentificationProvider({ children }: { children: Children }) {
  // const [stored, setStored] = useLocalStorage<Authentification>(AUTHENTIFICATION_KEY, STATE);
  // const [authentification, setAuthentification] = useReducer(authentificationReducer, stored);
  // useEffect(() => {
  //   setStored(authentification);
  // }, [authentification]);

  const [authentification, setAuthentification] = usePersistedReducer(
    AUTHENTIFICATION_KEY,
    authentificationReducer,
    STATE
  );

  return (
    <AuthentificationContext.Provider value={[authentification, setAuthentification]}>
      {children}
    </AuthentificationContext.Provider>
  );
}
