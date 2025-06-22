import { useEffect } from 'react';
import { useAuthentification } from '@/src/features/authentification/infrastructure/useAuthentification.ts';
import { usePersistedReducer } from '@/src/common/shared/hooks/usePersistedReducer.ts';
import { profileReducer } from '@/src/features/profile/application/profileReducer.ts';
import { ProfileContext } from '@/src/features/profile/infrastructure/ProfileContext.ts';
import { PROFILE_KEY } from '@/src/features/profile/infrastructure/profileKey.ts';
import type { Children } from '@/src/common/shared/types/Children.ts';
import type { Profile } from '@/src/features/profile/domain/Profile.ts';

const STATE: Profile = {
  user: '',
  language: 'en',
  mode: 'system',
  theme: 'dusk',
  isPlay: true,
};

export function ProfileProvider({ children }: { children: Children }) {
  const [authentification] = useAuthentification();
  const [profile, setProfile] = usePersistedReducer(PROFILE_KEY, profileReducer, STATE);

  useEffect(() => {
    const user = authentification.user;
    setProfile({ type: 'SET_USER', user });
  }, [authentification.user]);

  return <ProfileContext.Provider value={[profile, setProfile]}>{children}</ProfileContext.Provider>;
}
