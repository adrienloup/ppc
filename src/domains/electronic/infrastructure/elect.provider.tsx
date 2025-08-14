import { type FC, useEffect, useReducer, useRef } from 'react';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { electronicReducer } from '@/src/domains/electronic/application/elec.reducer.ts';
import { ElectronicContext, ElectronicDisContext } from '@/src/domains/electronic/infrastructure/elec.context.tsx';
import { ELECTRONIC_KEY } from '@/src/domains/electronic/infrastructure/elec.key.ts';
import { ELECTRONIC_STATE } from '@/src/domains/electronic/infrastructure/elec.state.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const ElectronicProvider: FC<{ children: Children }> = ({ children }) => {
  const electronicStorage = useLocalStorage(ELECTRONIC_KEY, ELECTRONIC_STATE);
  const [state, dispatch] = useReducer(electronicReducer, electronicStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({
      type: 'LOAD',
      electronic: users[user].factory?.electronic ?? ELECTRONIC_STATE,
    });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    electronicStorage.set(state);
  }, [state]);

  return (
    <ElectronicContext.Provider value={state}>
      <ElectronicDisContext.Provider value={dispatch}>{children}</ElectronicDisContext.Provider>
    </ElectronicContext.Provider>
  );
};
