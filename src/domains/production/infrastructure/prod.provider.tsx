import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { useInventoryDispatch } from '@/src/domains/inventory/interfaces/useInventory.ts';
import { useMeca } from '@/src/domains/machine/interfaces/useMeca.ts';
import { prodReducer } from '@/src/domains/production/application/prod.reducer.ts';
import { ProdContext, ProdDisContext } from '@/src/domains/production/infrastructure/prod.context.tsx';
import { PRODUCTION_KEY } from '@/src/domains/production/infrastructure/prod.key.ts';
import { PRODUCTION_STATE } from '@/src/domains/production/infrastructure/prod.state.ts';
import { getProd } from '@/src/domains/production/interfaces/getProd.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { useResources, useResDispatch } from '@/src/domains/resources/interfaces/useResouces.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const ProdProvider: FC<{ children: Children }> = ({ children }) => {
  const prodStorage = useLocalStorage(PRODUCTION_KEY, PRODUCTION_STATE);
  const [state, dispatch] = useReducer(prodReducer, prodStorage.get());
  const inventoryDispatch = useInventoryDispatch();
  const resourcesDispatch = useResDispatch();
  const { clipper, clipperBonus, megaClipper, megaClipperBonus, clipFactory, clipFactoryBonus } = useMeca();
  const { wire } = useResources();
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { pause } = useProfile();

  const autoProduction = useCallback(() => {
    // console.log('autoProduction: updated every 1 second');
    const prod = getProd(wire, clipper, megaClipper, clipFactory);
    const prodClip =
      prod.clipper * Math.max(1, clipperBonus) +
      prod.megaClipper * 5e2 * Math.max(1, megaClipperBonus) +
      prod.clipFactory * 1e3 * Math.max(1, clipFactoryBonus);

    dispatch({ type: 'INCREASE_CLIP', clip: prodClip, clipPerSecond: prodClip });

    if (wire < 1) return;
    inventoryDispatch({ type: 'INCREASE_INVENTORY', unsoldInventory: prodClip });
    resourcesDispatch({ type: 'DECREASE_WIRE', wire: prod.wire });
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

  useInterval(autoProduction, 9e2, !!user && !pause);

  return (
    <ProdContext.Provider value={state}>
      <ProdDisContext.Provider value={dispatch}>{children}</ProdDisContext.Provider>
    </ProdContext.Provider>
  );
};
