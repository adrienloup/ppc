import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { ProdContext, ProdDisContext } from '@/src/domains/production/infrastructure/prod.context.tsx';
import { prodReducer } from '@/src/domains/production/application/prod.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { useInterval } from '@/src/shared/hooks/useInterval.ts';
import { PRODUCTION_KEY } from '@/src/domains/production/infrastructure/prod.key.ts';
import { PRODUCTION_STATE } from '@/src/domains/production/infrastructure/prod.state.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const ProdProvider: FC<{ children: Children }> = ({ children }) => {
  const prodStorage = useLocalStorage(PRODUCTION_KEY, PRODUCTION_STATE);
  const [state, dispatch] = useReducer(prodReducer, prodStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { pause } = useProfile();

  const autoProd = useCallback(() => {
    // console.log('AUTO_PROD');
    //   const prod = prodComputed(wire, clipper, megaClipper, clipFactory);
    //   const clip =
    //     prod.clipper * Math.max(1, clipperBonus) +
    //     prod.megaClipper * 5e2 * Math.max(1, megaClipperBonus) +
    //     prod.clipFactory * 1e3 * Math.max(1, clipFactoryBonus);
    //
    dispatch({ type: 'AUTO_MAKE_CLIP', clip: 0 });
    //   saleDispatch({ type: 'AUTO_UNSOLD_INVENTORY', clip });
    //
    //   if (wire <= 0) return;
    //   expDispatch({ type: 'AUTO_WIRE', wire: prod.wire });
    // }, [wire, clipper, clipperBonus, megaClipper, megaClipperBonus, clipFactory, clipFactoryBonus]);
  }, []);

  useEffect(() => {
    if (!user) return;
    if (user === userRef.current) return;
    dispatch({ type: 'LOAD', production: users[user].factory?.production ?? PRODUCTION_STATE });
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
