import { type FC, useCallback, useEffect, useReducer } from 'react';
import { createPortal } from 'react-dom';
import { AccContext, AccDisContext } from '@/src/domains/account/infrastructure/account.context.ts';
import { accountReducer } from '@/src/domains/account/application/account.reducer.ts';
import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useFirstRender } from '@/src/shared/hooks/useFirstRender.ts';
import { PauseComponent } from '@/src/domains/account/interfaces/ui/play/pause.component.tsx';
import { ACC_KEY, ACC_STATE } from '@/src/domains/account/infrastructure/account.key.ts';
import type { Mode } from '@/src/domains/account/domain/mode.type.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const AccountProvider: FC<{ children: Children }> = ({ children }) => {
  const stored = useLocalStorage(ACC_KEY, ACC_STATE);
  const initial = stored.get() ?? ACC_STATE;
  const [state, dispatch] = useReducer(accountReducer, initial);
  const { user } = useAuth();

  const updateClass = useCallback((mode: Mode) => {
    const classMap = {
      _dark_emma0_1: mode === 'dark' || mode === 'system',
      _light_emma0_1: mode === 'light',
    };
    for (const [name, condition] of Object.entries(classMap)) {
      document.body.classList.toggle(name, condition);
    }
  }, []);

  useEffect(() => {
    if (user === null) return;
    dispatch({ type: 'LOAD', state: stored.get() });
  }, [user]);

  useFirstRender(() => {
    stored.set(state);
    updateClass(state.mode);
    console.log('mode', state.mode);
  }, [state]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) => {
      dispatch({ type: 'SET_MODE', mode: event.matches ? 'dark' : 'light' });
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [dispatch]);

  return (
    <AccContext.Provider value={state}>
      <AccDisContext.Provider value={dispatch}>
        {children}
        {user && state.pause && createPortal(<PauseComponent />, document.getElementById('_app_emma0_1')!)}
      </AccDisContext.Provider>
    </AccContext.Provider>
  );
};
