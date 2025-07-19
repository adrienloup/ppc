import { type FC, useCallback, useEffect, useReducer } from 'react';
import { createPortal } from 'react-dom';
import {
  AccountContext,
  AccountDispatchContext,
} from '@/src/domains/account/infrastructure/account.context.ts';
import { accountReducer } from '@/src/domains/account/application/account.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { PauseComponent } from '@/src/domains/account/interfaces/ui/play/pause.component.tsx';
import { ACCOUNT_KEY } from '@/src/domains/account/infrastructure/account.key.ts';
import { ACCOUNT_STATE } from '@/src/domains/account/infrastructure/account.state.ts';
import { USER_KEY } from '@/src/domains/authentification/infrastructure/user.key.ts';
import type { Mode } from '@/src/domains/account/domain/mode.type.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const AccountProvider: FC<{ children: Children }> = ({ children }) => {
  const accStorage = useLocalStorage(ACCOUNT_KEY, ACCOUNT_STATE);
  const userStorage = useLocalStorage<string | null>(USER_KEY, null);
  const [state, dispatch] = useReducer(accountReducer, accStorage.get() ?? ACCOUNT_STATE);

  const update = useCallback((mode: Mode) => {
    const isDark = mode === 'dark' || mode === 'system';
    document.body.classList.toggle('_dark_emma0_1', isDark);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) => {
      dispatch({ type: 'SET_MODE', mode: event.matches ? 'dark' : 'light' });
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!userStorage.get()) return;
    update(state.mode);
    accStorage.set(state);
  }, [state]);

  return (
    <AccountContext.Provider value={state}>
      <AccountDispatchContext.Provider value={dispatch}>
        {children}
        {state.pause && createPortal(<PauseComponent />, document.getElementById('_app_emma0_1')!)}
      </AccountDispatchContext.Provider>
    </AccountContext.Provider>
  );
};
