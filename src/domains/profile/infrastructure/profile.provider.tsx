import { type FC, useCallback, useEffect, useReducer, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { profileReducer } from '@/src/domains/profile/application/profile.reducer.ts';
import { ProfileContext, ProfileDisContext } from '@/src/domains/profile/infrastructure/profile.context.ts';
import { PROFILE_KEY } from '@/src/domains/profile/infrastructure/profile.key.ts';
import { PROFILE_STATE } from '@/src/domains/profile/infrastructure/profile.state.ts';
import { PauseComponent } from '@/src/domains/profile/interfaces/ui/pause/pause.component.tsx';
import { useLocalStorage } from '@/src/shared/hooks/useLocalStorage.ts';
import type { Lang } from '@/src/domains/profile/domain/lang.type.ts';
import type { Mode } from '@/src/domains/profile/domain/mode.type.ts';
import type { Theme } from '@/src/domains/profile/domain/theme.type.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const ProfileProvider: FC<{ children: Children }> = ({ children }) => {
  const profileStorage = useLocalStorage(PROFILE_KEY, PROFILE_STATE);
  const [state, dispatch] = useReducer(profileReducer, profileStorage.get());
  const { user, users } = useAuth();
  const userRef = useRef<string | null>(user);
  const { i18n } = useTranslation();

  const updateLang = useCallback((language: Lang) => {
    i18n.changeLanguage(language).then(() => undefined);
    document.documentElement.lang = language;
  }, []);

  const updateTheme = useCallback((theme: Theme) => {
    const classMap = {
      _dusk_emma0_1: theme === 'dusk',
      _tumult_emma0_1: theme === 'tumult',
      _cataclysm_emma0_1: theme === 'cataclysm',
    };
    for (const [name, condition] of Object.entries(classMap)) {
      document.body.classList.toggle(name, condition);
    }
  }, []);

  const updateMode = useCallback((mode: Mode) => {
    const classMap = {
      _dark_emma0_1: mode === 'dark' || mode === 'system',
      _light_emma0_1: mode === 'light',
    };
    for (const [name, condition] of Object.entries(classMap)) {
      document.body.classList.toggle(name, condition);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) => {
      dispatch({ type: 'MODE', mode: event.matches ? 'dark' : 'light' });
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!user || user === userRef.current) return;
    dispatch({
      type: 'LOAD',
      profile: users[user].profile ?? PROFILE_STATE,
    });
    userRef.current = user;
  }, [user]);

  useEffect(() => {
    updateLang(state.lang);
    updateTheme(state.theme);
    updateMode(state.mode);
    profileStorage.set(state);
  }, [state]);

  return (
    <ProfileContext.Provider value={state}>
      <ProfileDisContext.Provider value={dispatch}>
        {children}
        {user && state.pause && createPortal(<PauseComponent />, document.getElementById('_app_emma0_1')!)}
      </ProfileDisContext.Provider>
    </ProfileContext.Provider>
  );
};
