import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { ProdContext, ProdDisContext } from '@/src/domains/production/infrastructure/prod.context.tsx';
import { prodReducer } from '@/src/domains/production/application/prod.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useSaleDispatch } from '@/src/domains/sale/interfaces/useSale.ts';
import { useRes, useResDispatch } from '@/src/domains/resources/interfaces/useResouces.ts';
import { useMeca } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { getProd } from '@/src/domains/production/interfaces/getProd.ts';
import { PRODUCTION_KEY } from '@/src/domains/production/infrastructure/prod.key.ts';
import { PRODUCTION_STATE } from '@/src/domains/production/infrastructure/prod.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const ProdProvider: FC<{ children: Children }> = ({ children }) => {
  const prodStorage = useLocalStorage(PRODUCTION_KEY, PRODUCTION_STATE);
  const [state, dispatch] = useReducer(prodReducer, prodStorage.get());
  const saleDispatch = useSaleDispatch();
  const resourcesDispatch = useResDispatch();
  const { clipper, clipperBonus, megaClipper, megaClipperBonus, clipFactory, clipFactoryBonus } = useMeca();
  const { wire } = useRes();
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { pause } = useProfile();

  const update = useCallback(() => {
    const prod = getProd(wire, clipper, megaClipper, clipFactory);
    const clip =
      prod.clipper * Math.max(1, clipperBonus) +
      prod.megaClipper * 5e2 * Math.max(1, megaClipperBonus) +
      prod.clipFactory * 1e3 * Math.max(1, clipFactoryBonus);

    dispatch({ type: 'AUTO_INCREASE_CLIP', clip });
    saleDispatch({ type: 'INCREASE_INVENTORY', clip });
    if (wire <= 0) return;
    resourcesDispatch({ type: 'AUTO_DECREASE_WIRE', wire: prod.wire });
  }, [wire, clipper, clipperBonus, megaClipper, megaClipperBonus, clipFactory, clipFactoryBonus]);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({
      type: 'LOAD',
      production: users[user].factory?.production ?? PRODUCTION_STATE,
    });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    prodStorage.set(state);
  }, [state]);

  useInterval(update, 1e3, !!user && !pause);

  return (
    <ProdContext.Provider value={state}>
      <ProdDisContext.Provider value={dispatch}>{children}</ProdDisContext.Provider>
    </ProdContext.Provider>
  );
};
