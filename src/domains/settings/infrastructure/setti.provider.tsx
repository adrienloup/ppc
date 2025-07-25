import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { createPortal } from 'react-dom';
import { SettiContext, SettiDisContext } from '@/src/domains/settings/infrastructure/setti.context.ts';
import { settingsReducer } from '@/src/domains/settings/application/sett.reducer.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { PauseComponent } from '@/src/domains/settings/interfaces/ui/play/pause.component.tsx';
import { SETTINGS_KEY } from '@/src/domains/settings/infrastructure/setti.key.ts';
import { SETTINGS_STATE } from '@/src/domains/settings/infrastructure/setti.state.ts';
import type { Mode } from '@/src/domains/settings/domain/mode.type.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const SettingsProvider: FC<{ children: Children }> = ({ children }) => {
  const settingsStorage = useLocalStorage(SETTINGS_KEY, SETTINGS_STATE);
  const [state, dispatch] = useReducer(settingsReducer, settingsStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);

  const updateMode = useCallback((mode: Mode) => {
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
    if (!user || user == userRef.current) return;
    dispatch({ type: 'LOAD', settings: users[user].settings ?? SETTINGS_STATE });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    updateMode(state.mode);
    settingsStorage.set(state);
  }, [state]);

  return (
    <SettiContext.Provider value={state}>
      <SettiDisContext.Provider value={dispatch}>
        {children}
        {state.pause && createPortal(<PauseComponent />, document.getElementById('_app_emma0_1')!)}
      </SettiDisContext.Provider>
    </SettiContext.Provider>
  );
};
