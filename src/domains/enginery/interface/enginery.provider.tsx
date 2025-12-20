import { type FC, useEffect, useReducer } from 'react';
import { ENGINERY_KEY } from '@/src/domains/enginery/application/enginery.key.ts';
import { engineryReducer } from '@/src/domains/enginery/application/enginery.reducer.ts';
import { ENGINERY_STATE } from '@/src/domains/enginery/application/enginery.state.ts';
import {
  EngineryContext,
  EngineryDispatchContext,
} from '@/src/domains/enginery/interface/enginery.context.tsx';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { ChildrenType } from '@/src/shared/types/children.type.ts';

export const EngineryProvider: FC<{ children: ChildrenType }> = ({ children }) => {
  const engineryStorage = useLocalStorage(ENGINERY_KEY, ENGINERY_STATE);
  const [state, dispatch] = useReducer(engineryReducer, engineryStorage.get());

  useEffect(() => {
    engineryStorage.set(state);
  }, [state]);

  return (
    <EngineryContext.Provider value={state}>
      <EngineryDispatchContext.Provider value={dispatch}>{children}</EngineryDispatchContext.Provider>
    </EngineryContext.Provider>
  );
};
