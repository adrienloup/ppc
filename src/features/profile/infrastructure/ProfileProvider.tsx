import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthentification } from '@/src/features/authentification/infrastructure/useAuthentification.ts';
import { useInitializer } from '@/src/common/shared/hooks/useInitializer.ts';
import { ProfileContext } from '@/src/features/profile/infrastructure/ProfileContext.ts';
import { profileReducer } from '@/src/features/profile/application/profileReducer.ts';
import { PROFILE_KEY } from '@/src/features/profile/infrastructure/profileKey.ts';
import type { Profile, ProfileDispatch } from '@/src/features/profile/domain/Profile.ts';
import type { Children } from '@/src/common/shared/types/Children.ts';
import type { Language } from '@/src/features/profile/domain/Language.ts';
import type { Mode } from '@/src/features/profile/domain/Mode.ts';
import type { Theme } from '@/src/features/profile/domain/Theme.ts';

const STATE: Profile = {
  language: 'en',
  mode: 'system',
  theme: 'dusk',
  isPlay: true,
};

export function ProfileProvider({ children }: { children: Children }) {
  const { i18n } = useTranslation();
  const [authentification] = useAuthentification();

  const user = `${PROFILE_KEY}::${authentification.user ?? 'guest'}`;

  const [profile, setProfile] = useInitializer<Profile, ProfileDispatch>(
    profileReducer,
    STATE,
    user
  );

  const updateClass = useCallback((mode: Mode, theme: Theme) => {
    const classMap = {
      _dark_3mma_0: mode === 'dark' || mode === 'system',
      _light_3mma_0: mode === 'light',
      _dusk_3mma_0: theme === 'dusk',
      _tumult_3mma_0: theme === 'tumult',
      _cataclysm_3mma_0: theme === 'cataclysm',
    };
    for (const [name, condition] of Object.entries(classMap)) {
      document.body.classList.toggle(name, condition);
    }
  }, []);

  const updateLanguage = useCallback((language: Language) => {
    i18n.changeLanguage(language).then(() => undefined);
    document.documentElement.lang = language;
  }, []);

  useEffect(() => {
    updateLanguage(profile.language);
  }, [profile.language]);

  useEffect(() => {
    updateClass(profile.mode, profile.theme);
  }, [profile.mode, profile.theme]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) => {
      setProfile({ type: 'SET_MODE', mode: event.matches ? 'dark' : 'light' });
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [setProfile]);

  return (
    <ProfileContext.Provider
      value={[profile, setProfile]}
      key={authentification.user}
    >
      {children}
    </ProfileContext.Provider>
  );
}
