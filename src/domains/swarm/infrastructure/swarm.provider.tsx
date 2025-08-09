// import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { type FC, useEffect, useReducer, useRef } from 'react';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
// import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { swarmReducer } from '@/src/domains/swarm/application/swarm.reducer.ts';
import { SwarmContext, SwarmDisContext } from '@/src/domains/swarm/infrastructure/swarm.context.ts';
import { SWARM_KEY } from '@/src/domains/swarm/infrastructure/swarm.key.ts';
import { SWARM_STATE } from '@/src/domains/swarm/infrastructure/swarm.state.ts';
// import { getSwarm } from '@/src/domains/swarm/interfaces/getSwarm.ts';
// import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { Children } from '@/src/shared/types/children.type.ts';
// import { fibonacci } from '@/src/shared/utils/fibonacci.ts';

export const SwarmProvider: FC<{ children: Children }> = ({ children }) => {
  const swarmStorage = useLocalStorage(SWARM_KEY, SWARM_STATE);
  const [state, dispatch] = useReducer(swarmReducer, swarmStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  // const { pause } = useProfile();

  // const swarmEntertaining = state.swarmEntertainment;
  // const swarmDrone = 100; // factory.harvesterDrone + factory.wireDrone;
  // const swarmGiftsMax = fibonacci(swarmDrone, 0, 1).filter((drone) => swarmDrone >= drone).length;
  // const swarmGifts = state.swarmEntertaining ? Math.ceil(((state.swarmStrategy / 1e2) * swarmGiftsMax) / 3) : 0;
  // const swarmGiftsInterval = state.swarmEntertaining ? getSwarm(1e3, 24e3, 8, swarmDrone) : 0;

  // const autoSwarmGifts = useCallback(() => {
  //   dispatch({ type: 'SWARM_GIFTS', swarmGifts });
  // }, [swarmGifts]);

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

  // useInterval(autoSwarmGifts, swarmGiftsInterval, !!user && !pause && !!state.swarmEntertaining);

  return (
    <SwarmContext.Provider value={state}>
      <SwarmDisContext.Provider value={dispatch}>{children}</SwarmDisContext.Provider>
    </SwarmContext.Provider>
  );
};
