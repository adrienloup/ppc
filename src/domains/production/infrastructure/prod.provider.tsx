import { type FC, useCallback, useEffect, useReducer } from 'react';
import { ProdContext, ProdDispatchContext } from '@/src/domains/production/infrastructure/prod.context.tsx';
import { prodReducer } from '@/src/domains/production/application/prod.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useMeca } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import { useExp, useExpDispatch } from '@/src/domains/exploitation/interfaces/useExp.ts';
import { useSaleDispatch } from '@/src/domains/sale/interfaces/useSale.ts';
import { useAccount } from '@/src/domains/account/interfaces/useAccount.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { prodComputed } from '@/src/domains/production/interfaces/utils/prodComputed.ts';
import { PROD_KEY } from '@/src/domains/production/infrastructure/prod.key.ts';
import { PROD_STATE } from '@/src/domains/production/infrastructure/prod.state.ts';
import { USER_KEY } from '@/src/domains/authentification/infrastructure/user.key.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const ProdProvider: FC<{ children: Children }> = ({ children }) => {
  const prodStorage = useLocalStorage(PROD_KEY, PROD_STATE);
  const userStorage = useLocalStorage(USER_KEY, null);
  const [state, dispatch] = useReducer(prodReducer, prodStorage.get() ?? PROD_STATE);
  const expDispatch = useExpDispatch();
  const saleDispatch = useSaleDispatch();
  const { clipper, clipperBonus, megaClipper, megaClipperBonus, clipFactory, clipFactoryBonus } = useMeca();
  const { wire } = useExp();
  const { pause } = useAccount();
  const user = userStorage.get();

  const autoProd = useCallback(() => {
    const prod = prodComputed(wire, clipper, megaClipper, clipFactory);
    const clip =
      prod.clipper * Math.max(1, clipperBonus) +
      prod.megaClipper * 5e2 * Math.max(1, megaClipperBonus) +
      prod.clipFactory * 1e3 * Math.max(1, clipFactoryBonus);

    dispatch({ type: 'AUTO_CLIP', clip });
    saleDispatch({ type: 'AUTO_UNSOLD_INVENTORY', clip });

    if (wire <= 0) return;
    expDispatch({ type: 'AUTO_WIRE', wire: prod.wire });
  }, [wire, clipper, clipperBonus, megaClipper, megaClipperBonus, clipFactory, clipFactoryBonus]);

  useEffect(() => {
    if (!user) return;
    prodStorage.set(state);
  }, [state]);

  useInterval(autoProd, 8e2, !!user && !pause);

  return (
    <ProdContext.Provider value={state}>
      <ProdDispatchContext.Provider value={dispatch}>{children}</ProdDispatchContext.Provider>
    </ProdContext.Provider>
  );
};
