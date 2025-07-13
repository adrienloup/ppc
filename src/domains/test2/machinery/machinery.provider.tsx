import { type FC, useReducer, useEffect } from 'react';
import { MachineryContext, MachineryDisContext } from './machinery.context.tsx';
import { machineryReducer } from '@/src/domains/test/machinery/machinery.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useFirstRender } from '@/src/shared/hooks/useFirstRender.ts';
import { MACHINERY_KEY } from '@/src/domains/test/machinery/machinery.key.ts';
import { MACH_STATE } from '@/src/domains/test/machinery/machinery.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const MachineryProvider: FC<{ children: Children }> = ({ children }) => {
  const machStorage = useLocalStorage(MACHINERY_KEY, MACH_STATE);
  const [state, dispatch] = useReducer(machineryReducer, MACH_STATE);

  useEffect(() => {
    const payload = machStorage.get();
    if (payload !== null) dispatch({ type: 'LOAD', payload });
  }, []);

  useFirstRender(() => {
    machStorage.set(state);
  }, [state]);

  return (
    <MachineryContext.Provider value={state}>
      <MachineryDisContext.Provider value={dispatch}>{children}</MachineryDisContext.Provider>
    </MachineryContext.Provider>
  );
};
