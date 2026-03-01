import { useEffect, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { SettingsContext, SettingsDispatchContext } from '@/src/context/settings/SettingsContext.ts';
import { settingsReducer } from '@/src/context/settings/settingsReducer.ts';
import { settingsState } from '@/src/context/settings/settingsState.ts';
import type { LangType } from '@/src/context/settings/type/Lang.ts';
import type { ModeType } from '@/src/context/settings/type/Mode.ts';
import type { SettingsType } from '@/src/context/settings/type/Settings.ts';
import { useLocalStorage } from '@/src/shared/hook/useLocalStorage.ts';
import type { ChildrenType } from '@/src/shared/type/Children.ts';

export function SettingsProvider({ children }: { children: ChildrenType }) {
  const storage = useLocalStorage<SettingsType>('_settings_ppc03_1', settingsState);
  const [state, dispatch] = useReducer(settingsReducer, storage.get());
  const { i18n } = useTranslation();

  const updateLang = (lang: LangType) => {
    i18n.changeLanguage(lang).then(() => undefined);
    document.documentElement.lang = lang;
  };

  const updateMode = (mode: ModeType) => {
    const classMode = {
      _contrast_ppc03_1: mode === 'contrast',
      _light_ppc03_1: mode === 'light',
      _dark_ppc03_1: mode === 'dark' || mode === 'system',
    };

    for (const [name, condition] of Object.entries(classMode)) {
      document.body.classList.toggle(name, condition);
    }
  };

  useEffect(() => {
    if (state.mode === 'contrast') return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) => {
      dispatch({ type: 'SET_MODE', mode: event.matches ? 'dark' : 'light' });
    };

    media.addEventListener('change', onChange);

    return () => media.removeEventListener('change', onChange);
  }, [state.mode]);

  useEffect(() => {
    updateLang(state.lang);
    updateMode(state.mode);
    storage.set(state);
  }, [state.lang, state.mode, state.start]);

  return (
    <SettingsContext.Provider value={state}>
      <SettingsDispatchContext.Provider value={dispatch}>{children}</SettingsDispatchContext.Provider>
    </SettingsContext.Provider>
  );
}
