import { useEffect, useMemo, useReducer } from 'react';
import { useAuthentification } from '@/src/features/authentification/infrastructure/useAuthentification.ts';
import { ProfileContext } from '@/src/features/profile/infrastructure/ProfileContext.ts';
import { profileReducer } from '@/src/features/profile/application/profileReducer.ts';
import { PROFILE_KEY } from '@/src/features/profile/infrastructure/profileKey.ts';
import type { Children } from '@/src/common/shared/types/Children.ts';
import type { Profile } from '@/src/features/profile/domain/Profile.ts';

const STATE: Profile = {
  language: 'en',
  mode: 'system',
  theme: 'dusk',
  isPlay: true,
};

export function ProfileProvider({ children }: { children: Children }) {
  const [authentification] = useAuthentification();

  const setUser = useMemo(() => {
    return `${PROFILE_KEY}::${authentification.user ?? 'guest'}`;
  }, [authentification.user]);

  const initializer = (): Profile => {
    const stored = localStorage.getItem(setUser);
    return stored ? JSON.parse(stored) : STATE;
  };

  const [profile, setProfile] = useReducer(profileReducer, null, initializer);

  useEffect(() => {
    const stored = localStorage.getItem(setUser);
    const nextState = stored ? JSON.parse(stored) : STATE;
    setProfile({ type: 'INITIALIZE', state: nextState });
  }, [setUser]);

  useEffect(() => {
    localStorage.setItem(setUser, JSON.stringify(profile));
  }, [profile, setUser]);

  return (
    <ProfileContext.Provider
      value={[profile, setProfile]}
      key={authentification.user}
    >
      {children}
    </ProfileContext.Provider>
  );
}
