import { type FC, useEffect, useReducer, useRef } from 'react';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { mecaReducer } from '@/src/domains/mechanical/application/meca.reducer.ts';
import { MecaContext, MecaDispatchContext } from '@/src/domains/mechanical/infrastructure/meca.context.tsx';
import { MECA_KEY } from '@/src/domains/mechanical/infrastructure/meca.key.ts';
import { MECA_STATE } from '@/src/domains/mechanical/infrastructure/meca.state.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const MecaProvider: FC<{ children: Children }> = ({ children }) => {
  const mecaStorage = useLocalStorage(MECA_KEY, MECA_STATE);
  const [state, dispatch] = useReducer(mecaReducer, mecaStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({
      type: 'LOAD',
      mechanical: users[user].factory?.mechanical ?? MECA_STATE,
    });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    mecaStorage.set(state);
  }, [state]);

  return (
    <MecaContext.Provider value={state}>
      <MecaDispatchContext.Provider value={dispatch}>{children}</MecaDispatchContext.Provider>
    </MecaContext.Provider>
  );
};
