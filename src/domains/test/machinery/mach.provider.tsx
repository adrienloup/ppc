import { type FC, useReducer, useEffect } from 'react';
import { MachContext, MachDispatchContext } from './mach.context.tsx';
import { machReducer } from '@/src/domains/test/machinery/mach.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useFirstRender } from '@/src/shared/hooks/useFirstRender.ts';
import { MACH_KEY } from '@/src/domains/test/machinery/mach.key.ts';
import { MACH_STATE } from '@/src/domains/test/machinery/mach.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const MachProvider: FC<{ children: Children }> = ({ children }) => {
  const machStorage = useLocalStorage(MACH_KEY, MACH_STATE);
  const [state, dispatch] = useReducer(machReducer, MACH_STATE);

  useEffect(() => {
    const machState = machStorage.get();
    if (machState !== null) dispatch({ type: 'LOAD', machState });
  }, []);

  useFirstRender(() => {
    machStorage.set(state);
  }, [state]);

  return (
    <MachContext.Provider value={state}>
      <MachDispatchContext.Provider value={dispatch}>{children}</MachDispatchContext.Provider>
    </MachContext.Provider>
  );
};
