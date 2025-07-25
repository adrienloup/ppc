import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { ProdContext, ProdDisContext } from '@/src/domains/production/infrastructure/prod.context.tsx';
import { prodReducer } from '@/src/domains/production/application/prod.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { useSetti } from '@/src/domains/settings/interfaces/useSetti.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { PROD_KEY } from '@/src/domains/production/infrastructure/prod.key.ts';
import { PROD_STATE } from '@/src/domains/production/infrastructure/prod.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const ProdProvider: FC<{ children: Children }> = ({ children }) => {
  const prodStorage = useLocalStorage(PROD_KEY, PROD_STATE);
  const [state, dispatch] = useReducer(prodReducer, prodStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { pause } = useSetti();

  const autoProd = useCallback(() => {
    console.log('AUTO_PROD');
    //   const prod = prodComputed(wire, clipper, megaClipper, clipFactory);
    //   const clip =
    //     prod.clipper * Math.max(1, clipperBonus) +
    //     prod.megaClipper * 5e2 * Math.max(1, megaClipperBonus) +
    //     prod.clipFactory * 1e3 * Math.max(1, clipFactoryBonus);
    //
    //   dispatch({ type: 'AUTO_CLIP', clip });
    //   saleDispatch({ type: 'AUTO_UNSOLD_INVENTORY', clip });
    //
    //   if (wire <= 0) return;
    //   expDispatch({ type: 'AUTO_WIRE', wire: prod.wire });
    // }, [wire, clipper, clipperBonus, megaClipper, megaClipperBonus, clipFactory, clipFactoryBonus]);
  }, []);

  useEffect(() => {
    if (!user) return;
    if (user === userRef.current) return;
    dispatch({ type: 'LOAD', production: users[user].factory?.production ?? PROD_STATE });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    prodStorage.set(state);
  }, [state]);

  useInterval(autoProd, 1e3, !!user && !pause);

  return (
    <ProdContext.Provider value={state}>
      <ProdDisContext.Provider value={dispatch}>{children}</ProdDisContext.Provider>
    </ProdContext.Provider>
  );
};
