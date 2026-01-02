import { type FC, useEffect, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import start from '@/src/assets/sounds/start.mp3';
import { PROFILE_KEY } from '@/src/domains/profile/application/profile.key.ts';
import { profileReducer } from '@/src/domains/profile/application/profile.reducer.ts';
import { PROFILE_STATE } from '@/src/domains/profile/application/profile.state.ts';
import { ProfileContext, ProfileDispatchContext } from '@/src/domains/profile/interface/profile.context.ts';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { LangType } from '@/src/domains/profile/application/lang.type.ts';
import type { ModeType } from '@/src/domains/profile/application/mode.type.ts';
import type { ThemeType } from '@/src/domains/profile/application/theme.type.ts';
import type { ChildrenType } from '@/src/shared/types/children.type.ts';

export const ProfileProvider: FC<{ children: ChildrenType }> = ({ children }) => {
  const profileStorage = useLocalStorage(PROFILE_KEY, PROFILE_STATE);
  const [state, dispatch] = useReducer(profileReducer, profileStorage.get());
  const { i18n } = useTranslation();
  const audio = new Audio(start);

  const updateLang = (lang: LangType) => {
    i18n.changeLanguage(lang).then(() => undefined);
    document.documentElement.lang = lang;
  };

  const updateTheme = (theme: ThemeType) => {
    const classMap = {
      _dusk_ppc03_1: theme === 'dusk',
      _tumult_ppc03_1: theme === 'tumult',
      _cataclysm_ppc03_1: theme === 'cataclysm',
    };

    for (const [name, condition] of Object.entries(classMap)) {
      document.body.classList.toggle(name, condition);
    }
  };

  const updateMode = (mode: ModeType) => {
    const classMap = {
      _dark_ppc03_1: mode === 'dark' || mode === 'system',
      _light_ppc03_1: mode === 'light',
    };

    for (const [name, condition] of Object.entries(classMap)) {
      document.body.classList.toggle(name, condition);
    }
  };

  const updateStart = () => {
    audio.play().catch(() => {});
  };

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) => {
      dispatch({ type: 'SET_MODE', mode: event.matches ? 'dark' : 'light' });
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    updateLang(state.lang);
    updateTheme(state.theme);
    updateMode(state.mode);
    updateStart();
    profileStorage.set(state);
  }, [state.lang, state.theme, state.mode]);

  return (
    <ProfileContext.Provider value={state}>
      <ProfileDispatchContext.Provider value={dispatch}>{children}</ProfileDispatchContext.Provider>
    </ProfileContext.Provider>
  );
};
