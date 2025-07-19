import { type FC, useEffect, useReducer } from 'react';
import {
  MecaContext,
  MecaDispatchContext,
} from '@/src/domains/mechanical/infrastructure/meca.context.tsx';
import { mecaReducer } from '@/src/domains/mechanical/application/meca.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { MECA_KEY } from '@/src/domains/mechanical/infrastructure/meca.key.ts';
import { MECA_STATE } from '@/src/domains/mechanical/infrastructure/meca.state.ts';
import { USER_KEY } from '@/src/domains/authentification/infrastructure/user.key.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const MecaProvider: FC<{ children: Children }> = ({ children }) => {
  const mecaStorage = useLocalStorage(MECA_KEY, MECA_STATE);
  const userStorage = useLocalStorage(USER_KEY, null);
  const [state, dispatch] = useReducer(mecaReducer, mecaStorage.get() ?? MECA_STATE);

  useEffect(() => {
    if (!userStorage.get()) return;
    mecaStorage.set(state);
  }, [state]);

  return (
    <MecaContext.Provider value={state}>
      <MecaDispatchContext.Provider value={dispatch}>{children}</MecaDispatchContext.Provider>
    </MecaContext.Provider>
  );
};
