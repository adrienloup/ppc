import { createPortal } from 'react-dom';
import { useCallback, useEffect, useReducer } from 'react';
import { useInterval } from '@/src/common/shared/hooks/useInterval.ts';
import { useLocalStorage } from '@/src/common/shared/hooks/useLocalStorage.ts';
import { factoryReducer } from '@/src/features/factory/application/factoryReducer.ts';
import {
  FactoryContext,
  FactoryDispatchContext,
} from '@/src/features/factory/infrastructure/FactoryContext.ts';
import { FACTORY_STATE } from '@/src/features/factory/states/factoryState.ts';
import type { Children } from '@/src/common/shared/types/Children.ts';

const ppc = document.getElementById('_ppc_3mma_0');

export function FactoryProvider({ children }: { children: Children }) {
  const { user, setAccount } = useAccount();
  const [factory, setFactory] = useReducer(factoryReducer, null, () => {
    const stored = localStorage.getItem(setAccount());
    return stored ? JSON.parse(stored) : FACTORY_STATE;
  });
  const [isPlay, setIsPlay] = useLocalStorage<boolean>(PLAY_KEY, true);

  useEffect(() => {
    const stored = localStorage.getItem(setAccount());
    if (stored) {
      setFactory({ type: 'INITIALIZE', state: JSON.parse(stored) });
    } else {
      setFactory({ type: 'INITIALIZE', state: FACTORY_STATE });
      localStorage.setItem(setAccount(), JSON.stringify(FACTORY_STATE));
    }
  }, [setAccount()]);

  useEffect(() => {
    localStorage.setItem(setAccount(), JSON.stringify(factory));
  }, [factory, setAccount()]);

  const sellUnsoldInventory = useCallback(() => {
    setFactory({ type: 'SELL_UNSOLD_INVENTORY' });
  }, []);

  const updatePerSecond = useCallback(() => {
    setFactory({ type: 'PRODUCTION_PER_SECOND' });
  }, []);

  useInterval(sellUnsoldInventory, 5e2, isPlay && !!user);
  useInterval(updatePerSecond, 1e3, isPlay && !!user);

  return (
    <FactoryContext.Provider
      value={factory}
      key={user}
    >
      <FactoryDispatchContext.Provider value={setFactory}>
        {!isPlay ? createPortal(<PlayComponent />, ppc!) : null}
        {children}
      </FactoryDispatchContext.Provider>
    </FactoryContext.Provider>
  );
}
