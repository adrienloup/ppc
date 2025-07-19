import { type FC, useCallback, useEffect, useReducer } from 'react';
import { ProdContext, ProdDisContext } from '@/src/domains/production/infrastructure/prod.context.tsx';
import { prodReducer } from '@/src/domains/production/application/prod.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useMeca } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import { useExp, useExpDispatch } from '@/src/domains/exploitation/interfaces/useExp.ts';
import { useAccount } from '@/src/domains/account/interfaces/useAccount.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { compute } from '@/src/domains/production/interfaces/utils/compute.ts';
import { PROD_KEY } from '@/src/domains/production/infrastructure/prod.key.ts';
import { PROD_STATE } from '@/src/domains/production/infrastructure/prod.state.ts';
import { USER_KEY } from '@/src/domains/authentification/infrastructure/user.key.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const ProdProvider: FC<{ children: Children }> = ({ children }) => {
  const prodStorage = useLocalStorage(PROD_KEY, PROD_STATE);
  const userStorage = useLocalStorage<string | null>(USER_KEY, null);
  const [state, dispatch] = useReducer(prodReducer, prodStorage.get() ?? PROD_STATE);
  const expDispatch = useExpDispatch();
  const { clipper, clipperBonus, megaClipper, megaClipperBonus, clipFactory, clipFactoryBonus } = useMeca();
  const { wire } = useExp();
  const { pause } = useAccount();
  const user = userStorage.get();

  const prodPerSecond = useCallback(() => {
    const prod = compute(wire, clipper, megaClipper, clipFactory);
    dispatch({
      type: 'UPDATE_AUTO_CLIP',
      clip:
        prod.clipper * Math.max(1, clipperBonus) +
        prod.megaClipper * 5e2 * Math.max(1, megaClipperBonus) +
        prod.clipFactory * 1e3 * Math.max(1, clipFactoryBonus),
    });
    if (wire > 0) expDispatch({ type: 'UPDATE_AUTO_WIRE', wire: prod.wire });
  }, [wire, clipper, clipperBonus, megaClipper, megaClipperBonus, clipFactory, clipFactoryBonus]);

  useEffect(() => {
    if (!user) return;
    prodStorage.set(state);
  }, [state]);

  useInterval(prodPerSecond, 9e2, !!user && !pause);

  return (
    <ProdContext.Provider value={state}>
      <ProdDisContext.Provider value={dispatch}>{children}</ProdDisContext.Provider>
    </ProdContext.Provider>
  );
};
