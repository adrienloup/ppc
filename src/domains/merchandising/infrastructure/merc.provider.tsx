import { type FC, useEffect, useReducer } from 'react';
import {
  MercContext,
  MercDispatchContext,
} from '@/src/domains/merchandising/infrastructure/merc.context.tsx';
import { mercReducer } from '@/src/domains/merchandising/application/merc.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { MERC_KEY } from '@/src/domains/merchandising/infrastructure/merc.key.ts';
import { MERC_STATE } from '@/src/domains/merchandising/infrastructure/merc.state.ts';
import { USER_KEY } from '@/src/domains/authentification/infrastructure/user.key.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const MercProvider: FC<{ children: Children }> = ({ children }) => {
  const mercStorage = useLocalStorage(MERC_KEY, MERC_STATE);
  const userStorage = useLocalStorage(USER_KEY, null);
  const [state, dispatch] = useReducer(mercReducer, mercStorage.get() ?? MERC_STATE);

  useEffect(() => {
    if (!userStorage.get()) return;
    mercStorage.set(state);
  }, [state]);

  return (
    <MercContext.Provider value={state}>
      <MercDispatchContext.Provider value={dispatch}>{children}</MercDispatchContext.Provider>
    </MercContext.Provider>
  );
};
