import { createPortal } from 'react-dom';
import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { useAuthentification } from '@/src/features/authentification/infrastructure/useAuthentification.ts';
import { useProfile } from '@/src/features/profile/infrastructure/useProfile.ts';
import { useInterval } from '@/src/common/shared/hooks/useInterval.ts';
import { factoryReducer } from '@/src/features/factory/application/factoryReducer.ts';
import {
  FactoryContext,
  FactoryDispatchContext,
} from '@/src/features/factory/infrastructure/FactoryContext.ts';
import { PauseComponent } from '@/src/common/components/pause/PauseComponent.tsx';
import { FACTORY_KEY } from '@/src/features/factory/infrastructure/factoryKey.ts';
import { FACTORY_STATE } from '@/src/features/factory/states/factoryState.ts';
import type { Children } from '@/src/common/shared/types/Children.ts';
import type { Factory } from '@/src/features/factory/domain/Factory.ts';

const ppc = document.getElementById('_ppc_3mma_0');

export function FactoryProvider({ children }: { children: Children }) {
  const [authentification] = useAuthentification();
  const [profile] = useProfile();

  const setUser = useMemo(() => {
    return `${FACTORY_KEY}::${authentification.user ?? 'guest'}`;
  }, [authentification.user]);

  const initializer = (): Factory => {
    const stored = localStorage.getItem(setUser);
    return stored ? JSON.parse(stored) : FACTORY_STATE;
  };

  const [factory, setFactory] = useReducer(factoryReducer, null, initializer);

  const sellUnsoldInventory = useCallback(() => {
    setFactory({ type: 'SELL_UNSOLD_INVENTORY' });
  }, []);

  const updatePerSecond = useCallback(() => {
    setFactory({ type: 'PRODUCTION_PER_SECOND' });
  }, []);

  useInterval(sellUnsoldInventory, 5e2, profile.isPlay && !!authentification.user);
  useInterval(updatePerSecond, 1e3, profile.isPlay && !!authentification.user);

  useEffect(() => {
    const stored = localStorage.getItem(setUser);
    const nextState = stored ? JSON.parse(stored) : FACTORY_STATE;
    setFactory({ type: 'INITIALIZE', state: nextState });
  }, [setUser]);

  useEffect(() => {
    localStorage.setItem(setUser, JSON.stringify(factory));
  }, [factory, setUser]);

  return (
    <FactoryContext.Provider
      value={factory}
      key={authentification.user}
    >
      <FactoryDispatchContext.Provider value={setFactory}>
        {!profile.isPlay ? createPortal(<PauseComponent />, ppc!) : null}
        {children}
      </FactoryDispatchContext.Provider>
    </FactoryContext.Provider>
  );
}
