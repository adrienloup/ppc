import { type FC, useReducer, useCallback, useEffect } from 'react';
import { ProdContext, ProdDispatchContext } from '@/src/domains/test/production/prod.context.tsx';
import { prodReducer } from '@/src/domains/test/production/prod.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { useMach } from '@/src/domains/test/machinery/useMach.ts';
import { useFirstRender } from '@/src/shared/hooks/useFirstRender.ts';
import { PROD_KEY } from '@/src/domains/test/production/prod.key.ts';
import { PROD_STATE } from '@/src/domains/test/production/prod.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const ProdProvider: FC<{ children: Children }> = ({ children }) => {
  const prodStorage = useLocalStorage(PROD_KEY, PROD_STATE);
  const [state, dispatch] = useReducer(prodReducer, PROD_STATE);
  const { clipper, megaClipper } = useMach();

  useEffect(() => {
    const prodState = prodStorage.get();
    if (prodState !== null) dispatch({ type: 'LOAD', prodState });
  }, []);

  useFirstRender(() => {
    prodStorage.set(state);
  }, [state]);

  const autoProd = useCallback(() => {
    const clip = clipper + megaClipper * 500;
    dispatch({ type: 'AUTO_PROD', clip });
  }, [clipper, megaClipper]);

  useInterval(autoProd, 1e3);

  return (
    <ProdContext.Provider value={state}>
      <ProdDispatchContext.Provider value={dispatch}>{children}</ProdDispatchContext.Provider>
    </ProdContext.Provider>
  );
};
