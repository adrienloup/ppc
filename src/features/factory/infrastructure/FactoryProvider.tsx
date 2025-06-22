import { createPortal } from 'react-dom';
import { useCallback, useEffect, useReducer } from 'react';
import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { useInterval } from '@/src/common/shared/hooks/useInterval.ts';
import { useLocalStorage } from '@/src/common/shared/hooks/useLocalStorage.ts';
import { factoryReducer } from '@/src/features/factory/application/factoryReducer.ts';
import {
  FactoryContext,
  FactoryDispatchContext,
} from '@/src/features/factory/infrastructure/FactoryContext.ts';
import { GameContext } from '@/src/features/factory/infrastructure/gameContext.ts';
import { PlayComponent } from '@/src/common/shared/components/play/playComponent.tsx';
import { PLAY_KEY } from '@/src/features/factory/infrastructure/playKey.ts';
import { FACTORY_STATE } from '@/src/features/factory/states/factoryState.ts';
import type { Children } from '@/src/common/shared/types/children.ts';

const pcf = document.getElementById('_pcf_3mma_0');

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

  const setPlay = useCallback(() => {
    setIsPlay((prev) => !prev);
  }, []);

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
        <GameContext.Provider value={{ isPlay, setPlay }}>
          {!isPlay ? createPortal(<PlayComponent />, pcf!) : null}
          {children}
        </GameContext.Provider>
      </FactoryDispatchContext.Provider>
    </FactoryContext.Provider>
  );
}
