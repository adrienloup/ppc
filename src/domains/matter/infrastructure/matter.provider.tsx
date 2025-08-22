import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { matterReducer } from '@/src/domains/matter/application/resources.reducer.ts';
import { MatterContext, MatterDispatchContext } from '@/src/domains/matter/infrastructure/matter.context.tsx';
import { MATTER_KEY } from '@/src/domains/matter/infrastructure/matter.key.ts';
import { MATTER_STATE } from '@/src/domains/matter/infrastructure/matter.state.ts';
import { useMerch } from '@/src/domains/merchandise/interfaces/useMerch.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const MatterProvider: FC<{ children: Children }> = ({ children }) => {
  const matterStorage = useLocalStorage(MATTER_KEY, MATTER_STATE);
  const [state, dispatch] = useReducer(matterReducer, matterStorage.get());
  const { power } = useMerch();
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { pause } = useProfile();

  const autoMatter = useCallback(() => {
    console.log('autoMatter');
  }, []);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({
      type: 'LOAD',
      matter: users[user].factory?.matter ?? MATTER_STATE,
    });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    matterStorage.set(state);
  }, [state]);

  useInterval(autoMatter, 9e2, !!user && !pause && power.unlocked);

  return (
    <MatterContext.Provider value={state}>
      <MatterDispatchContext.Provider value={dispatch}>{children}</MatterDispatchContext.Provider>
    </MatterContext.Provider>
  );
};
