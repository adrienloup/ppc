import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { resourcesReducer } from '@/src/domains/resources/application/resources.reducer.ts';
import { ResourcesContext, ResourcesDisContext } from '@/src/domains/resources/infrastructure/resources.context.tsx';
import { RESOURCES_KEY } from '@/src/domains/resources/infrastructure/resources.key.ts';
import { RESOURCES_STATE } from '@/src/domains/resources/infrastructure/resources.state.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const ResourcesProvider: FC<{ children: Children }> = ({ children }) => {
  const resourceStorage = useLocalStorage(RESOURCES_KEY, RESOURCES_STATE);
  const [state, dispatch] = useReducer(resourcesReducer, resourceStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { pause } = useProfile();

  const autoWire = useCallback(() => {
    dispatch({ type: 'WIRE_COST' });
  }, []);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({
      type: 'LOAD',
      resources: users[user].factory?.resources ?? RESOURCES_STATE,
    });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    resourceStorage.set(state);
  }, [state]);

  useInterval(autoWire, 1e4, !!user && !pause); // @TODO: !feature.clipFactory.unlocked

  return (
    <ResourcesContext.Provider value={state}>
      <ResourcesDisContext.Provider value={dispatch}>{children}</ResourcesDisContext.Provider>
    </ResourcesContext.Provider>
  );
};
