import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { useMeca } from '@/src/domains/machine/interfaces/useMeca.ts';
import { powerReducer } from '@/src/domains/power/application/power.reducer.ts';
import { PowerContext, PowerDispatchContext } from '@/src/domains/power/infrastructure/power.context.tsx';
import { POWER_KEY } from '@/src/domains/power/infrastructure/power.key.ts';
import { POWER_STATE } from '@/src/domains/power/infrastructure/power.state.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const PowerProvider: FC<{ children: Children }> = ({ children }) => {
  const powerStorage = useLocalStorage(POWER_KEY, POWER_STATE);
  const [state, dispatch] = useReducer(powerReducer, powerStorage.get());
  const { clipFactory, harvesterDrone, wireDrone } = useMeca();
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { pause } = useProfile();

  const autoPower = useCallback(() => {
    const drone = harvesterDrone + wireDrone;
    dispatch({ type: 'POWER_CONSUMPTION', clipFactory, drone });
    dispatch({ type: 'POWER_PRODUCTION' });
    dispatch({ type: 'POWER_STORAGE' });
  }, [clipFactory, harvesterDrone, wireDrone]);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({
      type: 'LOAD',
      power: users[user].factory?.power ?? POWER_STATE,
    });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    powerStorage.set(state);
  }, [state]);

  useInterval(autoPower, 7e2, !!user && !pause);

  return (
    <PowerContext.Provider value={state}>
      <PowerDispatchContext.Provider value={dispatch}>{children}</PowerDispatchContext.Provider>
    </PowerContext.Provider>
  );
};
