import { type FC, useCallback, useReducer } from 'react';
import { ProdContext, ProdDisContext } from '@/src/domains/production/infrastructure/prod.context.tsx';
import { prodReducer } from '@/src/domains/production/application/prod.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useMeca } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import { useExp, useExpDis } from '@/src/domains/exploitation/interfaces/useExp.ts';
import { useFirstRender } from '@/src/shared/hooks/useFirstRender.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { computeValues } from '@/src/domains/production/interfaces/computeValues.ts';
import { PROD_KEY, PROD_STATE } from '@/src/domains/production/infrastructure/prod.key.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const ProdProvider: FC<{ children: Children }> = ({ children }) => {
  const stored = useLocalStorage(PROD_KEY, PROD_STATE);
  const initial = stored.get() ?? PROD_STATE;
  const [state, dispatch] = useReducer(prodReducer, initial);
  const expDispatch = useExpDis();
  const { clipper, megaClipper } = useMeca();
  const { wire } = useExp();
  // const enabled = wire > 0 && clipper > 0;

  useFirstRender(() => {
    stored.set(state);
  }, [state]);

  const prodPerSecond = useCallback(() => {
    const prod = computeValues(wire, megaClipper, clipper);
    expDispatch({ type: 'UPDATE_WIRE', wire: prod.M * 5e2 + prod.C });
    dispatch({ type: 'UPDATE_CLIP', clip: prod.W });
  }, [wire, megaClipper, clipper]);

  useInterval(prodPerSecond, 1e3);

  return (
    <ProdContext.Provider value={state}>
      <ProdDisContext.Provider value={dispatch}>{children}</ProdDisContext.Provider>
    </ProdContext.Provider>
  );
};
