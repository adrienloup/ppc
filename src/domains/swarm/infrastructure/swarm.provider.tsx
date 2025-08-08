import { type FC, useEffect, useReducer, useRef } from 'react';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { swarmReducer } from '@/src/domains/swarm/application/swarm.reducer.ts';
import { SwarmContext, SwarmDisContext } from '@/src/domains/swarm/infrastructure/swarm.context.ts';
import { SWARM_KEY } from '@/src/domains/swarm/infrastructure/swarm.key.ts';
import { SWARM_STATE } from '@/src/domains/swarm/infrastructure/swarm.state.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const SwarmProvider: FC<{ children: Children }> = ({ children }) => {
  const swarmStorage = useLocalStorage(SWARM_KEY, SWARM_STATE);
  const [state, dispatch] = useReducer(swarmReducer, swarmStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({
      type: 'LOAD',
      swarm: users[user].factory?.swarm ?? SWARM_STATE,
    });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    swarmStorage.set(state);
  }, [state]);

  return (
    <SwarmContext.Provider value={state}>
      <SwarmDisContext.Provider value={dispatch}>{children}</SwarmDisContext.Provider>
    </SwarmContext.Provider>
  );
};
